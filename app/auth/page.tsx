"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, ArrowRight, User } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import Image from "next/image";

type Step = "email" | "name" | "password" | "create-password";

function AuthPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [nameLoading, setNameLoading] = useState(false);
  const [error, setError] = useState("");
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState("");
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        const redirect = searchParams.get("redirect");
        router.push(redirect || "/dashboard");
      }
    });

    // Check for error from URL
    const errorParam = searchParams.get("error");
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
  }, [router, searchParams, supabase]);

  // Extract name from email for display
  const extractNameFromEmail = (email: string): string => {
    const username = email.split("@")[0];
    // Capitalize first letter
    return username.charAt(0).toUpperCase() + username.slice(1).split(/[._-]/)[0];
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

    // Don't check if email exists - let the user proceed
    // If they're creating an account and email exists, they'll get an error at signup
    // If they're signing in and email doesn't exist, they'll get an error at signin
    // For now, default to new user flow (name step)
    // User can always go back if they meant to sign in
    setStep("name");
    setLoading(false);
  };

  const handleNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter both first and last name");
      return;
    }
    
    setNameLoading(true);
    setError("");
    
    // Small delay for smooth transition (Apple-like)
    setTimeout(() => {
      setUserDisplayName(`${firstName.trim()} ${lastName.trim()}`);
      setNameLoading(false);
      setStep("create-password");
    }, 800);
  };

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
        setError(signInError.message || "Invalid password");
        setLoading(false);
        return;
      }

      if (data.user) {
        const redirect = searchParams.get("redirect");
        // Use window.location for immediate redirect
        window.location.href = redirect || "/dashboard";
        return;
      }
      
      // If no user but no error, something went wrong
      setLoading(false);
      setError("Something went wrong. Please try again.");
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

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
        setLoading(false);
        
        // If email already exists, offer to sign in instead
        if (
          errorMsg.includes("already registered") ||
          errorMsg.includes("user already exists") ||
          errorMsg.includes("email already registered")
        ) {
          setError("This email is already registered. Please sign in instead.");
          // Extract name from email for sign in
          const name = extractNameFromEmail(email);
          setUserDisplayName(name);
          setIsExistingUser(true);
          setStep("password");
          return;
        }
        
        setError(signUpError.message || "Failed to create account");
        return;
      }

      // If session exists, user is automatically verified
      if (data.session) {
        const redirect = searchParams.get("redirect");
        // Use window.location for immediate redirect
        window.location.href = redirect || "/dashboard";
        return;
      }

      // Otherwise, show success and redirect
      const redirect = searchParams.get("redirect");
      // Use window.location for immediate redirect
      window.location.href = redirect || "/dashboard";
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  const getPasswordStrength = (pwd: string): { strength: number; label: string; color: string } => {
    if (!pwd) return { strength: 0, label: "", color: "" };
    
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^a-zA-Z\d]/.test(pwd)) strength++;

    if (strength <= 2) return { strength, label: "Weak", color: "bg-red-500" };
    if (strength <= 4) return { strength, label: "Fair", color: "bg-yellow-500" };
    return { strength, label: "Strong", color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="w-full max-w-md"
      >
        {/* Logo Atom */}
        <div className="flex justify-center mb-8">
          <Image
            src="/A_blanc.png"
            alt="Atom"
            width={120}
            height={120}
            className="h-12 w-12"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(0.5)',
              opacity: 0.5
            }}
            priority
          />
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-2">
            Welcome to Atom
          </h1>
          <p className="text-base text-gray-600 font-light">
            {step === "email" && "Enter your email to continue"}
            {step === "name" && "Tell us your name"}
            {step === "password" && "Enter your password"}
            {step === "create-password" && "Create your password"}
          </p>
          {step === "email" && (
            <p className="text-sm text-gray-500 font-light mt-2">
              New here? We'll create an account for you.
            </p>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10">
          <AnimatePresence mode="wait">
            {step === "email" && (
              <motion.form
                key="email"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleEmailSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 mt-2">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-xl bg-[#0071e3] text-white font-medium hover:bg-[#0077ed] active:bg-[#0071e3] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </motion.form>
            )}

            {step === "name" && (
              <>
                {nameLoading ? (
                  <motion.div
                    key="name-loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 space-y-4"
                  >
                    <div className="h-8 w-8 border-2 border-[#0071e3] border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm font-light text-gray-600">Setting things up...</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="name"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleNameSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="First name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          autoComplete="given-name"
                          className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                        />
                      </div>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                          autoComplete="family-name"
                          className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                        />
                      </div>
                      {error && (
                        <p className="text-sm text-red-600 mt-2">{error}</p>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setStep("email");
                          setFirstName("");
                          setLastName("");
                          setError("");
                        }}
                        className="flex-1 h-14 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 h-14 rounded-xl bg-[#0071e3] text-white font-medium hover:bg-[#0077ed] active:bg-[#0071e3] transition-all flex items-center justify-center gap-2"
                      >
                        Continue
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </>
            )}

            {step === "password" && (
              <motion.form
                key="password"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handlePasswordLogin}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Welcome back,{" "}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="inline-block"
                      >
                        {userDisplayName}
                      </motion.span>
                    </h2>
                    <p className="text-sm font-light text-gray-600">Enter your password to continue</p>
                  </motion.div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 mt-2">{error}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStep("email");
                      setPassword("");
                      setError("");
                    }}
                    className="flex-1 h-14 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 h-14 rounded-xl bg-[#0071e3] text-white font-medium hover:bg-[#0077ed] active:bg-[#0071e3] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Sign in
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}

            {step === "create-password" && (
              <motion.form
                key="create-password"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleCreateAccount}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Happy to see you,{" "}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="inline-block"
                      >
                        {userDisplayName.split(" ")[0]}
                      </motion.span>
                    </h2>
                    <p className="text-sm font-light text-gray-600">Create a password to secure your account</p>
                  </motion.div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        placeholder="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="new-password"
                        className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                      />
                    </div>
                    
                    {/* Password strength indicator */}
                    {password && (
                      <div className="space-y-2">
                        <div className="flex gap-1 h-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-full transition-all ${
                                i <= passwordStrength.strength
                                  ? passwordStrength.color
                                  : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <p className={`text-xs font-medium ${
                          passwordStrength.strength <= 2 ? "text-red-600" :
                          passwordStrength.strength <= 4 ? "text-yellow-600" :
                          "text-green-600"
                        }`}>
                          {passwordStrength.label}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      autoComplete="new-password"
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
                    />
                  </div>
                  
                  {error && (
                    <p className="text-sm text-red-600 mt-2">{error}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStep("name");
                      setPassword("");
                      setConfirmPassword("");
                      setError("");
                    }}
                    className="flex-1 h-14 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading || password !== confirmPassword || password.length < 8}
                    className="flex-1 h-14 rounded-xl bg-[#0071e3] text-white font-medium hover:bg-[#0077ed] active:bg-[#0071e3] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Create account
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-light text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <AuthPageContent />
    </Suspense>
  );
}
