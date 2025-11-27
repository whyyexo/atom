"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { CommandPalette } from "./command-palette";
import { cn } from "@/lib/utils";

type PremiumTopBarProps = {
  title?: string;
  className?: string;
};

export function PremiumTopBar({ title = "Dashboard", className }: PremiumTopBarProps) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-40 h-14 border-b border-black/5 dark:border-white/5",
          "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl",
          className
        )}
      >
        <div className="flex h-full items-center justify-between px-6">
          {/* Page Title */}
          <h1 className="text-base font-semibold tracking-tight text-black dark:text-white">{title}</h1>

          {/* Search and Command Palette */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1.5 text-sm text-black/60 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-150"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-black/50 px-1.5 font-mono text-[10px] font-medium text-black/50 dark:text-white/50">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </div>

      <CommandPalette open={isCommandPaletteOpen} onOpenChange={setIsCommandPaletteOpen} />
    </>
  );
}

