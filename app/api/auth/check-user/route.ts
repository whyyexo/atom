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

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase environment variables");
      // Fallback to conservative approach
      return NextResponse.json({ exists: false, user: null });
    }

    // Use service role key to check if user exists directly in the database
    // This is the most reliable method
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Query the auth.users table directly using admin API
    const { data: users, error } = await supabaseAdmin.auth.admin.listUsers();

    if (error) {
      console.error("Error fetching users:", error);
      // Fallback: try signInWithPassword method
      const fallbackResult = await fallbackCheck(email, supabaseUrl);
      return NextResponse.json(fallbackResult);
    }

    // Check if email exists in the users list
    const userExists = users.users.some((user) => 
      user.email?.toLowerCase() === email.toLowerCase()
    );

    if (userExists) {
      const user = users.users.find((u) => 
        u.email?.toLowerCase() === email.toLowerCase()
      );
      return NextResponse.json({ 
        exists: true, 
        user: { 
          email: user?.email,
          id: user?.id,
          metadata: user?.user_metadata
        } 
      });
    }

    return NextResponse.json({ exists: false, user: null });
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
      
      // "Invalid login credentials" - can't be sure, assume false to avoid false positives
      return { exists: false, user: null };
    }

    return { exists: false, user: null };
  } catch (err) {
    return { exists: false, user: null };
  }
}

