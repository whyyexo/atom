"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, Sparkles, Moon, SunMedium } from "lucide-react";
import { type HTMLAttributes, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

type NavbarProps = HTMLAttributes<HTMLDivElement> & {
  onOpenQuickActions: () => void;
  pageTitle: string;
};

export function Navbar({
  className,
  onOpenQuickActions,
  pageTitle,
  ...props
}: NavbarProps) {
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
        "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-xl container-padding",
        className,
      )}
      {...props}
    >
      <motion.h1
        key={pageTitle}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="text-xl font-semibold tracking-tight text-foreground md:text-2xl"
      >
        {pageTitle}
      </motion.h1>

      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative hidden items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-3 py-1.5 sm:flex">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <Input
            ref={searchRef}
            id="global-search"
            placeholder="Search or jump to..."
            className="h-7 w-48 border-none bg-transparent p-0 text-xs text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
          />
          <kbd className="pointer-events-none hidden select-none items-center gap-1 rounded border border-border/50 bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>

        {/* Quick Actions */}
        <Button
          variant="ghost"
          size="sm"
          className="hidden items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted/50 md:flex"
          onClick={onOpenQuickActions}
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Quick Actions
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg border border-border/50 bg-muted/30 text-foreground transition-colors hover:bg-muted/50"
          onClick={toggleTheme}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                <Moon className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.15 }}
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

