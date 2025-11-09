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
      className={cn("flex h-5 w-5 items-center justify-center text-white/50 transition-colors", className)}
    >
      <svg width="7" height="7" viewBox="0 0 7 7" fill="currentColor">
        <path d="M1.2 1.45L5.3 3.15 1.2 4.85V1.45Z" />
      </svg>
    </motion.div>
  );
}


