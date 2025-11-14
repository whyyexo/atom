"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { TriangleToggle } from "@/components/ui/triangle-toggle";
import { dashboardNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

type SidebarProps = {
  onCloseMobile?: () => void;
  userEmail: string;
  onSignOut: () => void;
  className?: string;
};

const SIDEBAR_WIDTH = 240;

export function Sidebar({
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
          { title: "Messages", href: "/dashboard/messages" },
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
    <motion.aside
      initial={{ x: -SIDEBAR_WIDTH }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex h-full w-[240px] flex-col border-r border-border/50 bg-background/95 backdrop-blur-xl",
        className,
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-border/50 px-4">
        <Image
          src="/ATOM_blanc.png"
          alt="Atom logo"
          width={100}
          height={28}
          priority
          className="transition-opacity hover:opacity-80"
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
        {navGroups.map((group) => {
          const isOpen = expanded[group.id];
          return (
            <div key={group.id} className="mb-2 flex flex-col gap-1">
              <div className="group flex items-center px-1">
                <button
                  type="button"
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [group.id]: !prev[group.id],
                    }))
                  }
                  className="flex flex-1 items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>{group.label}</span>
                  <TriangleToggle open={isOpen} className="ml-auto h-3 w-3 text-muted-foreground" />
                </button>
                {group.allowCreate && (
                  <button
                    type="button"
                    aria-label="Create project"
                    className="invisible flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-all hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group-hover:visible"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col gap-0.5 overflow-hidden"
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
                            "group/item relative flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-all",
                            active
                              ? "bg-primary/10 text-primary shadow-sm"
                              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                          )}
                        >
                          {active && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute left-0 h-5 w-0.5 rounded-r-full bg-primary"
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                          <Icon
                            className={cn(
                              "h-4 w-4 shrink-0 transition-colors",
                              active ? "text-primary" : "text-muted-foreground group-hover/item:text-foreground",
                            )}
                          />
                          <span className="truncate">{item.title}</span>
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

      {/* User Profile */}
      <div className="border-t border-border/50 p-4">
        <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-xs font-semibold text-primary">
            {initials}
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="truncate text-sm font-medium text-foreground">{userEmail}</span>
            <span className="text-xs text-muted-foreground">Workspace admin</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            onClick={onSignOut}
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.aside>
  );
}

