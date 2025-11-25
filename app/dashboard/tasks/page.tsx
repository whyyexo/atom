"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { CheckSquareIcon, HomeIcon } from "@/components/icons/lineicons";

export default function TasksPage() {
  const [activeView, setActiveView] = useState("All tasks");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Tasks", icon: <CheckSquareIcon /> },
        ]}
        title="Tasks"
        titleIcon={<CheckSquareIcon />}
        views={["All tasks", "My tasks", "Completed", "Overdue"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">No tasks yet</p>
        </div>
      </div>
    </div>
  );
}

