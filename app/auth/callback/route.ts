import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") || "/";
  const error = requestUrl.searchParams.get("error");
  const errorDescription = requestUrl.searchParams.get("error_description");

  // Handle OAuth errors
  if (error) {
    const errorMessage = errorDescription || error;
    return NextResponse.redirect(
      new URL(`/auth/email?error=${encodeURIComponent(errorMessage)}`, requestUrl.origin)
    );
  }

  if (!code) {
    return NextResponse.redirect(new URL("/auth/email", requestUrl.origin));
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables");
    return NextResponse.redirect(
      new URL("/auth/email?error=config", requestUrl.origin)
    );
  }

  const cookieStore = cookies() as any;

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          // Handle cookie setting errors
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch (error) {
          // Handle cookie removal errors
        }
      },
    },
  });

  // Exchange code for session
  const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) {
    console.error("Auth error:", exchangeError);
    return NextResponse.redirect(
      new URL(`/auth?error=${encodeURIComponent(exchangeError.message)}`, requestUrl.origin)
    );
  }

  // Get user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/auth/email?error=no-user", requestUrl.origin));
  }

  // Check if user needs to complete profile (no first_name/last_name)
  const firstName = user.user_metadata?.first_name;
  const lastName = user.user_metadata?.last_name;
  
  // If social login and no name metadata, try to extract from provider
  if (!firstName || !lastName) {
    const fullName = user.user_metadata?.full_name || 
                     user.user_metadata?.name ||
                     user.user_metadata?.display_name;
    
    if (fullName) {
      const nameParts = fullName.split(" ");
      if (nameParts.length >= 2) {
        // Update user metadata with extracted name
        await supabase.auth.updateUser({
          data: {
            first_name: nameParts[0],
            last_name: nameParts.slice(1).join(" "),
            full_name: fullName,
          },
        });
      }
    }
  }

  // Redirect to home or next URL
  return NextResponse.redirect(new URL(next, requestUrl.origin));
}
