"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "backdrop-blur-sm",
            error && "border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs font-light text-red-400/80">{error}</p>
        )}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

