import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import { DashboardHome } from "@/components/workspace/dashboard-home";

export default async function WorkspacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: workspace } = await supabase
    .from("workspaces")
    .select("*")
    .eq("slug", slug)
    .eq("user_id", user.id)
    .single();

  if (!workspace) {
    redirect("/login");
  }

  // Fetch dashboard data
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("workspace_id", workspace.id)
    .order("created_at", { ascending: false })
    .limit(3);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const { data: tasksDueToday } = await supabase
    .from("tasks")
    .select("*")
    .eq("workspace_id", workspace.id)
    .gte("due_date", today.toISOString())
    .lt("due_date", tomorrow.toISOString());

  const { data: tasksUpcoming } = await supabase
    .from("tasks")
    .select("*")
    .eq("workspace_id", workspace.id)
    .gte("due_date", tomorrow.toISOString())
    .order("due_date", { ascending: true })
    .limit(5);

  const { data: tasksOverdue } = await supabase
    .from("tasks")
    .select("*")
    .eq("workspace_id", workspace.id)
    .lt("due_date", today.toISOString())
    .neq("status", "done");

  return (
    <DashboardHome
      workspace={workspace}
      projects={projects || []}
      tasksDueToday={tasksDueToday || []}
      tasksUpcoming={tasksUpcoming || []}
      tasksOverdue={tasksOverdue || []}
      userName={user.user_metadata?.full_name || user.email?.split("@")[0] || "User"}
    />
  );
}

