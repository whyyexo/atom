"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { FolderIcon, HomeIcon } from "@/components/icons/lineicons";

export default function WorkspacesPage() {
  const [activeView, setActiveView] = useState("All workspaces");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Workspaces", icon: <FolderIcon /> },
        ]}
        title="Workspaces"
        titleIcon={<FolderIcon />}
        views={["All workspaces", "My workspaces", "Shared", "Archived"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">No workspaces yet</p>
        </div>
      </div>
    </div>
  );
}
