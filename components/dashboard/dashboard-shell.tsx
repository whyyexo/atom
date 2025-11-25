"use client";

import { DashboardSidebar } from "@/components/navigation/sidebar";
import { cn } from "@/lib/utils";

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const userEmail = "user@atom.app";

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
      />

      <div className={cn("flex w-full flex-1 flex-col md:ml-[240px]")}>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
