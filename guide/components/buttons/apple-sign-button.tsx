"use client";

import { motion } from "framer-motion";
import { Apple, Chrome, Github } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor, getShadow, getTransition } from "@/guide/styles";

interface AppleSignButtonProps {
  provider: "apple" | "google" | "github";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const providerConfig = {
  apple: {
    icon: Apple,
    label: "Continue with Apple",
    bgColor: {
      light: "#000000",
      dark: "#FFFFFF",
    },
    textColor: {
      light: "#FFFFFF",
      dark: "#000000",
    },
  },
  google: {
    icon: Chrome,
    label: "Continue with Google",
    bgColor: {
      light: "#FFFFFF",
      dark: "#1C1C1E",
    },
    textColor: {
      light: "#000000",
      dark: "#FFFFFF",
    },
  },
  github: {
    icon: Github,
    label: "Continue with GitHub",
    bgColor: {
      light: "#24292E",
      dark: "#24292E",
    },
    textColor: {
      light: "#FFFFFF",
      dark: "#FFFFFF",
    },
  },
};

export function AppleSignButton({
  provider,
  onClick,
  disabled = false,
  className = "",
  fullWidth = false,
}: AppleSignButtonProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";
  const config = providerConfig[provider];
  const Icon = config.icon;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        relative overflow-hidden rounded-2xl font-medium
        h-11 px-5 text-base
        flex items-center justify-center gap-3
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        backdrop-blur-xl border
        ${className}
      `}
      style={{
        backgroundColor: config.bgColor[mode],
        color: config.textColor[mode],
        borderColor: getColor("separator", mode),
        boxShadow: getShadow("sm", mode),
        transition: getTransition("button"),
      }}
    >
      {/* Glossy overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
        }}
      />
      
      {/* Icon */}
      <Icon className="w-5 h-5 relative z-10" />
      
      {/* Text */}
      <span className="relative z-10 font-semibold">
        {config.label}
      </span>

      {/* Press effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: mode === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
        }}
        initial={{ opacity: 0 }}
        whileTap={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      />
    </motion.button>
  );
}

