'use client';

import { SignUp } from "@clerk/nextjs";

import { authAppearance } from "@/config/clerk";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background/80 to-accent/30 p-6">
      <SignUp
        appearance={authAppearance}
        afterSignUpUrl="/dashboard"
        signInUrl="/sign-in"
      />
    </div>
  );
}
