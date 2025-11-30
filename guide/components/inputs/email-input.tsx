"use client";

import { forwardRef } from "react";
import { Mail } from "lucide-react";
import { TextInput } from "./text-input";
import type { TextInputProps } from "./text-input";

interface EmailInputProps extends Omit<TextInputProps, "type"> {
  validate?: boolean;
}

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ validate = true, error, ...props }, ref) => {
    const validateEmail = (email: string): string | undefined => {
      if (!validate) return undefined;
      if (!email) return undefined;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return "Please enter a valid email address";
      }
      return undefined;
    };

    return (
      <TextInput
        ref={ref}
        type="email"
        error={error}
        {...props}
      />
    );
  }
);

EmailInput.displayName = "EmailInput";

