"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
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
  "/dashboard/agents/[agentId]": "Agent Details",
  "/dashboard/workspaces": "Workspaces",
  "/dashboard/workspaces/new": "New Workspace",
  "/dashboard/workspaces/[workspaceId]": "Workspace",
  "/dashboard/messages": "Messages",
  "/dashboard/settings": "Settings",
  "/dashboard/inbox": "Inbox",
  "/dashboard/my-issues": "My Issues",
  "/dashboard/integrations": "Integrations",
  "/dashboard/billing": "Billing",
  "/dashboard/logs": "Audit Logs",
};

type ShellProps = {
  children: React.ReactNode;
};

export function Shell({ children }: ShellProps) {
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
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-xl" />
          <div className="space-y-2 text-center">
            <p className="text-sm font-medium text-foreground">Loading your dashboard...</p>
            <p className="text-xs text-muted-foreground">Please wait a moment</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative flex min-h-screen bg-background">
        <Sidebar
          userEmail={userEmail}
          onSignOut={handleSignOut}
          className="hidden md:flex"
        />

        <div className="flex w-full flex-1 flex-col md:ml-[240px]">
          <Navbar
            onOpenQuickActions={() => setIsCommandOpen(true)}
            pageTitle={pageTitle}
          />

          <main className="flex-1">
            <div className="mx-auto max-w-7xl container-padding py-8 lg:py-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathname}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="flex w-full flex-col"
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>
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
          <Textarea
            placeholder="Describe the action you want the agent to take..."
            className="min-h-[120px]"
          />
        </ModalContent>
      </Modal>
    </>
  );
}

