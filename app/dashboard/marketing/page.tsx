"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { HomeIcon, MegaphoneIcon } from "@/components/icons/lineicons";

export default function MarketingPage() {
  const [activeView, setActiveView] = useState("All campaigns");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Marketing", icon: <MegaphoneIcon /> },
        ]}
        title="Marketing"
        titleIcon={<MegaphoneIcon />}
        views={["All campaigns", "Active", "Drafts", "Archived"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">Marketing overview</p>
        </div>
      </div>
    </div>
  );
}

