"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { IOSCard } from "@/components/auth/ios-card";
import { IOSInput } from "@/components/auth/ios-input";
import { IOSButton } from "@/components/auth/ios-button";

function UpdatePasswordPageContent() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  useEffect(() => {
    // Check if user has a valid session (from password reset link)
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/auth/reset-password?error=invalid-link");
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
      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      });

      if (updateError) {
        setError(updateError.message || "Failed to update password");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/login?success=Password updated successfully");
      }, 2000);
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
                <Lock className="h-8 w-8 text-green-600" />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold text-gray-900">Password updated</h1>
                <p className="text-[17px] text-gray-600">Redirecting you to sign in...</p>
              </div>
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
        <IOSCard>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Update password
              </h1>
              <p className="text-[17px] text-gray-600 font-normal">
                Choose a new password
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <IOSInput
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                icon={<Lock className="h-5 w-5" />}
              />

              <IOSInput
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
                icon={<Lock className="h-5 w-5" />}
                error={error}
              />

              <IOSButton type="submit" loading={loading}>
                Update Password
              </IOSButton>
            </form>
          </motion.div>
        </IOSCard>
      </div>
    </div>
  );
}

export default function UpdatePasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="h-8 w-8 border-2 border-[#0071e3] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <UpdatePasswordPageContent />
    </Suspense>
  );
}

