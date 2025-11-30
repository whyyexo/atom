"use client";

import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { TextInput } from "./text-input";
import type { TextInputProps } from "./text-input";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor } from "@/guide/styles";

interface PasswordInputProps extends Omit<TextInputProps, "type"> {
  showStrengthIndicator?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showStrengthIndicator = false, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const { theme } = useTheme();
    const mode = theme === "dark" ? "dark" : "light";

    const getStrength = (pwd: string): { level: number; label: string; color: string } => {
      if (!pwd) return { level: 0, label: "", color: "" };
      
      let strength = 0;
      if (pwd.length >= 8) strength++;
      if (pwd.length >= 12) strength++;
      if (/[a-z]/.test(pwd)) strength++;
      if (/[A-Z]/.test(pwd)) strength++;
      if (/\d/.test(pwd)) strength++;
      if (/[^a-zA-Z\d]/.test(pwd)) strength++;

      if (strength <= 2) return { level: strength, label: "Weak", color: getColor("systemRed", mode) };
      if (strength <= 4) return { level: strength, label: "Fair", color: getColor("systemOrange", mode) };
      return { level: strength, label: "Strong", color: getColor("systemGreen", mode) };
    };

    const strength = getStrength(password);

    return (
      <div className="w-full">
        <div className="relative">
          <TextInput
            ref={ref}
            type={showPassword ? "text" : "password"}
            error={error}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              props.onChange?.(e);
            }}
            {...props}
            className={`${props.className || ""} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            style={{ color: getColor("text.secondary", mode) }}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        {showStrengthIndicator && password && (
          <div className="mt-2 space-y-1">
            <div className="flex gap-1 h-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full transition-all"
                  style={{
                    backgroundColor: i <= strength.level ? strength.color : getColor("fill.tertiary", mode),
                  }}
                />
              ))}
            </div>
            <p className="text-xs font-medium" style={{ color: strength.color }}>
              {strength.label}
            </p>
          </div>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

