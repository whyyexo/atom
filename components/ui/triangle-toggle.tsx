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
      className={cn(
        "flex h-4 w-4 items-center justify-center rounded-sm bg-muted/80 text-muted-foreground transition-colors group-hover:text-primary",
        className,
      )}
    >
      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
        <path d="M1 1.25L4.75 3 1 4.75V1.25Z" />
      </svg>
    </motion.div>
  );
}


