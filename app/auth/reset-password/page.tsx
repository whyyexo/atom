"use client";

import { useState, useMemo, Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { IOSCard } from "@/components/auth/ios-card";
import { IOSInput } from "@/components/auth/ios-input";
import { IOSButton } from "@/components/auth/ios-button";
import { IOSBackButton } from "@/components/auth/ios-back-button";

function ResetPasswordPageContent() {
  const router = useRouter();
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

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 backdrop-blur-[100px] bg-[rgba(255,255,255,0.5)]" />
        <div className="relative z-10 w-full max-w-md">
          <IOSCard>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold text-gray-900">Check your inbox</h1>
                <p className="text-[17px] text-gray-600">
                  We've sent a password reset link to <span className="font-medium">{email}</span>
                </p>
              </div>
              <IOSButton onClick={() => router.push("/auth/login")}>
                Back to Sign In
              </IOSButton>
            </motion.div>
          </IOSCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="absolute inset-0 backdrop-blur-[100px] bg-[rgba(255,255,255,0.5)]" />
      <div className="relative z-10 w-full max-w-md">
        <IOSBackButton onClick={() => router.push("/auth/login")} />
        <IOSCard>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Reset password
              </h1>
              <p className="text-[17px] text-gray-600 font-normal">
                Enter your email to receive a reset link
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                Send Reset Link
              </IOSButton>
            </form>
          </motion.div>
        </IOSCard>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="h-8 w-8 border-2 border-[#0071e3] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ResetPasswordPageContent />
    </Suspense>
  );
}

