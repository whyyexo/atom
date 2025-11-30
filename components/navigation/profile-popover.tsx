"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { User, LogOut, ChevronUp } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { TooltipApple } from "./tooltip-apple";

interface ProfilePopoverProps {
  userEmail: string;
  userName?: string;
}

export function ProfilePopover({ userEmail, userName }: ProfilePopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        buttonRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  const initials = userName
    ? userName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : userEmail
        .split("@")[0]
        .slice(0, 2)
        .toUpperCase();

  return (
    <div className="relative">
      <div className="hidden md:block">
        <TooltipApple content="Profile" side="right">
          <motion.button
            ref={buttonRef}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="
              relative w-11 h-11 rounded-xl
              flex items-center justify-center
              bg-white/60 dark:bg-black/20
              backdrop-blur-xl
              border border-white/20 dark:border-white/10
              transition-all duration-200
              hover:bg-white/80 dark:hover:bg-black/30
              active:scale-95
              overflow-hidden
            "
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-xs font-semibold text-white">
                {initials}
              </span>
            </div>
          </motion.button>
        </TooltipApple>
      </div>
      <div className="md:hidden">
        <motion.button
          ref={buttonRef}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="
            relative w-14 h-14 rounded-2xl
            flex items-center justify-center
            bg-transparent
            transition-all duration-200
            active:scale-95
            overflow-hidden
          "
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-sm font-semibold text-white">
              {initials}
            </span>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={popoverRef}
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="
                absolute bottom-16 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-50
                w-64 rounded-2xl
                bg-white/90 dark:bg-black/90
                backdrop-blur-xl
                border border-white/20 dark:border-white/10
                shadow-xl shadow-black/10 dark:shadow-black/30
                overflow-hidden
              "
            >
              {/* Header */}
              <div className="px-4 py-4 border-b border-gray-200/50 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-sm font-semibold text-white">
                      {initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {userName || userEmail.split("@")[0]}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {userEmail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSignOut}
                  className="
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                    text-sm font-medium text-red-600 dark:text-red-400
                    hover:bg-red-50 dark:hover:bg-red-950/20
                    transition-colors duration-150
                  "
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

