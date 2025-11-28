import { createServerClient as createSSRClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createServerClient() {
  // In Next.js route handlers and server components, cookies() returns ReadonlyRequestCookies synchronously
  const cookieStore = cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createSSRClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return (cookieStore as any).get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          (cookieStore as any).set({ name, value, ...options });
        } catch (error) {
          // Handle cookie setting errors (e.g., in middleware)
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          (cookieStore as any).set({ name, value: "", ...options });
        } catch (error) {
          // Handle cookie removal errors
        }
      },
    },
  });
}

export async function getSession() {
  const supabase = createServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

export async function getUser() {
  const session = await getSession();
  return session?.user ?? null;
}
