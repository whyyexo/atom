"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { TooltipApple } from "./tooltip-apple";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TooltipApple content={isDark ? "Light Mode" : "Dark Mode"} side="right">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="
          relative w-11 h-11 rounded-xl
          flex items-center justify-center
          bg-white/60 dark:bg-black/20
          backdrop-blur-xl
          border border-white/20 dark:border-white/10
          transition-all duration-200
          hover:bg-white/80 dark:hover:bg-black/30
          active:scale-95
        "
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 0.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-[18px] h-[18px] text-gray-700 dark:text-gray-300" />
          ) : (
            <Sun className="w-[18px] h-[18px] text-gray-700 dark:text-gray-300" />
          )}
        </motion.div>
      </motion.button>
    </TooltipApple>
  );
}

