'use client';

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { type HTMLAttributes } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DashboardTopbarProps = HTMLAttributes<HTMLDivElement> & {
  onOpenSidebar?: () => void;
};

export function DashboardTopbar({
  className,
  onOpenSidebar,
  ...props
}: DashboardTopbarProps) {
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
          width={120}
          height={28}
          priority
        />
        <div className="hidden flex-col text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground md:flex">
          <span>AI Workspace Platform</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="border-border/70">
          Upgrade plan
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}


