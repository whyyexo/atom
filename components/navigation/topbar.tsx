"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { type HTMLAttributes, useMemo } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DashboardTopbarProps = HTMLAttributes<HTMLDivElement> & {
  onOpenSidebar?: () => void;
  userEmail: string;
};

export function DashboardTopbar({
  className,
  onOpenSidebar,
  userEmail,
  ...props
}: DashboardTopbarProps) {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/sign-in");
    router.refresh();
  }

  const initials = userEmail?.[0]?.toUpperCase() ?? "A";

  return (
    <header
      className={cn(
        "flex h-16 items-center justify-between border-b border-border/80 bg-background/80 px-4 py-2 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenSidebar}
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <Image
          src="/ATOM_blanc.png"
          alt="Atom logo"
          width={110}
          height={28}
          priority
        />
        <div className="hidden flex-col text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground md:flex">
          <span>AI Workspace Platform</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden flex-col text-right text-xs text-muted-foreground sm:flex">
          <span className="text-sm font-semibold text-foreground">
            {userEmail}
          </span>
          <span>Workspace owner</span>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {initials}
        </div>
        <Button variant="outline" size="sm" className="border-border/70" onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
    </header>
  );
}


