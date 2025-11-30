"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { getGradient } from "@/guide/styles";
import { useTheme } from "@/components/providers/theme-provider";

interface BreathingGlowProps {
  children: ReactNode;
  gradient?: "blue" | "purple" | "aurora";
  intensity?: number;
}

export function BreathingGlow({
  children,
  gradient = "blue",
  intensity = 0.3,
}: BreathingGlowProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <motion.div
      className="relative"
      animate={{
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl blur-xl -z-10"
        style={{
          background: getGradient(gradient, mode),
          opacity: intensity,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {children}
    </motion.div>
  );
}

