"use client";

import { DashboardSidebar } from "@/components/navigation/sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const userEmail = "user@atom.app";
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSignOut = () => {
    console.log("Sign out");
  };

  return (
    <div className="flex min-h-screen bg-white">
      <DashboardSidebar
        onCloseMobile={() => undefined}
        userEmail={userEmail}
        onSignOut={handleSignOut}
        className="fixed inset-y-0 left-0 hidden md:flex"
        isCollapsed={isCollapsed}
        onCollapseChange={setIsCollapsed}
      />

      <div className={cn("flex w-full flex-1 flex-col transition-all duration-300", isCollapsed ? "md:ml-[64px]" : "md:ml-[240px]")}>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
