"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface IOSInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
}

export const IOSInput = forwardRef<HTMLInputElement, IOSInputProps>(
  ({ className, error, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        <motion.div
          initial={false}
          animate={error ? { x: [-4, 4, -4, 4, 0] } : {}}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full h-14 rounded-2xl",
              "backdrop-blur-xl",
              "bg-[rgba(255,255,255,0.25)]",
              "border border-white/30",
              "text-gray-900 placeholder:text-gray-500",
              "px-4",
              icon && "pl-12",
              "text-[17px] font-normal",
              "transition-all duration-200",
              "focus:outline-none",
              "focus:ring-2 focus:ring-[#0071e3]/50",
              "focus:border-[#0071e3]/50",
              "focus:bg-[rgba(255,255,255,0.35)]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-500/50 focus:ring-red-500/30",
              className
            )}
            {...props}
          />
          {/* Glossy highlight */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-500 font-medium"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

IOSInput.displayName = "IOSInput";

