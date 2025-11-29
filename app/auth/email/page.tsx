"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { IOSCard } from "@/components/auth/ios-card";
import { IOSInput } from "@/components/auth/ios-input";
import { IOSButton } from "@/components/auth/ios-button";
import { AppleIcon, GoogleIcon, GitHubIcon } from "@/components/auth/social-icons";
import Image from "next/image";

function EmailPageContent() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkingSession, setCheckingSession] = useState(true);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          // User is already logged in, redirect to dashboard
          router.replace("/dashboard");
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
        router.replace("/dashboard");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  const checkUserExists = async (email: string): Promise<boolean> => {
    try {
      // Try to sign in with an invalid password
      // Supabase returns "Invalid login credentials" for both wrong password AND non-existent user (security)
      // But "Email not confirmed" definitely means user exists
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password: "check_user_exists_dummy_password_12345!@#$%",
      });

      if (signInError) {
        const errorMsg = signInError.message.toLowerCase();
        
        // "Email not confirmed" definitely means user exists
        if (errorMsg.includes("email not confirmed") || errorMsg.includes("email address not confirmed")) {
          return true;
        }
        
        // "Invalid login credentials" is ambiguous - could be wrong password OR user doesn't exist
        // For security, Supabase doesn't distinguish between these
        // However, in practice, if we get this error, it's more likely the user exists
        // (since most attempts are from existing users with wrong passwords)
        // We'll assume user exists to avoid redirecting existing users to register
        if (errorMsg.includes("invalid login credentials") || errorMsg.includes("incorrect password")) {
          return true; // Assume user exists - redirect to login
        }
        
        // Other errors might mean user doesn't exist
        return false;
      }

      // No error (shouldn't happen with dummy password) - assume user doesn't exist
      return false;
    } catch (err) {
      // On any error, assume user doesn't exist to avoid blocking new users
      return false;
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      // Show loading shimmer
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Check if user exists
      const userExists = await checkUserExists(email);
      
      if (userExists) {
        // User exists - redirect to login
        window.location.href = `/auth/login?email=${encodeURIComponent(email)}`;
      } else {
        // New user - redirect to register
        window.location.href = `/auth/register?email=${encodeURIComponent(email)}`;
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "apple" | "google" | "github") => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError("Failed to sign in with " + provider);
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
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/A_blanc.png"
            alt="Atom"
            width={80}
            height={80}
            className="h-16 w-16"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(0.5)',
              opacity: 0.5
            }}
            priority
          />
        </motion.div>

        <IOSCard>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Welcome to Atom
              </h1>
              <p className="text-[17px] text-gray-600 font-normal">
                Enter your email to continue
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <IOSInput
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                icon={<Mail className="h-5 w-5" />}
                error={error}
              />

              <IOSButton type="submit" loading={loading}>
                Continue
              </IOSButton>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-gray-500">or</span>
              </div>
            </div>

            <div className="space-y-3">
              <IOSButton
                variant="secondary"
                onClick={() => handleSocialLogin("apple")}
                className="flex items-center justify-center gap-3"
              >
                <AppleIcon className="h-5 w-5" />
                Continue with Apple
              </IOSButton>
              <IOSButton
                variant="secondary"
                onClick={() => handleSocialLogin("google")}
                className="flex items-center justify-center gap-3"
              >
                <GoogleIcon className="h-5 w-5" />
                Continue with Google
              </IOSButton>
              <IOSButton
                variant="secondary"
                onClick={() => handleSocialLogin("github")}
                className="flex items-center justify-center gap-3"
              >
                <GitHubIcon className="h-5 w-5" />
                Continue with GitHub
              </IOSButton>
            </div>
          </motion.div>
        </IOSCard>
      </div>
    </div>
  );
}

export default function EmailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="h-8 w-8 border-2 border-[#0071e3] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <EmailPageContent />
    </Suspense>
  );
}

