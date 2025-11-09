import { NextRequest, NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function normalizeSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9- ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slugParam = searchParams.get("slug");

  if (!slugParam) {
    return NextResponse.json(
      { available: false, reason: "Missing slug parameter." },
      { status: 400 },
    );
  }

  const normalized = normalizeSlug(slugParam);

  if (!normalized) {
    return NextResponse.json(
      { available: false, reason: "Slug must contain alphanumeric characters." },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: existing, error } = await admin
    .from("workspaces")
    .select("id")
    .eq("slug", normalized)
    .maybeSingle();

  if (error && error.code !== "PGRST116") {
    console.error("Failed to check workspace slug", error);
    return NextResponse.json(
      { available: false, reason: "Unable to verify slug availability." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    available: !existing,
    slug: normalized,
  });
}


