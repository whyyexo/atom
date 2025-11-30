"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor, getShadow, getTransition } from "@/guide/styles";

interface SecondaryButtonProps {
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
}

export function SecondaryButton({
  text,
  children,
  onClick,
  type = "button",
  disabled = false,
  size = "md",
  className = "",
  fullWidth = false,
}: SecondaryButtonProps) {
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
        backdrop-blur-xl border
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      style={{
        backgroundColor: getColor("glass.elevated", mode),
        borderColor: getColor("separator", mode),
        color: getColor("text.primary", mode),
        boxShadow: getShadow("sm", mode),
        transition: getTransition("button"),
      }}
    >
      {/* Glossy overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            mode === "light"
              ? "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, transparent 50%)"
              : "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 font-semibold">
        {text || children}
      </span>

      {/* Press effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)",
        }}
        initial={{ opacity: 0 }}
        whileTap={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      />
    </motion.button>
  );
}

