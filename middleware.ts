import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Public routes that don't require authentication
  const publicRoutes = [
    "/",
    "/about",
    "/pricing",
    "/features",
    "/product",
    "/docs",
    "/changelog",
    "/impact",
    "/science",
    "/legal",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
    "/legal/acceptable-use",
  ];

  // Auth routes
  const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/reset-password",
    "/auth/update-password",
    "/auth/verify-email",
    "/auth/callback",
  ];

  // Legacy auth routes (redirect to new ones)
  const legacyAuthRoutes = ["/login", "/sign-in", "/sign-up"];

  // Protected routes that require authentication
  const protectedRoutes = [
    "/dashboard",
    "/workspace",
  ];

  // Check if route is public
  const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"));
  
  // Check if route is auth route
  const isAuthRoute = authRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"));
  
  // Check if route is legacy auth route
  const isLegacyAuthRoute = legacyAuthRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"));
  
  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  // Handle legacy auth routes - redirect to new auth routes
  if (isLegacyAuthRoute) {
    if (pathname === "/login" || pathname.startsWith("/sign-in")) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (pathname.startsWith("/sign-up")) {
      return NextResponse.redirect(new URL("/auth/register", request.url));
    }
  }

  // Redirect authenticated users away from auth pages (except callback and update-password)
  if (isAuthRoute && user && pathname !== "/auth/callback" && pathname !== "/auth/update-password") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Protect dashboard and workspace routes
  if (isProtectedRoute && !user) {
    const redirectUrl = new URL("/auth/login", request.url);
    redirectUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Allow public routes and auth routes to proceed
  if (isPublicRoute || isAuthRoute) {
    return response;
  }

  // For any other route, require authentication
  if (!user) {
    const redirectUrl = new URL("/auth/login", request.url);
    redirectUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
