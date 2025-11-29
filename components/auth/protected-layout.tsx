"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { AuthLoading } from "./auth-loading";
import type { User } from "@supabase/supabase-js";

interface ProtectedLayoutProps {
  children: React.ReactNode;
  requireEmailVerification?: boolean;
}

export function ProtectedLayout({ children, requireEmailVerification = false }: ProtectedLayoutProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        const { data: { user: currentUser } } = await supabase.auth.getUser();
        
        if (!currentUser) {
          router.push("/auth/login");
          return;
        }

        // Check email verification if required
        if (requireEmailVerification && !currentUser.email_confirmed_at) {
          router.push(`/auth/verify-email?email=${encodeURIComponent(currentUser.email || "")}`);
          return;
        }

        setUser(currentUser);
      } catch (error) {
        console.error("Auth check error:", error);
        router.push("/auth/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        router.push("/auth/login");
      } else if (session.user) {
        if (requireEmailVerification && !session.user.email_confirmed_at) {
          router.push(`/auth/verify-email?email=${encodeURIComponent(session.user.email || "")}`);
        } else {
          setUser(session.user);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, requireEmailVerification, supabase]);

  if (loading) {
    return <AuthLoading message="Checking authentication..." />;
  }

  if (!user) {
    return <AuthLoading message="Redirecting to login..." />;
  }

  return <>{children}</>;
}

