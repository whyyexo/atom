"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IOSButtonProps extends Omit<HTMLMotionProps<"button">, "type"> {
  loading?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const IOSButton = forwardRef<HTMLButtonElement, IOSButtonProps>(
  ({ className, loading, variant = "primary", children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        disabled={disabled || loading}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "w-full h-14 rounded-2xl",
          "text-[17px] font-semibold",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "flex items-center justify-center",
          variant === "primary" && [
            "bg-[#0071e3] text-white",
            "shadow-[0_4px_14px_rgba(0,113,227,0.25)]",
            "hover:bg-[#0077ed]",
            "active:bg-[#0071e3]",
            "focus:ring-[#0071e3]/50",
          ],
          variant === "secondary" && [
            "bg-[rgba(255,255,255,0.2)] text-gray-900",
            "border border-white/30",
            "backdrop-blur-xl",
            "hover:bg-[rgba(255,255,255,0.3)]",
            "active:bg-[rgba(255,255,255,0.25)]",
          ],
          variant === "ghost" && [
            "text-[#0071e3]",
            "hover:bg-[rgba(0,113,227,0.1)]",
            "active:bg-[rgba(0,113,227,0.15)]",
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
      </motion.button>
    );
  }
);

IOSButton.displayName = "IOSButton";

