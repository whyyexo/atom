'use client';

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
      <SignUp afterSignUpUrl="/dashboard" signInUrl="/sign-in" />
    </div>
  );
}
