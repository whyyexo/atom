'use client';

import { useState } from "react";

import { DashboardSidebar } from "@/components/navigation/sidebar";
import { DashboardTopbar } from "@/components/navigation/topbar";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden w-64 md:flex">
        <DashboardSidebar />
      </div>
      {sidebarOpen ? (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-72 max-w-full">
            <DashboardSidebar />
          </div>
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      ) : null}
      <div className="flex w-full flex-1 flex-col">
        <DashboardTopbar onOpenSidebar={() => setSidebarOpen(true)} />
        <main className="flex-1 bg-muted/40 p-6">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
            {children}
          </div>
        </main>
        <Separator />
        <footer className="flex items-center justify-between bg-background px-6 py-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Atom Labs</span>
          <div className="flex items-center gap-3">
            <span>Docs</span>
            <span>Status</span>
          </div>
        </footer>
      </div>
    </div>
  );
}


