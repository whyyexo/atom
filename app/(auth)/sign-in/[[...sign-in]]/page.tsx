"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type State = "idle" | "loading" | "success" | "error";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    try {
      // Get the redirect URL from environment or use current origin
      const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                         (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
      
      // Send magic link (will create user if doesn't exist)
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: `${redirectUrl}/auth/callback`,
        },
      });

      if (error) {
        setState("error");
        setErrorMessage(error.message || "Something went wrong. Please try again.");
      } else {
        setState("success");
      }
    } catch (error) {
      setState("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="mb-12 text-center">
          <Link
            href="/"
            className="inline-block text-2xl font-bold uppercase tracking-[0.5px] text-[#000000] dark:text-white"
          >
            ATOM
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-white dark:bg-black p-8 shadow-sm">
          <AnimatePresence mode="wait">
            {state === "idle" && (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-semibold text-[#000000] dark:text-white">
                    Sign in to Atom
                  </h1>
                  <p className="text-base font-light text-[#333333] dark:text-[#cccccc]">
                    Enter your email to receive a magic link
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-normal text-[#333333] dark:text-[#cccccc]"
                    >
                      Email address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#666666] dark:text-[#999999]" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="h-12 rounded-lg border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-white dark:bg-black pl-10 text-[#000000] dark:text-white placeholder:text-[#999999] dark:placeholder:text-[#666666] focus-visible:ring-2 focus-visible:ring-[rgba(0,0,0,0.1)] dark:focus-visible:ring-[rgba(255,255,255,0.1)]"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-[#0071e3] text-white px-8 py-3 text-base font-normal hover:bg-[#0077ed] border-0"
                  >
                    Continue
                  </Button>
                </form>

                <p className="text-center text-sm font-light text-[#666666] dark:text-[#999999]">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-normal text-[#000000] dark:text-white underline transition-opacity hover:opacity-60"
                  >
                    Sign up
                  </Link>
                </p>
              </motion.div>
            )}

            {state === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center space-y-4 py-8"
              >
                <Loader2 className="h-8 w-8 animate-spin text-[#000000] dark:text-white" />
                <p className="text-base font-light text-[#333333] dark:text-[#cccccc]">
                  Sending magic link...
                </p>
              </motion.div>
            )}

            {state === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center space-y-4 py-8 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-[#000000] dark:text-white" />
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-[#000000] dark:text-white">
                    Check your inbox
                  </h2>
                  <p className="text-base font-light text-[#333333] dark:text-[#cccccc]">
                    We've sent a magic link to <strong>{email}</strong>
                  </p>
                  <p className="mt-4 text-sm font-light text-[#666666] dark:text-[#999999]">
                    Click the link in the email to sign in. If you don't see it, check your spam
                    folder.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setState("idle");
                    setEmail("");
                  }}
                  className="mt-4 rounded-full border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-transparent px-6 py-2 text-sm font-normal text-[#000000] dark:text-white hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.04)]"
                >
                  Use a different email
                </Button>
              </motion.div>
            )}

            {state === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-semibold text-[#000000] dark:text-white">
                    Something went wrong
                  </h1>
                  <p className="text-base font-light text-[#333333] dark:text-[#cccccc]">
                    {errorMessage || "Please try again."}
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setState("idle");
                    setErrorMessage("");
                  }}
                  className="w-full rounded-full border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#000000] dark:bg-white px-8 py-3 text-base font-normal text-white dark:text-black hover:bg-[#333333] dark:hover:bg-[#e0e0e0]"
                >
                  Try again
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
