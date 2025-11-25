export default function DashboardPage() {
  return (
    <div className="flex h-full flex-col bg-black">
      <div className="flex-1 space-y-8 p-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
          <p className="text-base font-normal text-white/60">
            Here's what's happening with your workspace today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-white/60">Workspaces</p>
              <p className="text-3xl font-semibold text-white">0</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-white/60">Tasks</p>
              <p className="text-3xl font-semibold text-white">0</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-white/60">Notes</p>
              <p className="text-3xl font-semibold text-white">0</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-white/60">Agents</p>
              <p className="text-3xl font-semibold text-white">0</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm text-white/60">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
