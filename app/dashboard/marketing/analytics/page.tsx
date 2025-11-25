"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { HomeIcon, MegaphoneIcon, TrendingUpIcon } from "@/components/icons/lineicons";

export default function AnalyticsPage() {
  const [activeView, setActiveView] = useState("Overview");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Marketing", icon: <MegaphoneIcon /> },
          { label: "Analytics", icon: <TrendingUpIcon /> },
        ]}
        title="Analytics"
        titleIcon={<TrendingUpIcon />}
        views={["Overview", "Campaigns", "Audience", "Conversions"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">Analytics dashboard</p>
        </div>
      </div>
    </div>
  );
}

