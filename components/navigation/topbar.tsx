'use client';

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
        <div className="hidden flex-col text-sm md:flex">
          <span className="font-medium text-foreground">Dashboard</span>
          <span className="text-xs text-muted-foreground">
            Track workspaces, agents, and conversations.
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          Upgrade plan
        </Button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          JL
        </div>
      </div>
    </header>
  );
}


