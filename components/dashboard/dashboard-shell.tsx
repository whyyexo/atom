"use client";

import { PremiumSidebar } from "@/components/dashboard/premium-sidebar";
import { PremiumTopBar } from "@/components/dashboard/premium-topbar";
import { usePathname } from "next/navigation";

type DashboardShellProps = {
  children: React.ReactNode;
};

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/projects": "Projects",
  "/dashboard/tasks": "Tasks",
  "/dashboard/calendar": "Calendar",
  "/dashboard/notes": "Notes",
  "/dashboard/analytics": "Analytics",
  "/dashboard/notifications": "Notifications",
  "/dashboard/team": "Team",
  "/dashboard/settings": "Settings",
};

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname] || "Dashboard";

  const handleSignOut = () => {
    console.log("Sign out");
  };

  return (
    <div className="flex min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <PremiumSidebar userEmail="user@atom.app" userName="User" onSignOut={handleSignOut} />

      <div className="flex w-full flex-1 flex-col ml-[280px]">
        <PremiumTopBar title={pageTitle} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
