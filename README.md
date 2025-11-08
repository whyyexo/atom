## Atom – AI Workspace Platform

This repository contains the base structure for **Atom**, a SaaS platform built with the Next.js App Router. It ships with authentication, dashboard scaffolding, and Prisma models to make it easy to evolve into a production AI workspace experience.

### Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 + Shadcn-inspired UI primitives
- Prisma ORM targeting PostgreSQL

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Duplicate `.env.example` → `.env.local` (create the file) and set:

   - `DATABASE_URL` – PostgreSQL connection string

3. **Generate Prisma client**

   ```bash
   npx prisma generate
   ```

4. **Run database migrations**

   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

Visit [`http://localhost:3000`](http://localhost:3000) to see the marketing homepage. The dashboard lives under `/dashboard` and is accessible without authentication.

### Key Paths

- `app/page.tsx` – landing page with CTA
- `app/(dashboard)/dashboard` – authenticated dashboard and CRUD scaffolding
- `app/api/messages/route.ts` – placeholder endpoint for AI message ingestion
- `prisma/schema.prisma` – data model for users, workspaces, agents, and messages

### Next Steps

- Connect the API route to your LLM runtime or queue
- Replace mock data with real Prisma queries and mutations
- Extend UI components via the Shadcn pattern in `components/ui`
- Configure observability and background job processing as needed

Atom is ready for you to iterate on AI-first workflows with guardrails and collaboration built in. Happy building!
