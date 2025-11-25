"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { HomeIcon, MegaphoneIcon, ImageIcon } from "@/components/icons/lineicons";

export default function ContentPage() {
  const [activeView, setActiveView] = useState("All content");

  return (
    <div className="flex h-full flex-col bg-white">
      <PageHeader
        breadcrumb={[
          { label: "Dashboard", icon: <HomeIcon /> },
          { label: "Marketing", icon: <MegaphoneIcon /> },
          { label: "Content", icon: <ImageIcon /> },
        ]}
        title="Content"
        titleIcon={<ImageIcon />}
        views={["All content", "Published", "Drafts", "Templates"]}
        activeView={activeView}
        onViewChange={setActiveView}
        onEdit={() => console.log("Edit views")}
        onCreate={() => console.log("Create new view")}
      />

      <div className="flex-1 space-y-8 p-8">
        <div className="rounded-xl border border-black/10 bg-white p-6">
          <p className="text-sm text-black/60">No content yet</p>
        </div>
      </div>
    </div>
  );
}

