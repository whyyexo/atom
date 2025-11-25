"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { HomeIcon, DollarSignIcon, UserCheckIcon } from "@/components/icons/lineicons";

export default function LeadsPage() {
  const [activeView, setActiveView] = useState("All leads");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Sales", icon: <DollarSignIcon /> },
          { label: "Leads", icon: <UserCheckIcon /> },
        ]}
        title="Leads"
        titleIcon={<UserCheckIcon />}
        views={["All leads", "New", "Qualified", "Converted"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">No leads yet</p>
        </div>
      </div>
    </div>
  );
}

