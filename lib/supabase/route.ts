import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function createSupabaseRouteClient() {
  const cookieStore = await cookies();

  return createRouteHandlerClient({
    cookies: () => cookieStore,
  });
}


