# Atom - Supabase Setup Instructions

## Prerequisites

- Node.js 18+ installed
- A Supabase project created at https://supabase.com
- npm or yarn package manager

## Step 1: Supabase Setup

1. Create a new project at https://supabase.com
2. Note your project URL and anon key from Settings > API

## Step 2: Database Migration

1. Open your Supabase project dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
4. Run the SQL script
5. Verify tables are created: workspaces, projects, tasks, notes, notifications, events

## Step 3: Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Get these values from: Supabase Dashboard > Settings > API

**Note:** `NEXT_PUBLIC_SITE_URL` is optional but recommended. It defaults to `window.location.origin` if not set. Set it to your production domain when deploying.

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Seed Database (Optional)

1. First, create a test user via Supabase Auth UI (Authentication > Users > Add user)
2. Copy the user's UUID from the users table
3. Open SQL Editor in Supabase
4. Update the `supabase/seed.sql` file with your user UUID, or use the provided seed which will auto-detect the first user
5. Run the seed SQL script

Alternatively, use the Node.js seed script:

```bash
node supabase/seed.js
```

## Step 6: Configure Auth Callback URL (IMPORTANT!)

1. Go to Supabase Dashboard > Authentication > URL Configuration
2. In the **Redirect URLs** section, add these URLs:
   - `http://localhost:3000/auth/callback` (for local development)
   - `http://localhost:3000/**` (wildcard for all localhost routes)
   - `https://your-domain.com/auth/callback` (for production - replace with your actual domain)
3. In the **Site URL** field, set:
   - Development: `http://localhost:3000`
   - Production: `https://your-domain.com`
4. **Save** the configuration

**Note:** The redirect URLs must match exactly what's in the magic link email. If you're developing locally, make sure `http://localhost:3000/auth/callback` is in the allowed list.

## Step 7: Run Development Server

```bash
npm run dev
```

## Step 8: Test Login

1. Navigate to `http://localhost:3000/login`
2. Enter your email
3. Check your email for the magic link
4. Click the link to sign in
5. You'll be redirected to your workspace

## Project Structure

```
app/
  workspace/[slug]/          # Workspace routes (protected)
    page.tsx                 # Dashboard home
    projects/
    tasks/
    calendar/
    notes/
    analytics/
    notifications/
    settings/
  login/                     # Public login page
  auth/callback/             # Auth callback handler

lib/supabase/
  client.ts                  # Client-side Supabase client
  server.ts                  # Server-side Supabase client
  workspace.ts               # Workspace utilities
  types.ts                   # TypeScript types

supabase/
  migrations/                # SQL migrations
  seed.sql                   # Seed data
```

## Key Features

- **Single User, Single Workspace**: Each user automatically gets one workspace
- **Magic Link Auth**: Passwordless authentication via email
- **Row Level Security**: All data is protected by RLS policies
- **Auto Workspace Creation**: Workspace is created automatically on user signup via database trigger

## Troubleshooting

### "Missing Supabase environment variables"
- Ensure `.env.local` exists and contains all required variables
- Restart your dev server after adding env variables

### "Cannot find workspace"
- Check that the workspace was created (should happen automatically on user creation)
- Verify RLS policies are enabled
- Check that user_id matches in workspaces table

### Auth callback not working / Redirects to localhost
- **IMPORTANT:** Go to Supabase Dashboard > Authentication > URL Configuration
- Add `http://localhost:3000/auth/callback` to Redirect URLs (if developing locally)
- Make sure the URL matches exactly (including http vs https, port number)
- Check Site URL is set to `http://localhost:3000` for development
- Verify callback URL is added in Supabase Auth settings
- Check that middleware.ts is properly configured
- Ensure cookies are enabled in your browser
- Try clearing browser cache and cookies
- Check browser console for errors

## Production Deployment

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Update redirect URLs in Supabase Auth settings
3. Run migrations on production database
4. Deploy your application

## Database Schema

- `workspaces`: One per user, auto-created on signup
- `projects`: Belongs to workspace
- `tasks`: Belongs to workspace, optionally to project
- `notes`: Belongs to workspace
- `notifications`: Belongs to workspace
- `events`: Analytics events, belongs to workspace

All tables use Row Level Security (RLS) to ensure users can only access their own data.

