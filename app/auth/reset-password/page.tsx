"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthInput } from "@/components/auth/auth-input";
import { AuthButton } from "@/components/auth/auth-button";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const redirectUrl = `${window.location.origin}/auth/update-password`;
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
      });

      if (resetError) {
        setError(resetError.message || "Failed to send reset email");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Reset password" subtitle="We'll send you a reset link">
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
              <h2 className="text-xl font-semibold text-white">Check your inbox</h2>
              <p className="text-sm font-light text-white/60">
                We've sent a password reset link to <span className="font-medium text-white">{email}</span>
              </p>
              <p className="mt-4 text-xs font-light text-white/50">
                Click the link in the email to reset your password. If you don't see it, check your spam folder.
              </p>
            </div>
            <Link href="/auth/login">
              <AuthButton variant="secondary">
                Back to sign in
              </AuthButton>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="reset-form"
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
                  error={error ? undefined : undefined}
                  autoComplete="email"
                />
                <p className="text-xs font-light text-white/40">
                  Enter the email address associated with your account
                </p>
              </div>
              <AuthButton type="submit" loading={loading}>
                Send reset link
              </AuthButton>
            </form>

            <Link
              href="/auth/login"
              className="flex items-center justify-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to sign in
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}

