"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { DashboardSidebar } from "@/components/navigation/sidebar";
import { DashboardTopbar } from "@/components/navigation/topbar";
import { Modal, ModalContent } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  useEffect(() => {
    let isMounted = true;

    async function loadSession() {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!isMounted) return;
      if (!user) {
        router.replace("/sign-in");
        return;
      }

      setUserEmail(user.email ?? user.user_metadata?.email ?? "team@atom.app");
      setLoading(false);
    }

    loadSession();

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;

      if (!session?.user) {
        router.replace("/sign-in");
        return;
      }

      setUserEmail(
        session.user.email ?? session.user.user_metadata?.email ?? "team@atom.app",
      );
      setLoading(false);
    });

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, [router, supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/sign-in");
  };

  const pageTitle =
    PAGE_TITLES[pathname ?? ""] ??
    PAGE_TITLES[pathname?.split("/").slice(0, 3).join("/") ?? ""] ??
    "Overview";

  if (loading || !userEmail) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
          <Skeleton className="h-12 w-12 rounded-2xl" />
          <p>Loading your workspace…</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative flex min-h-screen bg-background">
        <DashboardSidebar
          isCollapsed={sidebarCollapsed}
          onToggleCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          onCloseMobile={() => setSidebarOpen(false)}
          userEmail={userEmail}
          onSignOut={handleSignOut}
          className="hidden md:flex"
        />

        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
              />
              <DashboardSidebar
                isCollapsed={false}
                onToggleCollapsed={() => setSidebarCollapsed((prev) => !prev)}
                onCloseMobile={() => setSidebarOpen(false)}
                userEmail={userEmail}
                onSignOut={handleSignOut}
                className="fixed inset-y-0 left-0 z-50 w-[248px] md:hidden"
              />
            </>
          )}
        </AnimatePresence>

        <div
          className={cn(
            "flex w-full flex-1 flex-col transition-[margin] duration-300 ease-out",
            sidebarCollapsed ? "md:ml-[84px]" : "md:ml-[248px]",
          )}
        >
          <DashboardTopbar
            className="sticky top-0 z-30"
            onOpenSidebar={() => setSidebarOpen(true)}
            onOpenQuickActions={() => setIsCommandOpen(true)}
            pageTitle={pageTitle}
          />

          <main className="flex-1 bg-gradient-to-br from-background via-background to-background/60 px-4 pb-12 pt-6 sm:px-6 lg:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mx-auto flex w-full max-w-6xl flex-col gap-6"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
          <footer className="flex items-center justify-between border-t border-border/60 bg-background/70 px-6 py-4 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Atom Labs</span>
            <div className="flex items-center gap-3">
              <span>Docs</span>
              <span>Status</span>
            </div>
          </footer>
        </div>
    </div>

    <Modal open={isCommandOpen} onOpenChange={setIsCommandOpen}>
      <ModalContent
        title="Quick command"
        description="Draft a quick instruction for one of your agents."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsCommandOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsCommandOpen(false)}>Send</Button>
          </>
        }
      >
        <Input placeholder="Which agent should receive this?" />
        <Textarea placeholder="Describe the action you want the agent to take..." className="min-h-[120px]" />
      </ModalContent>
    </Modal>
    </>
  );
}


