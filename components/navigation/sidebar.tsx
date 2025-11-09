"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { TriangleToggle } from "@/components/ui/triangle-toggle";
import { dashboardNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

type SidebarProps = {
  onCloseMobile: () => void;
  userEmail: string;
  workspaceName: string;
  workspaceSlug: string;
  onSignOut: () => void;
  className?: string;
};

const widthVariants = {
  expanded: { width: 248 },
  collapsed: { width: 84 },
};

export function DashboardSidebar({
  onCloseMobile,
  userEmail,
  workspaceName,
  workspaceSlug,
  onSignOut,
  className,
}: SidebarProps) {
  const pathname = usePathname();
  const isCollapsed = false;
  const workspacePath = workspaceSlug.trim() || "workspace";
  const workspaceDisplayName = workspaceName || "Workspace";
  const initials =
    userEmail
      .split("@")[0]
      .split(/[\\.\\-_]/)
      .filter(Boolean)
      .map((segment) => segment[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "AT";
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    quick: true,
    workspace: true,
    projects: true,
    other: true,
  });

  const navGroups = useMemo(
    () => [
      {
        id: "quick",
        label: "Quick",
        allowCreate: false,
        items: [
          { title: "Inbox", href: "/dashboard/inbox" },
          { title: "My issues", href: "/dashboard/my-issues" },
        ],
      },
      {
        id: "workspace",
        label: "Workspace",
        allowCreate: false,
        items: [
          { title: "Dashboard", href: "/dashboard" },
          { title: "Agents", href: "/dashboard/agents" },
          { title: "Workspaces", href: "/dashboard/workspaces" },
          { title: "Settings", href: "/dashboard/settings" },
        ],
      },
      {
        id: "projects",
        label: "Projects",
        allowCreate: true,
        items: [
          { title: "Launch Readiness", href: "/dashboard/projects/launch" },
          { title: "Customer Journey", href: "/dashboard/projects/journey" },
          { title: "Risk Surface", href: "/dashboard/projects/risk" },
        ],
      },
      {
        id: "other",
        label: "Other",
        allowCreate: false,
        items: [
          { title: "Integrations", href: "/dashboard/integrations" },
          { title: "Billing", href: "/dashboard/billing" },
          { title: "Audit logs", href: "/dashboard/logs" },
        ],
      },
    ],
    [],
  );

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
          <div className="flex flex-col">
            <Link
              href={`/workspace/${workspacePath}`}
              className="text-sm font-semibold text-white transition hover:text-white"
            >
              {workspaceDisplayName}
            </Link>
            <span className="text-[11px] text-white/50">atom.app/workspace/{workspacePath}</span>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-3 px-3 py-6">
          {navGroups.map((group) => {
            const isOpen = expanded[group.id];
            return (
              <div key={group.id} className="flex flex-col gap-2">
                <div className="group flex items-center px-1">
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded((prev) => ({
                        ...prev,
                        [group.id]: !prev[group.id],
                      }))
                    }
                    className="flex flex-1 items-center gap-1 rounded-lg pl-2 pr-1 py-[6px] text-[11px] font-semibold text-white/60 focus-visible:outline-none focus-visible:ring-0"
                  >
                    <AnimatePresence initial={false}>
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -4 }}
                        >
                          {group.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <TriangleToggle open={isOpen} className="text-white/60" />
                  </button>
                  {group.allowCreate && !isCollapsed && (
                    <button
                      type="button"
                      aria-label="Create project"
                      className="invisible flex h-4 w-4 items-center justify-center rounded-none text-white/60 transition group-hover:visible hover:text-white focus-visible:outline-none focus-visible:ring-0"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="flex flex-col gap-[2px]"
                    >
                      {group.items.map((item) => {
                        const matchingNav = dashboardNav.find((nav) => nav.href === item.href) ?? dashboardNav[0];
                        const Icon = matchingNav.icon;
                        const active =
                          pathname === item.href ||
                          (pathname?.startsWith(item.href) && item.href !== "/dashboard");
                        return (
                          <Link
                            key={`${group.id}-${item.title}`}
                            href={item.href}
                            onClick={onCloseMobile}
                            className={cn(
                              "group/item flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-[12px] font-medium transition-all",
                              active
                                ? "bg-white/10 text-white shadow-sm"
                                : "text-white/70 hover:bg-white/5 hover:text-white",
                            )}
                          >
                            <Icon
                              className={cn(
                                "h-4 w-4 shrink-0 text-white/60 transition group-hover/item:text-white",
                                active && "text-white",
                              )}
                            />
                            <AnimatePresence>
                              {!isCollapsed && (
                                <motion.span
                                  className="truncate text-[12px] text-white"
                                  initial={{ opacity: 0, x: -4 }}
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t border-border/70 px-4 py-5">
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


