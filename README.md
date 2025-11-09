## Atom – AI Workspace Platform

This repository contains the base structure for **Atom**, a SaaS platform built with the Next.js App Router. It ships with authentication, dashboard scaffolding, and Supabase-backed storage so you can evolve it into a production AI workspace experience.

### Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 + Shadcn-inspired UI primitives
- Supabase for authentication & data

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Duplicate `.env.example` → `.env.local` (create the file) and set:

   - `DATABASE_URL` – PostgreSQL connection string
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

   If you plan to run server-side admin workflows, also set:

   - `SUPABASE_SERVICE_ROLE_KEY`

3. **Start the development server**

   ```bash
   npm run dev
   ```

Visit [`http://localhost:3000`](http://localhost:3000) to see the marketing homepage. Authenticated routes live under `/dashboard` and rely on Supabase sessions; custom sign-in/sign-up screens are available under `/sign-in` and `/sign-up`.

### Key Paths

- `app/page.tsx` – landing page with CTA
- `app/(dashboard)/dashboard` – authenticated dashboard and CRUD scaffolding
- `app/api/messages/route.ts` – placeholder endpoint for AI message ingestion
- Configure your Supabase project (database tables, RLS policies, SQL migrations) to power workspaces and agents
- Connect the API route to your LLM runtime or queue
- Replace mock data with real Supabase queries and mutations
- Extend UI components via the Shadcn pattern in `components/ui`
- Configure observability and background job processing as needed

Atom is ready for you to iterate on AI-first workflows with guardrails and collaboration built in. Happy building!
