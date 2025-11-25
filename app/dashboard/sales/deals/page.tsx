"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { HomeIcon, DollarSignIcon, BarChartIcon } from "@/components/icons/lineicons";

export default function DealsPage() {
  const [activeView, setActiveView] = useState("All deals");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Sales", icon: <DollarSignIcon /> },
          { label: "Deals", icon: <BarChartIcon /> },
        ]}
        title="Deals"
        titleIcon={<BarChartIcon />}
        views={["All deals", "Open", "Won", "Lost"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">No deals yet</p>
        </div>
      </div>
    </div>
  );
}

