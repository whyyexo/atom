"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, Loader2, RefreshCw } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthButton } from "@/components/auth/auth-button";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [success, setSuccess] = useState(false);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }

    // Check if user is already verified
    const checkVerification = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email_confirmed_at) {
        router.push("/dashboard");
      }
    };

    checkVerification();

    // Listen for auth state changes (when user clicks verification link)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user?.email_confirmed_at) {
        router.push("/dashboard");
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, searchParams, supabase]);

  const handleResend = async () => {
    if (!email) return;
    setResending(true);

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/verify-email`,
        },
      });

      if (error) {
        console.error("Resend error:", error);
      } else {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      console.error("Resend error:", err);
    } finally {
      setResending(false);
    }
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-white">Verify your email</h1>
          <p className="text-sm font-light text-white/60">
            {email ? (
              <>
                We've sent a verification link to <span className="font-medium text-white">{email}</span>
              </>
            ) : (
              "We've sent a verification link to your email address"
            )}
          </p>
          <p className="mt-4 text-xs font-light text-white/50">
            Click the link in the email to verify your account. If you don't see it, check your spam folder.
          </p>
        </div>

        {/* Success message for resend */}
        {success && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="rounded-xl bg-green-500/10 border border-green-500/20 p-3 text-sm text-green-400"
          >
            Verification email sent!
          </motion.div>
        )}

        <div className="space-y-3">
          {email && (
            <AuthButton
              variant="secondary"
              onClick={handleResend}
              loading={resending}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Resend verification email
            </AuthButton>
          )}
          <Link href="/auth/login">
            <AuthButton variant="ghost">
              Back to sign in
            </AuthButton>
          </Link>
        </div>
      </motion.div>
    </AuthLayout>
  );
}

