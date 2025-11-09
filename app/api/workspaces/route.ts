console.log("SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL);
console.log("SERVICE_ROLE?", Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY));
import { NextRequest, NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseRouteClient } from "@/lib/supabase/route";
import { WorkspaceRow } from "@/types/supabase";

type CreateWorkspaceBody = {
  name?: string;
  slug?: string;
};

function normalizeSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9- ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function POST(request: NextRequest) {
  const supabase = createSupabaseRouteClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id || !user.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as CreateWorkspaceBody;
  const name = body.name?.trim();
  const rawSlug = body.slug?.trim();

  if (!name || !rawSlug) {
    return NextResponse.json(
      { error: "Name and slug are required." },
      { status: 400 },
    );
  }

  const slug = normalizeSlug(rawSlug);

  if (!slug) {
    return NextResponse.json(
      { error: "Slug must contain at least one alphanumeric character." },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();

  const { data: existingSlug, error: slugError } = await admin
    .from("workspaces")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (slugError && slugError.code !== "PGRST116") {
    console.error("Slug check failed", slugError);
    return NextResponse.json({ error: "Unable to verify workspace URL." }, { status: 500 });
  }

  if (existingSlug) {
    return NextResponse.json(
      { error: "This workspace URL is already in use." },
      { status: 409 },
    );
  }

  const { data: profile, error: profileError } = await admin
    .from("users")
    .select("id")
    .eq("auth_id", user.id)
    .maybeSingle();

  let profileId = profile?.id;

  if (profileError && profileError.code !== "PGRST116") {
    console.error("Failed to fetch user profile", profileError);
    return NextResponse.json({ error: "Unable to load user profile." }, { status: 500 });
  }

  if (!profileId) {
    const { data: createdProfile, error: createProfileError } = await admin
      .from("users")
      .insert({
        auth_id: user.id,
        email: user.email,
        display_name:
          (user.user_metadata?.full_name as string | undefined)?.trim() ??
          user.email.split("@")[0],
      })
      .select("id")
      .single();

    if (createProfileError || !createdProfile) {
      console.error("Failed to create user profile", createProfileError);
      return NextResponse.json({ error: "Unable to create user profile." }, { status: 500 });
    }

    profileId = createdProfile.id;
  }

  const { data: workspace, error: workspaceError } = await admin
    .from("workspaces")
    .insert({
      name,
      slug,
      owner_id: profileId,
    })
    .select("id, name, slug")
    .single();

  if (workspaceError || !workspace) {
    console.error("Failed to create workspace", workspaceError);
    return NextResponse.json({ error: "Unable to create workspace." }, { status: 500 });
  }

  const { error: membershipError } = await admin.from("workspace_members").insert({
    workspace_id: workspace.id,
    user_id: profileId,
    role: "OWNER",
  });

  if (membershipError) {
    console.error("Failed to create membership", membershipError);
    return NextResponse.json({ error: "Unable to create workspace membership." }, { status: 500 });
  }

  const workspaceResponse: Pick<WorkspaceRow, "id" | "name" | "slug"> = workspace;

  return NextResponse.json({ workspace: workspaceResponse }, { status: 201 });
}


