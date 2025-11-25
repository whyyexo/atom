"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-black/10 px-6">
        <span className="text-lg font-semibold tracking-tight text-black">Atom</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-6">
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
                  ? "bg-black/5 text-black"
                  : "text-black/60 hover:bg-black/5 hover:text-black"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-black/10 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-xs font-medium text-black">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-black">{userEmail}</p>
          </div>
          <button
            onClick={onSignOut}
            className="rounded-lg p-1.5 text-black/60 hover:bg-black/5 hover:text-black transition-colors"
            aria-label="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
