"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface IOSBackButtonProps {
  onClick: () => void;
  className?: string;
}

export function IOSBackButton({ onClick, className }: IOSBackButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      className={cn(
        "absolute top-6 left-6 z-20",
        "w-10 h-10 rounded-full",
        "backdrop-blur-xl",
        "bg-[rgba(255,255,255,0.2)]",
        "border border-white/30",
        "flex items-center justify-center",
        "text-gray-700",
        "hover:bg-[rgba(255,255,255,0.3)]",
        "transition-all duration-200",
        className
      )}
    >
      <ChevronLeft className="h-5 w-5" />
    </motion.button>
  );
}

