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
  user: {
    id: string;
    email?: string;
    user_metadata?: any;
  };
};

export function DashboardShell({ children, user }: DashboardShellProps) {
  const [userEmail, setUserEmail] = useState<string | null>(
    user?.email ?? user?.user_metadata?.email ?? null
  );
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.replace("/sign-in");
        return;
      }

      setUserEmail(
        session.user.email ?? session.user.user_metadata?.email ?? "team@atom.app",
      );
    });

    return () => {
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

  if (!userEmail) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
          <Skeleton className="h-12 w-12 rounded-2xl" />
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative flex min-h-screen bg-background">
        <DashboardSidebar
          onCloseMobile={() => undefined}
          userEmail={userEmail}
          onSignOut={handleSignOut}
          className="fixed inset-y-0 left-0 hidden md:flex"
        />

        <div
          className={cn(
            "flex w-full flex-1 flex-col md:ml-[248px]",
          )}
        >
          <DashboardTopbar
            className="sticky top-0 z-30"
            onOpenQuickActions={() => setIsCommandOpen(true)}
            pageTitle={pageTitle}
          />

          <main className="flex-1 px-2 pb-10 pt-3 sm:px-3 lg:px-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="flex w-full flex-col"
              >
                <div className="relative flex min-h-[calc(100vh-5.5rem)] flex-col overflow-hidden rounded-[36px] border border-white/5 bg-white/[0.02] p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.7)] backdrop-blur">
                  {children}
                  <div className="mt-auto flex items-center justify-between pt-10 text-[11px] uppercase tracking-[0.32em] text-white/30">
                    <span>© {new Date().getFullYear()} Atom Labs</span>
                    <div className="flex items-center gap-6">
                      <span>Docs</span>
                      <span>Status</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
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


