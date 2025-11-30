"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { User } from "lucide-react";
import { ProfilePopover } from "./profile-popover";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

interface MobileNavAppleProps {
  userEmail: string;
  userName?: string;
}

export function MobileNavApple({ userEmail, userName }: MobileNavAppleProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Filter navigation items for mobile (exclude Science)
  const mobileNavItems = navigationItems.filter((item) => item.id !== "science");

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="
        fixed bottom-0 left-0 right-0 z-50
        h-20 flex items-center justify-around
        bg-white/80 dark:bg-black/80
        backdrop-blur-xl
        border-t border-white/20 dark:border-white/10
        safe-area-inset-bottom
        px-4
      "
    >
      {mobileNavItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link key={item.id} href={item.href} className="flex-1 flex justify-center">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={`
                relative w-14 h-14 rounded-2xl
                flex items-center justify-center
                transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-500/20 dark:bg-blue-500/30"
                    : "bg-transparent"
                }
              `}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="mobileActiveIndicator"
                  className="absolute inset-0 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <Icon
                className={`
                  relative z-10 w-6 h-6
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
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"
                />
              )}
            </motion.div>
          </Link>
        );
      })}

      {/* Profile button */}
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <ProfilePopover userEmail={userEmail} userName={userName} />
        </div>
      </div>
    </motion.nav>
  );
}

