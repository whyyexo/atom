# Atom Authentication System Documentation

## Overview

A complete, production-ready authentication system built with Supabase Auth, featuring a premium Apple-like UI design with dark translucent backgrounds, blur effects, and smooth animations.

## Architecture

### Pages Structure

All auth pages are located in `/app/auth/`:

- **`/auth/login`** - Login page with email/password and magic link options
- **`/auth/register`** - Registration page with email/password
- **`/auth/reset-password`** - Forgot password flow
- **`/auth/update-password`** - Password reset after email link click
- **`/auth/verify-email`** - Email verification page
- **`/auth/callback`** - OAuth and magic link callback handler

### Components

Located in `/components/auth/`:

- **`auth-layout.tsx`** - Premium glass-morphism layout wrapper
- **`auth-input.tsx`** - Custom input component with Apple-like styling
- **`auth-button.tsx`** - Custom button component with loading states
- **`auth-loading.tsx`** - Loading screen component
- **`protected-layout.tsx`** - Layout wrapper for protected routes

### Utilities & Helpers

- **`lib/auth-helpers.ts`** - Auth utility functions
- **`lib/hooks/use-auth.ts`** - React hook for auth state management
- **`lib/supabase/client.ts`** - Supabase browser client
- **`lib/supabase/server.ts`** - Supabase server client

## Features

### Authentication Methods

1. **Email/Password Login**
   - Standard email and password authentication
   - Password validation (8+ chars, uppercase, lowercase, number)
   - Error handling with user-friendly messages

2. **Magic Link Login**
   - Passwordless authentication via email
   - One-click sign-in from email
   - Automatic redirect after link click

3. **Registration**
   - Email/password registration
   - Automatic email verification flow
   - Password strength validation

4. **Password Reset**
   - Forgot password flow
   - Email-based reset link
   - Secure password update page

5. **Email Verification**
   - Email confirmation required for new accounts
   - Resend verification email functionality
   - Automatic redirect after verification

6. **OAuth Providers** (Hidden by default)
   - Google OAuth (ready, hidden unless enabled)
   - Apple OAuth (ready, hidden unless enabled)
   - Enable by setting `NEXT_PUBLIC_ENABLE_OAUTH=true`

### Security Features

1. **Route Protection**
   - Middleware protects all private routes
   - Automatic redirects for unauthenticated users
   - Redirect parameter preservation

2. **Session Management**
   - Persistent sessions with Supabase
   - Automatic session refresh
   - Real-time auth state changes

3. **Email Verification**
   - Required for new accounts
   - Protected routes check verification status
   - Resend functionality

## Design System

### Visual Style

- **Background**: `rgba(22,22,23,0.75)` with `backdrop-blur-xl`
- **Text**: White with varying opacity (100%, 60%, 40%)
- **Borders**: `rgba(255,255,255,0.1)` subtle borders
- **Inputs**: Rounded-xl, subtle borders, focus rings with blur
- **Buttons**: Full-width, 48px height, rounded-xl, smooth hover transitions
- **Font**: SF Pro Display/Text (via system font stack), Inter fallback

### Animations

- Framer Motion for smooth transitions
- Fade-in animations (0.3-0.4s duration)
- No flashy effects, Apple-level smoothness
- Reduced motion support

## Route Protection

### Middleware (`middleware.ts`)

The middleware handles:

1. **Public Routes** - Accessible without authentication:
   - `/`, `/about`, `/pricing`, `/features`, `/product`, `/docs`, `/changelog`, `/impact`, `/science`, `/legal/*`

2. **Auth Routes** - Authentication pages:
   - `/auth/login`, `/auth/register`, `/auth/reset-password`, `/auth/update-password`, `/auth/verify-email`, `/auth/callback`

3. **Protected Routes** - Require authentication:
   - `/dashboard/*` - Requires email verification
   - `/workspace/*` - Requires authentication

4. **Redirects**:
   - Authenticated users → Redirected away from auth pages to `/dashboard`
   - Unauthenticated users → Redirected to `/auth/login` with redirect parameter
   - Legacy routes (`/login`, `/sign-in`, `/sign-up`) → Redirected to new auth routes

## Usage Examples

### Using the Auth Hook

```tsx
import { useAuth } from "@/lib/hooks/use-auth";

function MyComponent() {
  const { user, loading, isAuthenticated, signOut } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Please sign in</div>;

  return (
    <div>
      <p>Welcome, {user?.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

### Protecting a Route

```tsx
import { ProtectedLayout } from "@/components/auth/protected-layout";

export default function MyPage() {
  return (
    <ProtectedLayout requireEmailVerification={true}>
      <div>Protected content</div>
    </ProtectedLayout>
  );
}
```

### Server-Side Auth Check

```tsx
import { createServerClient } from "@/lib/supabase/server";

export default async function ServerPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return <div>Protected content</div>;
}
```

## Environment Variables

Required Supabase environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # For production, use your domain
NEXT_PUBLIC_ENABLE_OAUTH=false  # Set to "true" to enable OAuth UI
```

## Flow Diagrams

### Registration Flow

1. User visits `/auth/register`
2. Enters email and password
3. Account created → Redirected to `/auth/verify-email`
4. User clicks verification link in email
5. Email verified → Redirected to `/dashboard`

### Login Flow

1. User visits `/auth/login`
2. Chooses password or magic link
3. **Password**: Enters credentials → Redirected to `/dashboard`
4. **Magic Link**: Receives email → Clicks link → Redirected to `/dashboard`

### Password Reset Flow

1. User visits `/auth/reset-password`
2. Enters email address
3. Receives reset link in email
4. Clicks link → Redirected to `/auth/update-password`
5. Enters new password → Redirected to `/auth/login` with success message

## Testing Checklist

- [x] Email/password login works
- [x] Magic link login works
- [x] Registration creates account
- [x] Email verification flow works
- [x] Password reset flow works
- [x] Protected routes redirect unauthenticated users
- [x] Authenticated users redirected away from auth pages
- [x] Session persistence works
- [x] OAuth logic ready (hidden by default)
- [x] All error states handled
- [x] Loading states displayed
- [x] Mobile responsive
- [x] Smooth animations
- [x] No linting errors

## Production Readiness

✅ **Complete**: All pages implemented
✅ **Secure**: Route protection, email verification, password validation
✅ **User-Friendly**: Clear error messages, loading states, success feedback
✅ **Accessible**: Proper form labels, keyboard navigation, focus states
✅ **Performant**: Optimized animations, efficient re-renders
✅ **Maintainable**: Clean code structure, reusable components, TypeScript types

## Notes

- OAuth providers (Google, Apple) are implemented but hidden by default
- To enable OAuth UI, set `NEXT_PUBLIC_ENABLE_OAUTH=true` in environment variables
- SF Pro font is used via system font stack (`-apple-system`) on macOS
- All auth pages use the premium glass-morphism design
- Legacy auth routes automatically redirect to new `/auth/*` routes

