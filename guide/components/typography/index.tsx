"use client";

import { ReactNode } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor } from "@/guide/styles";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function TitleXL({ children, className }: TypographyProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <h1
      className={cn("text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight", className)}
      style={{ color: getColor("text.primary", mode) }}
    >
      {children}
    </h1>
  );
}

export function TitleL({ children, className }: TypographyProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <h2
      className={cn("text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight", className)}
      style={{ color: getColor("text.primary", mode) }}
    >
      {children}
    </h2>
  );
}

export function TitleM({ children, className }: TypographyProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <h3
      className={cn("text-2xl sm:text-3xl font-semibold tracking-tight", className)}
      style={{ color: getColor("text.primary", mode) }}
    >
      {children}
    </h3>
  );
}

export function Body({ children, className }: TypographyProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <p
      className={cn("text-base leading-relaxed", className)}
      style={{ color: getColor("text.secondary", mode) }}
    >
      {children}
    </p>
  );
}

export function Caption({ children, className }: TypographyProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <p
      className={cn("text-sm leading-normal", className)}
      style={{ color: getColor("text.tertiary", mode) }}
    >
      {children}
    </p>
  );
}

