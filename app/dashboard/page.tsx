import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-8 p-8">
        <div>
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="text-muted-foreground mt-2">
            {user?.email ? `Signed in as ${user.email}` : "Loading..."}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Workspaces</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Tasks</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Notes</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Agents</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
