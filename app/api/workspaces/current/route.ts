import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseRouteClient } from "@/lib/supabase/route";

export async function GET() {
  try {
    const supabase = await createSupabaseRouteClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id || !user.email) {
      return NextResponse.json({ workspace: null }, { status: 200 });
    }

    const admin = createSupabaseAdminClient();
    const { data: profile, error: profileError } = await admin
      .from("users")
      .select("id")
      .eq("auth_id", user.id)
      .maybeSingle();

    if (profileError && profileError.code !== "PGRST116") {
      console.error("Failed to fetch user profile", profileError);
      return NextResponse.json({ error: "Unable to load workspace." }, { status: 500 });
    }

    if (!profile) {
      return NextResponse.json({ workspace: null }, { status: 200 });
    }

    const { data: membership, error: membershipError } = await admin
      .from("workspace_members")
      .select("workspace:workspaces(id, name, slug)")
      .eq("user_id", profile.id)
      .order("created_at", { ascending: true })
      .maybeSingle();

    if (membershipError && membershipError.code !== "PGRST116") {
      console.error("Failed to fetch workspace membership", membershipError);
      return NextResponse.json({ error: "Unable to load workspace." }, { status: 500 });
    }

    if (!membership?.workspace) {
      return NextResponse.json({ workspace: null }, { status: 200 });
    }

    return NextResponse.json({ workspace: membership.workspace }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch current workspace", error);
    return NextResponse.json(
      { error: "Unable to load workspace. Please try again or contact support." },
      { status: 500 },
    );
  }
}


