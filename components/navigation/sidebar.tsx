"use client";

import { Settings, ChevronLeft, Search, Plus, Calendar, ChevronUp, ChevronDown, User, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
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
  isCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
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
  isCollapsed = false,
  onCollapseChange,
}: SidebarProps) {
  const pathname = usePathname();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const initials = userEmail
    .split("@")[0]
    .split(/[\\.\\-_]/)
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase())
    .slice(0, 2)
    .join("") || "AT";

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  return (
    <aside
      className={cn(
        "flex flex-col border-r border-black/10 bg-white transition-all duration-300",
        isCollapsed ? "w-[64px]" : "w-[240px]",
        className
      )}
    >
      {/* Top bar with logo, settings, collapse */}
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && (
          <Image
            src="/Favicon_noir.png"
            alt="Atom"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        )}
        <div className="flex items-center gap-2 ml-auto">
          <button
            className="rounded-lg p-1.5 text-black/60 hover:bg-black/5 hover:text-black transition-colors"
            aria-label="Settings"
          >
            <Settings className="h-4 w-4" />
          </button>
          <button
            onClick={() => onCollapseChange?.(!isCollapsed)}
            className="rounded-lg p-1.5 text-black/60 hover:bg-black/5 hover:text-black transition-colors"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
          </button>
        </div>
      </div>

      {/* Notification/Agenda space - closer to top */}
      <div className="px-4 pt-2">
        <div className="relative rounded-lg border border-black/10 bg-white/50 p-3 space-y-2 border-l-2 border-l-[#0071e3]">
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

      {/* New button - closer to notification */}
      <div className="px-4 pt-2 pb-4">
        <button className="w-full rounded-lg bg-[#0071e3] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0077ed] transition-colors flex items-center justify-center gap-2">
          <Plus className="h-4 w-4" />
          {!isCollapsed && "New"}
        </button>
      </div>

      {/* Search */}
      {!isCollapsed && (
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
      )}

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
              title={isCollapsed ? item.name : undefined}
            >
              {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
              {!isCollapsed && item.name}
            </Link>
          );
        })}
      </nav>

      {/* User section - floating, rounded, gray/white with dropdown menu */}
      <div className="p-4 relative" ref={userMenuRef}>
        <button
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="w-full rounded-xl border border-black/10 bg-white/80 backdrop-blur-sm p-3 shadow-sm hover:bg-white/90 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-xs font-medium text-black flex-shrink-0">
              {initials}
            </div>
            {!isCollapsed && (
              <>
                <div className="flex-1 min-w-0 text-left">
                  <p className="truncate text-sm font-medium text-black">{userEmail}</p>
                </div>
                {isUserMenuOpen ? (
                  <ChevronUp className="h-4 w-4 text-black/60 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-black/60 flex-shrink-0" />
                )}
              </>
            )}
          </div>
        </button>

        {/* Dropdown menu */}
        {isUserMenuOpen && !isCollapsed && (
          <div className="absolute bottom-full left-4 right-4 mb-2 rounded-lg border border-black/10 bg-white shadow-lg p-2 space-y-1">
            <button className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-black/60 hover:bg-black/5 hover:text-black transition-colors text-left">
              <User className="h-4 w-4" />
              Profile
            </button>
            <button className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-black/60 hover:bg-black/5 hover:text-black transition-colors text-left">
              <Settings className="h-4 w-4" />
              Account Settings
            </button>
            <div className="border-t border-black/10 my-1" />
            <button
              onClick={onSignOut}
              className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors text-left"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
