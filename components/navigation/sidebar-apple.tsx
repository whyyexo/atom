"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { TooltipApple } from "./tooltip-apple";
import { ThemeToggle } from "./theme-toggle";
import { ProfilePopover } from "./profile-popover";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

interface SidebarAppleProps {
  userEmail: string;
  userName?: string;
}

export function SidebarApple({ userEmail, userName }: SidebarAppleProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.aside
      initial={{ x: -72 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="
        fixed left-0 top-0 bottom-0 z-30
        w-[72px] flex flex-col items-center
        bg-white/60 dark:bg-black/20
        backdrop-blur-xl
        border-r border-white/20 dark:border-white/10
      "
    >
      {/* Logo/Header */}
      <div className="w-full h-16 flex items-center justify-center border-b border-white/20 dark:border-white/10">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
          <span className="text-xs font-bold text-white">A</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 w-full py-4 space-y-1 overflow-y-auto">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          
          return (
            <div key={item.id}>
              {item.separator && index > 0 && (
                <div className="my-3 mx-auto w-8 h-px bg-gray-200/50 dark:bg-white/10" />
              )}
              <TooltipApple content={item.tooltip} side="right">
                <Link href={item.href} className="block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      relative mx-auto w-11 h-11 rounded-xl
                      flex items-center justify-center
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-blue-500/20 dark:bg-blue-500/30"
                          : "bg-transparent hover:bg-white/40 dark:hover:bg-white/10"
                      }
                    `}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-xl bg-blue-500/10 dark:bg-blue-500/20"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Icon */}
                    <Icon
                      className={`
                        relative z-10 w-[22px] h-[22px]
                        transition-colors duration-200
                        ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-400"
                        }
                      `}
                    />
                    
                    {/* Active dot */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400"
                      />
                    )}
                  </motion.div>
                </Link>
              </TooltipApple>
            </div>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="w-full py-4 space-y-2 border-t border-white/20 dark:border-white/10">
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
        <div className="flex justify-center">
          <ProfilePopover userEmail={userEmail} userName={userName} />
        </div>
      </div>
    </motion.aside>
  );
}

