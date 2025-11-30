"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { getGradient } from "@/guide/styles";
import { useTheme } from "@/components/providers/theme-provider";

interface AuroraGradientProps {
  children: ReactNode;
  className?: string;
}

export function AuroraGradient({ children, className = "" }: AuroraGradientProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: getGradient("aurora", mode),
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

