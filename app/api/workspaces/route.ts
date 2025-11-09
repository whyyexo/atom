import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { createSupabaseServerClient } from "@/lib/supabase/server";

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
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
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

  const existingSlug = await prisma.workspace.findUnique({
    where: { slug },
    select: { id: true },
  });

  if (existingSlug) {
    return NextResponse.json(
      { error: "This workspace URL is already in use." },
      { status: 409 },
    );
  }

  let dbUser = await prisma.user.findUnique({
    where: { email: user.email },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        email: user.email,
        clerkId: user.id,
        name:
          (user.user_metadata?.full_name as string | undefined)?.trim() ??
          user.email.split("@")[0],
      },
    });
  }

  const workspace = await prisma.workspace.create({
    data: {
      name,
      slug,
      ownerId: dbUser.id,
      members: {
        create: {
          userId: dbUser.id,
          role: "OWNER",
        },
      },
    },
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });

  return NextResponse.json({ workspace }, { status: 201 });
}


