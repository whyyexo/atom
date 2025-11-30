"use client";

import { ReactNode } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor } from "@/guide/styles";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
};

export function PageContainer({
  children,
  className = "",
  maxWidth = "xl",
}: PageContainerProps) {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <div
      className={cn(
        "min-h-screen w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
        maxWidthClasses[maxWidth],
        className
      )}
      style={{
        backgroundColor: getColor("background.primary", mode),
      }}
    >
      {children}
    </div>
  );
}

