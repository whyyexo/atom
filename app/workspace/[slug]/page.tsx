import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

export default async function WorkspacePublicPage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase();

  const workspace = await prisma.workspace.findUnique({
    where: { slug },
    select: {
      name: true,
      slug: true,
      createdAt: true,
    },
  });

  if (!workspace) {
    notFound();
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6 py-24">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Workspace</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">{workspace.name}</h1>
        <p className="text-base text-white/70">
          {`atom.app/workspace/${workspace.slug}`} — collaborative home for this team.
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.7)] backdrop-blur">
        <div className="space-y-4 text-sm leading-6 text-white/70">
          <p>
            This workspace hasn&apos;t published a public homepage yet. Once they do, you&apos;ll see
            a collaborative overview of their agents, workflows, and shared resources.
          </p>
          <p>
            Interested in launching your own workspace? Join the waitlist at{" "}
            <a
              href="mailto:hello@atom.app"
              className="font-medium text-primary hover:underline"
            >
              hello@atom.app
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}


