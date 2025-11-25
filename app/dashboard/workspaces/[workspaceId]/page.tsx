"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { PageHeader } from "@/components/dashboard/page-header";
import { FolderIcon, HomeIcon, BarChartIcon } from "@/components/icons/lineicons";

export default function WorkspaceDetailPage() {
  const params = useParams();
  const workspaceId = params.workspaceId as string;
  const [activeView, setActiveView] = useState("Overview");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Workspaces", icon: <FolderIcon /> },
          { label: workspaceId, icon: <BarChartIcon /> },
        ]}
        title={workspaceId}
        titleIcon={<BarChartIcon />}
        views={["Overview", "Tasks", "Notes", "Members"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">Workspace details</p>
        </div>
      </div>
    </div>
  );
}
