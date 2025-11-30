"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor, getShadow, getBlurClass } from "@/guide/styles";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, className = "", onClick, hoverable = false }: CardProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  const Component = onClick || hoverable ? motion.div : "div";
  const motionProps = onClick || hoverable
    ? {
        whileHover: hoverable ? { scale: 1.02, y: -2 } : undefined,
        whileTap: onClick ? { scale: 0.98 } : undefined,
        onClick,
        className: "cursor-pointer",
      }
    : {};

  return (
    <Component
      {...motionProps}
      className={cn(
        "rounded-3xl p-6",
        getBlurClass("xl"),
        className
      )}
      style={{
        backgroundColor: getColor("glass.elevated", mode),
        boxShadow: getShadow("md", mode),
        border: `1px solid ${getColor("separator", mode)}`,
      }}
    >
      {children}
    </Component>
  );
}

