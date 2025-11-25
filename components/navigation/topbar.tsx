"use client";

import { Search } from "lucide-react";
import { type HTMLAttributes, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type DashboardTopbarProps = HTMLAttributes<HTMLDivElement> & {
  onOpenQuickActions: () => void;
  pageTitle: string;
};

export function DashboardTopbar({
  className,
  onOpenQuickActions,
  pageTitle,
  ...props
}: DashboardTopbarProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header
      className={cn(
        "flex h-16 items-center justify-between px-8",
        className
      )}
      {...props}
    >
      <h1 className="text-xl font-semibold tracking-tight text-white">
        {pageTitle}
      </h1>

      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-white/40" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search..."
            className="h-9 w-64 rounded-lg border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors"
          />
          <kbd className="pointer-events-none absolute right-3 hidden h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/60 sm:flex">
            ⌘K
          </kbd>
        </div>
      </div>
    </header>
  );
}
