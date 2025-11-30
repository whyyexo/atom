"use client";

import { useState, FormEvent, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { Loader2, ArrowRight } from "lucide-react";
import {
  PrimaryButton,
  SecondaryButton,
  EmailInput,
  PasswordInput,
  TextInput,
  Card,
  PageContainer,
  TitleM,
  Body,
  Caption,
  SmoothFadeSlide,
} from "@/guide";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor } from "@/guide/styles";
import { motion, AnimatePresence } from "framer-motion";

type Step = "email" | "name" | "password";

export default function SignUpPage() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  const validateName = (name: string): boolean => {
    return /^[a-zA-Z\s'-]+$/.test(name) && name.trim().length > 0;
  };

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setStep("name");
  };

  const handleNameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateName(firstName)) {
      setError("First name can only contain letters");
      return;
    }

    if (!validateName(lastName)) {
      setError("Last name can only contain letters");
      return;
    }

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter both first and last name");
      return;
    }

    setStep("password");
  };

  async function handlePasswordSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            full_name: `${firstName.trim()} ${lastName.trim()}`,
          },
        },
      });

      if (signUpError) {
        const errorMsg = signUpError.message.toLowerCase();
        
        if (
          errorMsg.includes("already registered") ||
          errorMsg.includes("user already exists") ||
          errorMsg.includes("email already registered")
        ) {
          setError("This email is already registered. Please sign in instead.");
          setLoading(false);
          return;
        }
        
        setError(signUpError.message || "Failed to create account");
        setLoading(false);
        return;
      }

      if (data.session && data.user) {
        router.push("/dashboard");
        router.refresh();
        return;
      }

      setError("");
      router.push("/login?message=Please check your email to confirm your account");
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  }

  return (
    <PageContainer className="flex items-center justify-center">
      <SmoothFadeSlide direction="up" delay={0.1}>
        <Card className="w-full max-w-md">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <TitleM>
                {step === "email" && "Create Account"}
                {step === "name" && `Welcome, ${email.split("@")[0]}!`}
                {step === "password" && `Almost there, ${firstName}!`}
              </TitleM>
              <Body>
                {step === "email" && "Enter your email to get started"}
                {step === "name" && "Tell us your name"}
                {step === "password" && "Set your password"}
              </Body>
            </div>

            <AnimatePresence mode="wait">
              {step === "email" && (
                <motion.form
                  key="email"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleEmailSubmit}
                  className="space-y-5"
                >
                  <EmailInput
                    label="Email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    required
                    error={error}
                  />

                  <PrimaryButton type="submit" fullWidth>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </PrimaryButton>
                </motion.form>
              )}

              {step === "name" && (
                <motion.form
                  key="name"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleNameSubmit}
                  className="space-y-5"
                >
                  <TextInput
                    label="First Name"
                    placeholder="John"
                    value={firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const value = e.target.value;
                      if (value === "" || /^[a-zA-Z\s'-]*$/.test(value)) {
                        setFirstName(value);
                        setError("");
                      }
                    }}
                    required
                    error={error && error.includes("First") ? error : undefined}
                  />

                  <TextInput
                    label="Last Name"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const value = e.target.value;
                      if (value === "" || /^[a-zA-Z\s'-]*$/.test(value)) {
                        setLastName(value);
                        setError("");
                      }
                    }}
                    required
                    error={error && error.includes("Last") ? error : undefined}
                  />

                  {error && !error.includes("First") && !error.includes("Last") && (
                    <div
                      className="p-3 rounded-2xl text-sm"
                      style={{
                        backgroundColor: getColor("systemRed", mode) + "15",
                        color: getColor("systemRed", mode),
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <SecondaryButton
                      type="button"
                      onClick={() => setStep("email")}
                      fullWidth
                    >
                      Back
                    </SecondaryButton>
                    <PrimaryButton type="submit" fullWidth>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </PrimaryButton>
                  </div>
                </motion.form>
              )}

              {step === "password" && (
                <motion.form
                  key="password"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handlePasswordSubmit}
                  className="space-y-5"
                >
                  <PasswordInput
                    label="Password"
                    placeholder="Create a secure password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    showStrengthIndicator
                  />

                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                    required
                    disabled={loading}
                    error={error && error.includes("match") ? error : undefined}
                  />

                  {error && !error.includes("match") && (
                    <div
                      className="p-3 rounded-2xl text-sm"
                      style={{
                        backgroundColor: getColor("systemRed", mode) + "15",
                        color: getColor("systemRed", mode),
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <SecondaryButton
                      type="button"
                      onClick={() => setStep("name")}
                      fullWidth
                      disabled={loading}
                    >
                      Back
                    </SecondaryButton>
                    <PrimaryButton type="submit" fullWidth disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </PrimaryButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="text-center">
              <Caption>
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium hover:underline"
                  style={{ color: getColor("systemBlue", mode) }}
                >
                  Sign in
                </Link>
              </Caption>
            </div>
          </div>
        </Card>
      </SmoothFadeSlide>
    </PageContainer>
  );
}
