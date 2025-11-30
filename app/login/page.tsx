"use client";

import { useState, FormEvent, useMemo, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import {
  PrimaryButton,
  EmailInput,
  PasswordInput,
  Card,
  PageContainer,
  TitleM,
  Body,
  Caption,
  SmoothFadeSlide,
} from "@/guide";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor } from "@/guide/styles";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  useEffect(() => {
    const message = searchParams.get("message");
    if (message) {
      setError(message);
    }
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

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
  }

  return (
    <PageContainer className="flex items-center justify-center">
      <SmoothFadeSlide direction="up" delay={0.1}>
        <Card className="w-full max-w-md">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <TitleM>Sign In</TitleM>
              <Body>
                Enter your email and password to access your account
              </Body>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <EmailInput
                label="Email"
                placeholder="you@example.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                disabled={loading}
                error={error && error.includes("email") ? error : undefined}
              />

              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
                disabled={loading}
                error={error && error.includes("password") ? error : undefined}
              />

              {error && !error.includes("email") && !error.includes("password") && (
                <div
                  className="p-3 rounded-2xl text-sm"
                  style={{
                    backgroundColor: getColor("systemRed", mode) + "15",
                    color: getColor("systemRed", mode),
                  }}
                >
                  {error}
                </div>
              )}

              <PrimaryButton
                type="submit"
                fullWidth
                disabled={loading}
                text={loading ? "Signing in..." : "Sign In"}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              </PrimaryButton>
            </form>

            <div className="text-center">
              <Caption>
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium hover:underline"
                  style={{ color: getColor("systemBlue", mode) }}
                >
                  Sign up
                </Link>
              </Caption>
            </div>
          </div>
        </Card>
      </SmoothFadeSlide>
    </PageContainer>
  );
}

export default function LoginPage() {
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <Suspense
      fallback={
        <PageContainer className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <div className="flex items-center justify-center p-6">
              <Loader2
                className="h-6 w-6 animate-spin"
                style={{ color: getColor("text.tertiary", mode) }}
              />
            </div>
          </Card>
        </PageContainer>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
