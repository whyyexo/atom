import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

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

  const existing = await prisma.workspace.findUnique({
    where: { slug: normalized },
    select: { id: true },
  });

  return NextResponse.json({
    available: !existing,
    slug: normalized,
  });
}


