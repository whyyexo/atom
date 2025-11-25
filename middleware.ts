import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // The authentication check will be done in the layout
  // This middleware just handles basic routing
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/sign-in/:path*",
    "/sign-up/:path*",
  ],
};

