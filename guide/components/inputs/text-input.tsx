"use client";

import { forwardRef, useState } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor, getShadow, getTransition, getBlurClass } from "@/guide/styles";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    const { theme } = useTheme();
    const mode = theme === "dark" ? "dark" : "light";
    const [focused, setFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: getColor("text.primary", mode) }}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            {...props}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            className={`
              w-full h-11 px-4 rounded-2xl
              ${getBlurClass("lg")}
              border
              ${error ? "border-red-500" : ""}
              ${className}
            `}
            style={{
              backgroundColor: getColor("glass.elevated", mode),
              borderColor: error
                ? getColor("systemRed", mode)
                : focused
                ? getColor("systemBlue", mode)
                : getColor("separator", mode),
              color: getColor("text.primary", mode),
              boxShadow: focused ? getShadow("sm", mode) : "none",
              transition: getTransition("button"),
            }}
          />
        </div>
        {error && (
          <p className="mt-1.5 text-sm" style={{ color: getColor("systemRed", mode) }}>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm" style={{ color: getColor("text.tertiary", mode) }}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

