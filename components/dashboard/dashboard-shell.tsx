"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { DashboardSidebar } from "@/components/navigation/sidebar";
import { DashboardTopbar } from "@/components/navigation/topbar";
import { cn } from "@/lib/utils";

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/agents": "Agents",
  "/dashboard/agents/new": "New Agent",
  "/dashboard/workspaces": "Workspaces",
  "/dashboard/settings": "Settings",
};

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const userEmail = "user@atom.app";

  const handleSignOut = () => {
    console.log("Sign out");
  };

  const pageTitle =
    PAGE_TITLES[pathname ?? ""] ??
    PAGE_TITLES[pathname?.split("/").slice(0, 3).join("/") ?? ""] ??
    "Overview";

  return (
    <div className="flex min-h-screen bg-black">
      <DashboardSidebar
        onCloseMobile={() => undefined}
        userEmail={userEmail}
        onSignOut={handleSignOut}
        className="fixed inset-y-0 left-0 hidden md:flex"
      />

      <div className={cn("flex w-full flex-1 flex-col md:ml-[240px]")}>
        <DashboardTopbar
          className="sticky top-0 z-30 border-b border-white/5 bg-black/80 backdrop-blur-xl"
          onOpenQuickActions={() => {}}
          pageTitle={pageTitle}
        />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
