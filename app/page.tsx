import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    title: "Multiply your builders",
    description:
      "Spin up AI agents with guardrails, fine-tuned to your workflows in minutes—not sprint cycles.",
  },
  {
    title: "Collaborate in real-time",
    description:
      "Invite teammates, version prompts, and share conversation histories in a centralized workspace.",
  },
  {
    title: "Connect your stack",
    description:
      "Bring in external APIs, knowledge bases, and data sources with pre-built connectors and webhooks.",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-background to-accent/20">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            ◎
          </span>
          <span>Atom</span>
        </Link>
        <div className="flex items-center gap-3 text-sm font-medium">
          <Link
            href="https://docs.atom.app"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/sign-in"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Button asChild>
            <Link href="/sign-up">Start your workspace</Link>
          </Button>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 pb-24 pt-10 md:pt-16">
        <section className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="space-y-8">
            <Badge variant="secondary" className="border border-border">
              AI workspace OS
            </Badge>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Build, launch, and scale AI copilots from one workspace.
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Atom orchestrates your prompts, agents, and conversations so you
                can focus on delivering AI-first customer experiences across
                every team.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/sign-up">Start your workspace</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/sign-in">View demo</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>Deploy to production in hours</span>
              <Separator orientation="vertical" className="hidden h-6 md:block" />
              <span>Enterprise-ready guardrails</span>
              <Separator orientation="vertical" className="hidden h-6 md:block" />
              <span>Unlimited agents per workspace</span>
            </div>
          </div>
          <Card className="blur-border relative overflow-hidden border-primary/30 bg-background/70 backdrop-blur-md">
            <CardContent className="space-y-6 p-8">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Workflow preview
                </p>
                <h3 className="text-xl font-semibold">Atom Agent Builder</h3>
                <p className="text-sm text-muted-foreground">
                  Configure agents, assign data sources, and test conversations in
                  one flow.
                </p>
              </div>
              <div className="space-y-4 rounded-lg border border-dashed border-primary/20 bg-primary/5 p-5">
                <div className="flex items-center justify-between text-xs uppercase text-muted-foreground">
                  <span>Workspace</span>
                  <span className="text-foreground">Product Growth</span>
                </div>
                <Separator />
                <div className="space-y-3">
                  <div className="rounded-md bg-card p-3 shadow-sm">
                    <p className="text-sm font-semibold">Agent</p>
                    <p className="text-xs text-muted-foreground">
                      “Lifecycle Navigator” helps PMMs triage feature requests.
                    </p>
                  </div>
                  <div className="rounded-md bg-card p-3 shadow-sm">
                    <p className="text-sm font-semibold">Knowledge sources</p>
                    <p className="text-xs text-muted-foreground">
                      Linear tickets · Notion docs · Postgres segment tables
                    </p>
                  </div>
                  <div className="rounded-md bg-card p-3 shadow-sm">
                    <p className="text-sm font-semibold">Next step</p>
                    <p className="text-xs text-muted-foreground">
                      Invite teammates to collaborate and ship updates faster.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/sign-up">Start your workspace</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
        <section className="grid gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="space-y-3 p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by teams shipping AI experiences
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
            <span>Orbital</span>
            <span>Helix Labs</span>
            <span>Northwind AI</span>
            <span>Kepler</span>
            <span>Momentum</span>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/80 bg-background py-6">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Atom Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-foreground" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-foreground" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
