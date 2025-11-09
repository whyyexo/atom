import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return NextResponse.json({ workspace: null }, { status: 200 });
  }

  const dbUser = await prisma.user.findUnique({
    where: { email: user.email },
    select: { id: true },
  });

  if (!dbUser) {
    return NextResponse.json({ workspace: null }, { status: 200 });
  }

  const membership = await prisma.workspaceMember.findFirst({
    where: { userId: dbUser.id },
    include: {
      workspace: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  if (!membership?.workspace) {
    return NextResponse.json({ workspace: null }, { status: 200 });
  }

  return NextResponse.json({ workspace: membership.workspace }, { status: 200 });
}


