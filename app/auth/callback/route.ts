import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getWorkspaceByUserId } from "@/lib/supabase/workspace";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/";

  if (code) {
    const cookieStore = cookies();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing Supabase environment variables");
      return NextResponse.redirect(new URL("/login?error=config", requestUrl.origin));
    }

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

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Get user's workspace
        const workspace = await getWorkspaceByUserId(user.id);

        if (workspace) {
          return NextResponse.redirect(new URL(`/workspace/${workspace.slug}`, requestUrl.origin));
        } else {
          // Workspace not found, might need to wait for trigger
          console.error("Workspace not found for user:", user.id);
          return NextResponse.redirect(new URL("/login?error=no-workspace", requestUrl.origin));
        }
      }
    } else {
      console.error("Auth error:", error);
      return NextResponse.redirect(new URL(`/login?error=${error.message}`, requestUrl.origin));
    }
  }

  // Redirect to login on error
  return NextResponse.redirect(new URL("/login", requestUrl.origin));
}
