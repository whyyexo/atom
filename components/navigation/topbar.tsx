"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Search, Moon, SunMedium } from "lucide-react";
import { type HTMLAttributes, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/providers/theme-provider";
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
  const { theme, toggleTheme } = useTheme();

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
        "flex h-20 items-center justify-between bg-transparent px-6",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <motion.h1
          key={pageTitle}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-xl font-semibold tracking-tight text-white md:text-2xl"
        >
          {pageTitle}
        </motion.h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-1.5 sm:flex">
          <Search className="h-4 w-4 text-white/50" />
          <Input
            ref={searchRef}
            id="global-search"
            placeholder="Search or jump to..."
            className="h-7 border-none bg-transparent p-0 text-xs uppercase tracking-[0.18em] text-white/80 placeholder:text-white/40 focus-visible:ring-0"
          />
          <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-white/50">
            ⌘K
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 text-xs font-medium uppercase tracking-[0.22em] text-white/90 hover:bg-white/[0.08] md:flex"
          onClick={onOpenQuickActions}
        >
          <Sparkles className="h-4 w-4 text-primary" />
          Quick Actions
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full border border-white/10 bg-white/[0.04] text-white" onClick={toggleTheme}>
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: -40 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 40 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: 40 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -40 }}
                transition={{ duration: 0.2 }}
              >
                <SunMedium className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </header>
  );
}


