import { redirect } from "next/navigation";

import { WorkspaceOnboardingForm } from "./workspace-onboarding-form";
import { prisma } from "@/lib/prisma";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function WorkspaceOnboardingPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    redirect("/sign-in");
  }

  let dbUser = await prisma.user.findUnique({
    where: { email: user.email },
    select: { id: true },
  });

  if (dbUser) {
    const membership = await prisma.workspaceMember.findFirst({
      where: { userId: dbUser.id },
      select: { workspaceId: true },
    });

    if (membership) {
      redirect("/dashboard");
    }
  }

  return (
    <WorkspaceOnboardingForm
      email={user.email}
      initialName={(user.user_metadata?.full_name as string | undefined) ?? null}
    />
  );
}


