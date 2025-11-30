"use client";

import {
  Home,
  CheckSquare,
  Settings,
  Moon,
  Sun,
  User,
  LogOut,
  ChevronDown,
  Sparkles,
  FlaskConical,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/theme-provider";
import { motion, AnimatePresence } from "framer-motion";

type PremiumSidebarProps = {
  userEmail?: string;
  userName?: string;
  onSignOut?: () => void;
  workspaceSlug?: string;
};

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export function PremiumSidebar({ userEmail = "user@atom.app", userName = "User", onSignOut, workspaceSlug = "[slug]" }: PremiumSidebarProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const navigation: NavItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
    { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Intelligence", href: "/dashboard/ai-assistant", icon: Sparkles },
    { name: "Science", href: "/science", icon: FlaskConical },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || userEmail
      .split("@")[0]
      .split(/[\\.\\-_]/)
      .filter(Boolean)
      .map((segment) => segment[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "AT";

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
    <aside className="fixed inset-y-0 left-0 z-50 w-[280px] flex flex-col border-r border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl">
      {/* Logo */}
      <div className="flex h-16 items-center px-6">
        <Link href={`/workspace/${workspaceSlug}`} className="text-base font-semibold tracking-tight text-black dark:text-white">
          Atom
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-0.5 px-3 overflow-y-auto py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150",
                "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white",
                isActive && "bg-black/5 dark:bg-white/8 text-black dark:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="border-t border-black/5 dark:border-white/5 p-4 space-y-3">
        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8"
          aria-label="Toggle theme"
        >
          <motion.div
            initial={false}
            animate={{ rotate: theme === "dark" ? 0 : 180 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </motion.div>
        </button>

        {/* User Avatar */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-150 hover:bg-black/5 dark:hover:bg-white/8"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 dark:bg-white/10 text-xs font-medium text-black dark:text-white">
              {initials}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-medium text-black dark:text-white truncate">{userName}</p>
              <p className="text-xs text-black/50 dark:text-white/50 truncate">{userEmail}</p>
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-black/40 dark:text-white/40 transition-transform duration-150",
                isUserMenuOpen && "rotate-180"
              )}
            />
          </button>

          <AnimatePresence>
            {isUserMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-full left-0 right-0 mb-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-lg p-1 space-y-0.5"
              >
                <Link
                  href={`/dashboard/settings`}
                  onClick={() => setIsUserMenuOpen(false)}
                  className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white transition-colors text-left"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
                <Link
                  href={`/dashboard/settings`}
                  onClick={() => setIsUserMenuOpen(false)}
                  className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white transition-colors text-left"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
                <div className="border-t border-black/10 dark:border-white/10 my-1" />
                <button
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    if (onSignOut) {
                      onSignOut();
                    }
                  }}
                  className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors text-left"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </aside>
  );
}

