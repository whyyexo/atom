"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { BrainIcon, HomeIcon } from "@/components/icons/lineicons";

export default function AgentsPage() {
  const [activeView, setActiveView] = useState("All agents");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Agents", icon: <BrainIcon /> },
        ]}
        title="Agents"
        titleIcon={<BrainIcon />}
        views={["All agents", "Active", "Inactive", "Templates"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">No agents yet</p>
        </div>
      </div>
    </div>
  );
}
