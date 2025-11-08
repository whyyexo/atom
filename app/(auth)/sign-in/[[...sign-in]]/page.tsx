'use client';

import { SignIn } from "@clerk/nextjs";

import { authAppearance } from "@/config/clerk";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background/80 to-accent/30 p-6">
      <SignIn
        appearance={authAppearance}
        afterSignInUrl="/dashboard"
        signUpUrl="/sign-up"
      />
    </div>
  );
}


