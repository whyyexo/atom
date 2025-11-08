"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Search, Moon, SunMedium, Menu } from "lucide-react";
import { type HTMLAttributes, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

type DashboardTopbarProps = HTMLAttributes<HTMLDivElement> & {
  onOpenSidebar?: () => void;
  onOpenQuickActions: () => void;
  pageTitle: string;
};

export function DashboardTopbar({
  className,
  onOpenSidebar,
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
        "flex h-16 items-center justify-between border-b border-border/70 bg-background/90 px-4 backdrop-blur",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onOpenSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <motion.h1
          key={pageTitle}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-lg font-semibold tracking-tight text-foreground md:text-xl"
        >
          {pageTitle}
        </motion.h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden items-center gap-2 rounded-2xl border border-border/70 bg-muted/40 px-3 py-1.5 sm:flex">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            ref={searchRef}
            id="global-search"
            placeholder="Search or jump to..."
            className="h-7 border-none bg-transparent p-0 text-sm focus-visible:ring-0"
          />
          <span className="rounded-md bg-border/80 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            ⌘K
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="hidden items-center gap-2 rounded-full border-border/70 bg-muted/30 text-sm font-medium text-foreground hover:bg-muted md:flex"
          onClick={onOpenQuickActions}
        >
          <Sparkles className="h-4 w-4 text-primary" />
          Quick actions
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full border border-border/60" onClick={toggleTheme}>
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
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 rounded-full border border-border/70 bg-muted/30 text-sm text-foreground hover:bg-muted md:hidden"
          onClick={onOpenQuickActions}
        >
          <Sparkles className="h-4 w-4 text-primary" />
          AI
        </Button>
      </div>
    </header>
  );
}


