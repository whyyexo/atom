"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";

export default function DashboardPage() {
  const [activeView, setActiveView] = useState("Default view");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={["Dashboard"]}
        title="Overview"
        views={["Default view", "My Tasks", "Active projects"]}
        activeView={activeView}
        onViewChange={setActiveView}
      />

      <div className="flex-1 space-y-8 p-8">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-black/60">Workspaces</p>
              <p className="text-3xl font-semibold text-black">0</p>
            </div>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-black/60">Tasks</p>
              <p className="text-3xl font-semibold text-black">0</p>
            </div>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-black/60">Notes</p>
              <p className="text-3xl font-semibold text-black">0</p>
            </div>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-black/60">Agents</p>
              <p className="text-3xl font-semibold text-black">0</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-black">Recent Activity</h2>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <p className="text-sm text-black/60">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
