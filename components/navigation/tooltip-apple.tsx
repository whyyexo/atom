"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";

interface TooltipAppleProps {
  children: ReactNode;
  content: string;
  side?: "right" | "left" | "top" | "bottom";
}

export function TooltipApple({ children, content, side = "right" }: TooltipAppleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: side === "right" ? -8 : side === "left" ? 8 : 0, y: side === "top" ? 8 : side === "bottom" ? -8 : 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className={`
              pointer-events-none absolute z-50
              ${side === "right" ? "left-full ml-3" : ""}
              ${side === "left" ? "right-full mr-3" : ""}
              ${side === "top" ? "bottom-full mb-3" : ""}
              ${side === "bottom" ? "top-full mt-3" : ""}
            `}
          >
          <div className="relative">
            {/* Blur backdrop */}
            <div className="absolute inset-0 rounded-lg bg-white/80 dark:bg-black/80 backdrop-blur-xl blur-sm" />
            
            {/* Content */}
            <div className="relative px-3 py-1.5 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20">
              <p className="text-xs font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                {content}
              </p>
            </div>
            
            {/* Arrow */}
            <div
              className={`
                absolute w-2 h-2 rotate-45
                ${side === "right" ? "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 border-l border-b border-white/20 dark:border-white/10" : ""}
                ${side === "left" ? "right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 border-r border-t border-white/20 dark:border-white/10" : ""}
                ${side === "top" ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/90 dark:bg-black/90 border-l border-b border-white/20 dark:border-white/10" : ""}
                ${side === "bottom" ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 border-r border-t border-white/20 dark:border-white/10" : ""}
              `}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

