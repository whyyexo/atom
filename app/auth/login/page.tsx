"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthInput } from "@/components/auth/auth-input";
import { AuthButton } from "@/components/auth/auth-button";

type AuthMode = "password" | "magic-link";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<AuthMode>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        const redirect = searchParams.get("redirect");
        router.push(redirect || "/dashboard");
      }
    });

    // Check for success message from other pages
    const successMsg = searchParams.get("success");
    if (successMsg) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }
  }, [router, searchParams, supabase]);

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message || "Invalid email or password");
        setLoading(false);
        return;
      }

      if (data.user) {
        const redirect = searchParams.get("redirect");
        router.push(redirect || "/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const redirectUrl = `${window.location.origin}/auth/callback`;
      const { error: magicLinkError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectUrl,
        },
      });

      if (magicLinkError) {
        setError(magicLinkError.message || "Failed to send magic link");
        setLoading(false);
        return;
      }

      setMagicLinkSent(true);
      setLoading(false);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your account">
      <AnimatePresence mode="wait">
        {magicLinkSent ? (
          <motion.div
            key="magic-link-success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Check your inbox</h2>
              <p className="text-sm font-light text-white/60">
                We've sent a magic link to <span className="font-medium text-white">{email}</span>
              </p>
              <p className="mt-4 text-xs font-light text-white/50">
                Click the link in the email to sign in. If you don't see it, check your spam folder.
              </p>
            </div>
            <AuthButton
              variant="secondary"
              onClick={() => {
                setMagicLinkSent(false);
                setEmail("");
              }}
            >
              Use a different email
            </AuthButton>
          </motion.div>
        ) : (
          <motion.div
            key="login-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Success message */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="rounded-xl bg-green-500/10 border border-green-500/20 p-3 text-sm text-green-400"
                >
                  {searchParams.get("success")}
                </motion.div>
              )}
            </AnimatePresence>

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

            {/* Mode toggle */}
            <div className="flex gap-2 rounded-xl bg-white/5 p-1 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => {
                  setMode("password");
                  setError("");
                }}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  mode === "password"
                    ? "bg-white text-black shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Password
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("magic-link");
                  setError("");
                }}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  mode === "magic-link"
                    ? "bg-white text-black shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Magic Link
              </button>
            </div>

            {/* Forms */}
            {mode === "password" ? (
              <form onSubmit={handlePasswordLogin} className="space-y-4">
                <div className="space-y-2">
                  <AuthInput
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    error={error && mode === "password" ? error : undefined}
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
                    autoComplete="current-password"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Link
                    href="/auth/reset-password"
                    className="font-light text-white/60 hover:text-white transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <AuthButton type="submit" loading={loading}>
                  Sign in
                </AuthButton>
              </form>
            ) : (
              <form onSubmit={handleMagicLink} className="space-y-4">
                <div className="space-y-2">
                  <AuthInput
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    error={error && mode === "magic-link" ? error : undefined}
                    autoComplete="email"
                  />
                </div>
                <AuthButton type="submit" loading={loading}>
                  Send magic link
                </AuthButton>
              </form>
            )}

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

            {/* Sign up link */}
            <p className="text-center text-sm font-light text-white/60">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="font-medium text-white hover:text-white/80 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}

