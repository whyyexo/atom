"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TriangleToggleProps = {
  open: boolean;
  className?: string;
};

export function TriangleToggle({ open, className }: TriangleToggleProps) {
  return (
    <motion.div
      animate={{ rotate: open ? 90 : 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn("flex h-6 w-6 items-center justify-center text-white/50 transition-colors", className)}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
        <path d="M1.25 1.6L6.1 4 1.25 6.4V1.6Z" />
      </svg>
    </motion.div>
  );
}


