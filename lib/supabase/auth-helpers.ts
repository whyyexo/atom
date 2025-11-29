"use server";

import { createServerClient } from "@/lib/supabase/server";

/**
 * Check if a user exists by email
 * Returns user data if exists, null otherwise
 */
export async function checkUserExists(email: string) {
  const supabase = createServerClient();
  
  try {
    // Try to get user by attempting to sign in (Supabase doesn't expose direct user lookup)
    // We'll use a different approach: check auth.users via a function or use signInWithPassword
    // For security, Supabase doesn't allow direct email lookup, so we'll handle this client-side
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Get user metadata (first_name, last_name)
 */
export async function getUserMetadata(userId: string) {
  const supabase = createServerClient();
  
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (user && user.id === userId) {
      return {
        first_name: user.user_metadata?.first_name || "",
        last_name: user.user_metadata?.last_name || "",
        full_name: user.user_metadata?.full_name || "",
      };
    }
    return null;
  } catch (error) {
    return null;
  }
}

