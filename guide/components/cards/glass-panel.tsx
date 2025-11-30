"use client";

import { ReactNode } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor, getBlurClass } from "@/guide/styles";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated";
}

export function GlassPanel({ children, className = "", variant = "default" }: GlassPanelProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  const glassColor =
    variant === "elevated"
      ? getColor("glass.elevated", mode)
      : getColor("glass.white", mode);

  return (
    <div
      className={cn("rounded-2xl", getBlurClass("xl"), className)}
      style={{
        backgroundColor: glassColor,
        border: `1px solid ${getColor("separator", mode)}`,
      }}
    >
      {children}
    </div>
  );
}

