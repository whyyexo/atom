"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export interface AuthState {
  user: User | null;
  loading: boolean;
}

/**
 * Get the current user session
 */
export async function getCurrentUser(): Promise<User | null> {
  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/**
 * Sign out the current user
 */
export async function signOut(): Promise<void> {
  const supabase = createSupabaseBrowserClient();
  await supabase.auth.signOut();
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return !!user;
}

/**
 * Get redirect URL for auth callbacks
 */
export function getAuthRedirectUrl(path: string = "/auth/callback"): string {
  if (typeof window === "undefined") {
    return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  }
  return `${window.location.origin}${path}`;
}

