"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { IOSCard } from "@/components/auth/ios-card";
import { IOSInput } from "@/components/auth/ios-input";
import { IOSButton } from "@/components/auth/ios-button";
import { IOSBackButton } from "@/components/auth/ios-back-button";
import Link from "next/link";

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [shimmerLoading, setShimmerLoading] = useState(true);
  const [checkingSession, setCheckingSession] = useState(true);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userExists, setUserExists] = useState(false);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          // User is already logged in, redirect to home
          router.replace("/");
          return;
        }
      } catch (err) {
        // Ignore errors
      } finally {
        setCheckingSession(false);
      }
    };

    checkSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        router.replace("/");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  // Verify if user actually exists before showing "Welcome back"
  const verifyUserExists = async (email: string): Promise<boolean> => {
    try {
      // Use API route to check if user exists (more reliable server-side check)
      const response = await fetch("/api/auth/check-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        // On error, assume user doesn't exist to avoid false positives
        return false;
      }

      const data = await response.json();
      return data.exists === true;
    } catch (err) {
      // On any error, assume user doesn't exist to avoid false positives
      return false;
    }
  };

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      const decodedEmail = decodeURIComponent(emailParam);
      setEmail(decodedEmail);
      
      // Verify user exists before showing "Welcome back"
      verifyUserExists(decodedEmail).then((exists) => {
        setUserExists(exists);
        if (exists) {
          extractFirstNameFromEmail(decodedEmail);
        }
        setShimmerLoading(false);
      });
    } else {
      setShimmerLoading(false);
    }
  }, [searchParams]);

  const extractFirstNameFromEmail = (email: string) => {
    const username = email.split("@")[0];
    const name = username.split(/[._-]/)[0];
    setFirstName(name.charAt(0).toUpperCase() + name.slice(1));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message || "Invalid password");
        setLoading(false);
        return;
      }

      if (data.user) {
        // Get user metadata for first name if available
        const metaFirstName = data.user.user_metadata?.first_name;
        if (metaFirstName) {
          setFirstName(metaFirstName);
        }
        
        const redirect = searchParams.get("redirect");
        window.location.href = redirect || "/";
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  // Show loading while checking session
  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-[#0071e3] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background blur layers */}
      <div className="absolute inset-0 backdrop-blur-[100px] bg-[rgba(255,255,255,0.5)]" />
      
      <div className="relative z-10 w-full max-w-md">
        <IOSBackButton onClick={() => router.push("/auth/email")} />

        <AnimatePresence mode="wait">
          {shimmerLoading ? (
            <motion.div
              key="shimmer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <IOSCard>
                <div className="space-y-4">
                  <div className="h-8 bg-gray-200/50 rounded-xl animate-pulse" />
                  <div className="h-14 bg-gray-200/50 rounded-xl animate-pulse" />
                </div>
              </IOSCard>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <IOSCard>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                  <div className="text-center space-y-2">
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-semibold text-gray-900 tracking-tight"
                    >
                      {userExists && firstName ? (
                        <>
                          Welcome back,{" "}
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="inline-block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                          >
                            {firstName}
                          </motion.span>
                        </>
                      ) : (
                        "Sign in to your account"
                      )}
                    </motion.h1>
                    <p className="text-[17px] text-gray-600 font-normal">
                      Enter your password to continue
                    </p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <IOSInput
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      icon={<Lock className="h-5 w-5" />}
                      error={error}
                    />

                    <IOSButton type="submit" loading={loading}>
                      Sign In
                    </IOSButton>
                  </form>

                  <div className="text-center">
                    <Link
                      href="/auth/reset-password"
                      className="text-[#0071e3] text-[17px] font-medium hover:opacity-80 transition-opacity"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </motion.div>
              </IOSCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="h-8 w-8 border-2 border-[#0071e3] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}

