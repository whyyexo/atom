'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useSignUp } from "@clerk/nextjs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isLoaded) return;

    setError(null);
    setIsSubmitting(true);

    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
        router.refresh();
        return;
      }

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setPendingVerification(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to create your account. Please try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerifyCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isLoaded) return;

    setError(null);
    setIsSubmitting(true);

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
        router.refresh();
      } else {
        setError("Verification failed. Please request a new code.");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Invalid verification code. Please try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background/80 to-accent/30 p-6">
      <Card className="z-10 w-full max-w-md border-border/60 bg-card/90 shadow-2xl backdrop-blur-xl">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Image
              src="/atom-mark.svg"
              alt="Atom logo"
              width={28}
              height={28}
              priority
            />
          </div>
          <CardTitle className="text-2xl font-semibold">
            Create your Atom account
          </CardTitle>
          <CardDescription>
            Spin up a workspace in minutes with AI-native tools.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {pendingVerification ? (
            <form className="space-y-4" onSubmit={handleVerifyCode}>
              <div className="space-y-2">
                <Label htmlFor="code">Verification code</Label>
                <Input
                  id="code"
                  value={verificationCode}
                  onChange={(event) => setVerificationCode(event.target.value)}
                  placeholder="Enter the code sent to your email"
                  required
                />
              </div>
              {error ? (
                <p className="text-sm font-medium text-destructive">{error}</p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  We&apos;ve emailed a one-time code to {email}. Enter it below to
                  activate your workspace.
                </p>
              )}
              <Button
                type="submit"
                className="w-full"
                disabled={!isLoaded || isSubmitting}
              >
                {isSubmitting ? "Verifying..." : "Verify and continue"}
              </Button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleSignUp}>
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  placeholder="Create a strong password"
                />
              </div>
              {error ? (
                <p className="text-sm font-medium text-destructive">{error}</p>
              ) : null}
              <Button
                type="submit"
                className="w-full"
                disabled={!isLoaded || isSubmitting}
              >
                {isSubmitting ? "Creating workspace..." : "Create account"}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2 text-sm text-muted-foreground">
          <p>
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
          <p>
            Need enterprise onboarding?{" "}
            <a
              href="mailto:hello@atom.app"
              className="font-medium text-primary hover:underline"
            >
              Talk to sales
            </a>
          </p>
        </CardFooter>
      </Card>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]" />
    </div>
  );
}
