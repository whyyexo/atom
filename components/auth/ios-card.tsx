"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IOSCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function IOSCard({ children, className, ...props }: IOSCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={cn(
        "relative w-full max-w-md mx-auto rounded-3xl",
        "backdrop-blur-[30px]",
        "bg-[rgba(255,255,255,0.15)]",
        "border border-white/20",
        "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Glossy reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10">
        {children}
      </div>
    </motion.div>
  );
}

