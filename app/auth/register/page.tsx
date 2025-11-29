"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { IOSCard } from "@/components/auth/ios-card";
import { IOSInput } from "@/components/auth/ios-input";
import { IOSButton } from "@/components/auth/ios-button";
import { IOSBackButton } from "@/components/auth/ios-back-button";

type RegisterStep = "name" | "password";

function RegisterPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState<RegisterStep>("name");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, [searchParams]);

  const validateName = (name: string): boolean => {
    // No numbers allowed
    return /^[a-zA-Z\s'-]+$/.test(name) && name.trim().length > 0;
  };

  const handleNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateName(firstName)) {
      setError("First name can only contain letters");
      return;
    }

    if (!validateName(lastName)) {
      setError("Last name can only contain letters");
      return;
    }

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter both first and last name");
      return;
    }

    // Smooth transition to password step
    setStep("password");
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

  const handlePasswordSubmit = async (e: React.FormEvent) => {
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
        
        // If email already exists, redirect to login
        if (
          errorMsg.includes("already registered") ||
          errorMsg.includes("user already exists") ||
          errorMsg.includes("email already registered")
        ) {
          window.location.href = `/auth/login?email=${encodeURIComponent(email)}`;
          return;
        }
        
        setError(signUpError.message || "Failed to create account");
        return;
      }

      // Check if we have a session (user is logged in)
      if (data.session && data.user) {
        // User is automatically logged in, redirect to dashboard
        window.location.href = "/dashboard";
        return;
      }

      // If user was created but no session, try to sign in immediately
      if (data.user && !data.session) {
        // Try to sign in to get session
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          setLoading(false);
          setError("Account created but failed to sign in. Please try signing in manually.");
          return;
        }

        if (signInData.session && signInData.user) {
          // Successfully signed in, redirect to dashboard
          window.location.href = "/dashboard";
          return;
        }
      }

      // Fallback - try to get current session
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        window.location.href = "/dashboard";
        return;
      }

      // If still no session, show error
      setLoading(false);
      setError("Account created but failed to sign in. Please try signing in manually.");
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background blur layers */}
      <div className="absolute inset-0 backdrop-blur-[100px] bg-[rgba(255,255,255,0.5)]" />
      
      <div className="relative z-10 w-full max-w-md">
        <IOSBackButton onClick={() => router.push("/auth/email")} />

        <AnimatePresence mode="wait">
          {step === "name" && (
            <motion.div
              key="name"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <IOSCard>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center space-y-2">
                    <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
                      Let's create your account
                    </h1>
                    <p className="text-[17px] text-gray-600 font-normal">
                      Tell us your name
                    </p>
                  </div>

                  <form onSubmit={handleNameSubmit} className="space-y-4">
                    <IOSInput
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Real-time validation: no numbers
                        if (value === "" || /^[a-zA-Z\s'-]*$/.test(value)) {
                          setFirstName(value);
                          setError("");
                        }
                      }}
                      required
                      autoComplete="given-name"
                      icon={<User className="h-5 w-5" />}
                      error={error && error.includes("First") ? error : undefined}
                    />

                    <IOSInput
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Real-time validation: no numbers
                        if (value === "" || /^[a-zA-Z\s'-]*$/.test(value)) {
                          setLastName(value);
                          setError("");
                        }
                      }}
                      required
                      autoComplete="family-name"
                      icon={<User className="h-5 w-5" />}
                      error={error && error.includes("Last") ? error : undefined}
                    />

                    {error && !error.includes("First") && !error.includes("Last") && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-red-500 font-medium"
                      >
                        {error}
                      </motion.p>
                    )}

                    <IOSButton type="submit">
                      Continue
                    </IOSButton>
                  </form>
                </motion.div>
              </IOSCard>
            </motion.div>
          )}

          {step === "password" && (
            <motion.div
              key="password"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <IOSCard>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center space-y-2">
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl font-semibold text-gray-900 tracking-tight"
                    >
                      Set your password,{" "}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="inline-block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                      >
                        {firstName}
                      </motion.span>
                    </motion.h1>
                    <p className="text-[17px] text-gray-600 font-normal">
                      Create a secure password
                    </p>
                  </div>

                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <IOSInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="new-password"
                        icon={<Lock className="h-5 w-5" />}
                      />
                      
                      {/* Password strength indicator */}
                      {password && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-1"
                        >
                          <div className="flex gap-1 h-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <motion.div
                                key={i}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: i <= passwordStrength.strength ? 1 : 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`flex-1 rounded-full ${i <= passwordStrength.strength ? passwordStrength.color : "bg-gray-200"}`}
                              />
                            ))}
                          </div>
                          <p className={`text-xs font-medium ${
                            passwordStrength.strength <= 2 ? "text-red-500" :
                            passwordStrength.strength <= 4 ? "text-yellow-500" :
                            "text-green-500"
                          }`}>
                            {passwordStrength.label}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    <IOSInput
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      autoComplete="new-password"
                      icon={<Lock className="h-5 w-5" />}
                      error={error}
                    />

                    <IOSButton type="submit" loading={loading}>
                      Create Account
                    </IOSButton>
                  </form>
                </motion.div>
              </IOSCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="h-8 w-8 border-2 border-[#0A84FF] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <RegisterPageContent />
    </Suspense>
  );
}

