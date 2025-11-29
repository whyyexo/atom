import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import { getWorkspaceBySlug } from "@/lib/supabase/workspace";
import { WorkspaceShell } from "@/components/workspace/workspace-shell";

export default async function WorkspaceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const workspace = await getWorkspaceBySlug(slug);

  if (!workspace || workspace.user_id !== user.id) {
    redirect("/auth/login");
  }

  return (
    <WorkspaceShell workspace={workspace} user={user}>
      {children}
    </WorkspaceShell>
  );
}

