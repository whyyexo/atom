"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { DashboardSidebar } from "@/components/navigation/sidebar";
import { DashboardTopbar } from "@/components/navigation/topbar";
import { Separator } from "@/components/ui/separator";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  useEffect(() => {
    let isMounted = true;

    async function loadSession() {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!isMounted) {
        return;
      }

      if (!user) {
        router.replace("/sign-in");
        return;
      }

      setUserEmail(user.email ?? user.user_metadata?.email ?? "team@atom.app");
      setLoading(false);
    }

    loadSession();

    const {
      data: authListener,
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;
      if (!session?.user) {
        router.replace("/sign-in");
      } else {
        setUserEmail(
          session.user.email ??
            session.user.user_metadata?.email ??
            "team@atom.app",
        );
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      authListener.subscription.unsubscribe();
    };
  }, [router, supabase]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <span className="h-10 w-10 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
          <p>Loading your workspace…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden w-64 md:flex">
        <DashboardSidebar />
      </div>

      {sidebarOpen ? (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-72 max-w-full bg-background">
            <DashboardSidebar />
          </div>
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
            role="button"
            tabIndex={-1}
          />
        </div>
      ) : null}

      <div className="flex w-full flex-1 flex-col">
        <DashboardTopbar
          onOpenSidebar={() => setSidebarOpen(true)}
          userEmail={userEmail ?? "team@atom.app"}
        />
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


