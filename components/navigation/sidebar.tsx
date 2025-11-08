"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { dashboardNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

type SidebarProps = {
  isCollapsed: boolean;
  onToggleCollapsed: () => void;
  onCloseMobile: () => void;
  userEmail: string;
  onSignOut: () => void;
  className?: string;
};

const widthVariants = {
  expanded: { width: 248 },
  collapsed: { width: 84 },
};

export function DashboardSidebar({
  isCollapsed,
  onToggleCollapsed,
  onCloseMobile,
  userEmail,
  onSignOut,
  className,
}: SidebarProps) {
  const pathname = usePathname();
  const initials =
    userEmail
      .split("@")[0]
      .split(/[\\.\\-_]/)
      .filter(Boolean)
      .map((segment) => segment[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "AT";

  return (
    <AnimatePresence initial={false}>
      <motion.aside
        data-collapsed={isCollapsed}
        variants={widthVariants}
        animate={isCollapsed ? "collapsed" : "expanded"}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className={cn(
          "group/aside relative z-40 flex h-full flex-col border-r border-border/70 bg-background/90 backdrop-blur",
          className,
        )}
      >
        <div className="flex h-16 items-center gap-3 border-b border-border/70 px-4">
          <Image
            src="/ATOM_blanc.png"
            alt="Atom logo"
            width={isCollapsed ? 36 : 120}
            height={32}
            priority
            className={cn("transition-all", isCollapsed && "w-9")}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapsed}
            className="ml-auto hidden h-8 w-8 rounded-xl border border-border/60 md:flex"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 py-6">
          {dashboardNav.map((item) => {
            const active =
              pathname === item.href || (pathname?.startsWith(item.href) && item.href !== "/dashboard");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={cn(
                  "group flex items-center gap-3 rounded-2xl px-3 py-2 text-base font-medium transition-all hover:bg-muted/70 hover:text-foreground",
                  active ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <AnimatePresence initial={false}>
                  {!isCollapsed && (
                    <motion.span
                      className="truncate text-base"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -4 }}
                    >
                      {item.title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t border-border/70 px-4 py-5">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground md:hidden"
            onClick={onToggleCollapsed}
          >
            <Menu className="h-4 w-4" />
            <span>{isCollapsed ? "Expand menu" : "Collapse menu"}</span>
          </Button>
          <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-muted/40 px-3 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-sm font-semibold text-primary">
              {initials}
            </div>
            <AnimatePresence initial={false}>
              {!isCollapsed && (
                <motion.div
                  className="flex flex-1 flex-col"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                >
                  <span className="truncate text-sm font-medium text-foreground">{userEmail}</span>
                  <span className="text-xs text-muted-foreground">Workspace admin</span>
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-full text-muted-foreground hover:text-destructive",
                isCollapsed && "ml-auto",
              )}
              onClick={onSignOut}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}


