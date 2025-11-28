import { createServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { getWorkspaceByUserId } from "@/lib/supabase/workspace";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createServerClient();
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
        }
      }
    }
  }

  // Redirect to login on error
  return NextResponse.redirect(new URL("/login", requestUrl.origin));
}

