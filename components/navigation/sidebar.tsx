"use client";

import { Settings, ChevronLeft, Search, Plus, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  FolderIcon,
  BrainIcon,
  CheckSquareIcon,
  FileTextIcon,
  SettingsIcon,
} from "@/components/icons/lineicons";

type SidebarProps = {
  onCloseMobile: () => void;
  userEmail: string;
  onSignOut: () => void;
  className?: string;
};

const navigation = [
  { name: "Overview", href: "/dashboard", icon: HomeIcon },
  { name: "Workspaces", href: "/dashboard/workspaces", icon: FolderIcon },
  { name: "Agents", href: "/dashboard/agents", icon: BrainIcon },
  { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquareIcon },
  { name: "Notes", href: "/dashboard/notes", icon: FileTextIcon },
  { name: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
];

export function DashboardSidebar({
  onCloseMobile,
  userEmail,
  onSignOut,
  className,
}: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const initials = userEmail
    .split("@")[0]
    .split(/[\\.\\-_]/)
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase())
    .slice(0, 2)
    .join("") || "AT";

  return (
    <aside
      className={cn(
        "flex w-[240px] flex-col border-r border-black/10 bg-white",
        className
      )}
    >
      {/* Top bar with logo, settings, collapse */}
      <div className="flex h-16 items-center justify-between px-4">
        <Image
          src="/Favicon_noir.png"
          alt="Atom"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg p-1.5 text-black/60 hover:bg-black/5 hover:text-black transition-colors"
            aria-label="Settings"
          >
            <Settings className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="rounded-lg p-1.5 text-black/60 hover:bg-black/5 hover:text-black transition-colors"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Notification/Agenda space */}
      <div className="px-4 pb-4">
        <div className="rounded-lg border border-black/10 bg-white/50 p-3 space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-black/60" />
            <span className="text-xs font-medium text-black">Meeting in 15min</span>
          </div>
          <p className="text-xs text-black/60">Team standup with Marketing</p>
          <button className="w-full rounded-md bg-[#0071e3] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#0077ed] transition-colors">
            Join
          </button>
        </div>
      </div>

      {/* New button */}
      <div className="px-4 pb-4">
        <button className="w-full rounded-lg bg-[#0071e3] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0077ed] transition-colors flex items-center justify-center gap-2">
          <Plus className="h-4 w-4" />
          New
        </button>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-9 rounded-lg border border-black/10 bg-white pl-10 pr-4 text-sm text-black placeholder:text-black/40 focus:border-black/20 focus:outline-none focus:ring-1 focus:ring-black/10 transition-colors"
          />
        </div>
      </div>

      {/* Navigation - pages more compact, no background on active */}
      <nav className="flex-1 space-y-0.5 px-4 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onCloseMobile}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "text-black"
                  : "text-black/60 hover:text-black"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User section - floating, rounded, gray/white */}
      <div className="p-4">
        <div className="rounded-xl border border-black/10 bg-white/80 backdrop-blur-sm p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-xs font-medium text-black">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-black">{userEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
