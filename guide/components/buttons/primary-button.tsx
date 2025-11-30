"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { getGradient, getShadow, getTransition } from "@/guide/styles";

interface PrimaryButtonProps {
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
}

export function PrimaryButton({
  text,
  children,
  onClick,
  type = "button",
  disabled = false,
  size = "md",
  className = "",
  fullWidth = false,
}: PrimaryButtonProps) {
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
        background: getGradient("blue", mode),
        boxShadow: getShadow("blue", mode),
        transition: getTransition("button"),
      }}
    >
      {/* Glossy overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 text-white font-semibold flex items-center justify-center gap-2">
        {text || children}
      </span>

      {/* Press effect */}
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ opacity: 0 }}
        whileTap={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      />
    </motion.button>
  );
}

