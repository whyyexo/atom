"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor, getTransition } from "@/guide/styles";

interface GhostButtonProps {
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
}

export function GhostButton({
  text,
  children,
  onClick,
  type = "button",
  disabled = false,
  size = "md",
  className = "",
  fullWidth = false,
}: GhostButtonProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-13 px-6 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        relative overflow-hidden rounded-2xl font-medium
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      style={{
        color: getColor("systemBlue", mode),
        transition: getTransition("button"),
      }}
    >
      {/* Hover background */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          backgroundColor: mode === "light" ? "rgba(0, 122, 255, 0.1)" : "rgba(10, 132, 255, 0.2)",
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Content */}
      <span className="relative z-10 font-semibold">
        {text || children}
      </span>
    </motion.button>
  );
}

