"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "secondary" | "ghost";
}

export const AuthButton = forwardRef<HTMLButtonElement, AuthButtonProps>(
  ({ className, loading, variant = "primary", children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "flex h-12 w-full items-center justify-center rounded-xl text-sm font-medium",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variant === "primary" && [
            "bg-white text-black",
            "hover:bg-white/90 active:bg-white/80",
            "shadow-lg shadow-white/10",
          ],
          variant === "secondary" && [
            "border border-white/20 bg-white/5 text-white",
            "hover:bg-white/10 active:bg-white/5",
            "backdrop-blur-sm",
          ],
          variant === "ghost" && [
            "text-white/60",
            "hover:text-white hover:bg-white/5",
            "active:bg-white/10",
          ],
          className
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          children
        )}
      </button>
    );
  }
);

AuthButton.displayName = "AuthButton";

