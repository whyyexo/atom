import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // If service key is not available, use fallback immediately
    if (!supabaseUrl || !supabaseServiceKey) {
      console.log("Service key not available, using fallback method");
      const fallbackResult = await fallbackCheck(email, supabaseUrl || "");
      return NextResponse.json(fallbackResult);
    }

    // Use service role key to check if user exists directly in the database
    // This is the most reliable method
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Try to get user by email using admin API
    // First, try to list users and search (with pagination handling)
    let allUsers: any[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const { data: usersData, error: listError } = await supabaseAdmin.auth.admin.listUsers({
        page,
        perPage: 1000,
      });

      if (listError) {
        console.error("Error fetching users:", listError);
        // Fallback: try signInWithPassword method
        const fallbackResult = await fallbackCheck(email, supabaseUrl);
        return NextResponse.json(fallbackResult);
      }

      if (usersData?.users) {
        allUsers = allUsers.concat(usersData.users);
        // Check if there are more pages
        hasMore = usersData.users.length === 1000;
        page++;
      } else {
        hasMore = false;
      }
    }

    // Check if email exists in the users list
    const foundUser = allUsers.find((user) => 
      user.email?.toLowerCase() === email.toLowerCase()
    );

    if (foundUser) {
      return NextResponse.json({ 
        exists: true, 
        user: { 
          email: foundUser.email,
          id: foundUser.id,
          metadata: foundUser.user_metadata
        } 
      });
    }

    // User not found in list, try fallback method
    const fallbackResult = await fallbackCheck(email, supabaseUrl);
    return NextResponse.json(fallbackResult);
  } catch (error) {
    console.error("Error checking user:", error);
    // On error, assume user doesn't exist to avoid false positives
    return NextResponse.json({ exists: false, user: null });
  }
}

// Fallback method if admin API fails
async function fallbackCheck(email: string, supabaseUrl: string): Promise<{ exists: boolean; user: any }> {
  try {
    const { createClient } = await import("@supabase/supabase-js");
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseAnonKey) {
      return { exists: false, user: null };
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    // Try to sign in with dummy password
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password: "check_user_exists_dummy_password_12345!@#$%^&*()",
    });

    if (signInError) {
      const errorMsg = signInError.message.toLowerCase();
      
      // "Email not confirmed" definitely means user exists
      if (
        errorMsg.includes("email not confirmed") ||
        errorMsg.includes("email address not confirmed")
      ) {
        return { exists: true, user: { email } };
      }
      
      // "Invalid login credentials" is ambiguous - could be wrong password OR user doesn't exist
      // However, in practice, if we get this error, it's MORE LIKELY the user exists
      // (since most login attempts are from existing users with wrong passwords)
      // We'll assume user exists to avoid blocking legitimate users
      // This is a trade-off: we might show "Welcome back" to non-existent users,
      // but we won't block existing users from logging in
      if (
        errorMsg.includes("invalid login credentials") ||
        errorMsg.includes("incorrect password") ||
        errorMsg.includes("invalid password")
      ) {
        return { exists: true, user: { email } };
      }
      
      // Other specific errors that indicate user doesn't exist
      if (
        errorMsg.includes("user not found") ||
        errorMsg.includes("email not found") ||
        errorMsg.includes("no user found") ||
        errorMsg.includes("user does not exist")
      ) {
        return { exists: false, user: null };
      }
      
      // For unknown errors, assume user exists to avoid blocking
      return { exists: true, user: { email } };
    }

    // No error (shouldn't happen with dummy password) - assume user doesn't exist
    return { exists: false, user: null };
  } catch (err) {
    console.error("Fallback check error:", err);
    // On error, assume user exists to avoid blocking legitimate users
    // This is safer than blocking existing users
    return { exists: true, user: { email } };
  }
}

