import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") || "/dashboard";
  const error = requestUrl.searchParams.get("error");
  const errorDescription = requestUrl.searchParams.get("error_description");

  // Handle OAuth errors
  if (error) {
    const errorMessage = errorDescription || error;
    return NextResponse.redirect(
      new URL(`/auth/login?error=${encodeURIComponent(errorMessage)}`, requestUrl.origin)
    );
  }

  if (!code) {
    return NextResponse.redirect(new URL("/auth/login", requestUrl.origin));
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables");
    return NextResponse.redirect(
      new URL("/auth/login?error=config", requestUrl.origin)
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
      new URL(`/auth/login?error=${encodeURIComponent(exchangeError.message)}`, requestUrl.origin)
    );
  }

  // Get user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/auth/login?error=no-user", requestUrl.origin));
  }

  // Check if email is verified (for signup flow)
  if (!user.email_confirmed_at) {
    return NextResponse.redirect(
      new URL(`/auth/verify-email?email=${encodeURIComponent(user.email || "")}`, requestUrl.origin)
    );
  }

  // Redirect to dashboard or next URL
  return NextResponse.redirect(new URL(next, requestUrl.origin));
}
