import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

import { WorkspaceOnboardingForm } from "./workspace-onboarding-form";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function WorkspaceOnboardingPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id || !user.email) {
    redirect("/sign-in");
  }

  const admin = createSupabaseAdminClient();
  const { data: profile } = await admin
    .from("users")
    .select("id")
    .eq("auth_id", user.id)
    .maybeSingle();

  if (profile) {
    const { data: membership } = await admin
      .from("workspace_members")
      .select("workspace_id")
      .eq("user_id", profile.id)
      .maybeSingle();

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


