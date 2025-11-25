"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { SettingsIcon, HomeIcon } from "@/components/icons/lineicons";

export default function SettingsPage() {
  const [activeView, setActiveView] = useState("General");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Settings", icon: <SettingsIcon /> },
        ]}
        title="Settings"
        titleIcon={<SettingsIcon />}
        views={["General", "Account", "Notifications", "Billing"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">Settings content</p>
        </div>
      </div>
    </div>
  );
}
