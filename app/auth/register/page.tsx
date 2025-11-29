"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, CheckCircle2 } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthInput } from "@/components/auth/auth-input";
import { AuthButton } from "@/components/auth/auth-button";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        router.push("/dashboard");
      }
    });
  }, [router, supabase]);

  const validatePassword = (pwd: string): string | null => {
    if (pwd.length < 8) {
      return "Password must be at least 8 characters";
    }
    if (!/(?=.*[a-z])/.test(pwd)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(pwd)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/(?=.*\d)/.test(pwd)) {
      return "Password must contain at least one number";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      setLoading(false);
      return;
    }

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/verify-email`,
        },
      });

      if (signUpError) {
        setError(signUpError.message || "Failed to create account");
        setLoading(false);
        return;
      }

      // If session exists, user is automatically verified
      if (data.session) {
        router.push("/dashboard");
        router.refresh();
        return;
      }

      // Otherwise, redirect to verification page
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/verify-email?email=" + encodeURIComponent(email));
      }, 2000);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create account" subtitle="Get started with Atom">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
              <CheckCircle2 className="h-8 w-8 text-green-400" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Account created</h2>
              <p className="text-sm font-light text-white/60">
                Please verify your email address to continue
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="register-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <AuthInput
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <AuthInput
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />
                <p className="text-xs font-light text-white/40">
                  Must be at least 8 characters with uppercase, lowercase, and a number
                </p>
              </div>
              <div className="space-y-2">
                <AuthInput
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />
              </div>
              <AuthButton type="submit" loading={loading}>
                Create account
              </AuthButton>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[rgba(22,22,23,0.75)] px-2 text-white/40">or</span>
              </div>
            </div>

            {/* OAuth providers - Hidden by default */}
            {process.env.NEXT_PUBLIC_ENABLE_OAUTH === "true" && (
              <div className="space-y-3">
                <AuthButton
                  variant="secondary"
                  onClick={async () => {
                    const { error } = await supabase.auth.signInWithOAuth({
                      provider: "google",
                      options: {
                        redirectTo: `${window.location.origin}/auth/callback`,
                      },
                    });
                    if (error) setError(error.message);
                  }}
                >
                  Continue with Google
                </AuthButton>
                <AuthButton
                  variant="secondary"
                  onClick={async () => {
                    const { error } = await supabase.auth.signInWithOAuth({
                      provider: "apple",
                      options: {
                        redirectTo: `${window.location.origin}/auth/callback`,
                      },
                    });
                    if (error) setError(error.message);
                  }}
                >
                  Continue with Apple
                </AuthButton>
              </div>
            )}

            {/* Sign in link */}
            <p className="text-center text-sm font-light text-white/60">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-white hover:text-white/80 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}

