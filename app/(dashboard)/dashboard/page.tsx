"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, Bot, Compass, LineChart, MessagesSquare, Shield } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const statCards = [
  {
    title: "Active workspaces",
    value: "8",
    delta: "+2 this week",
    icon: Compass,
  },
  {
    title: "Deployed agents",
    value: "26",
    delta: "+6 vs last sprint",
    icon: Bot,
  },
  {
    title: "Messages processed",
    value: "48.9K",
    delta: "+18%",
    icon: MessagesSquare,
  },
];

const performance = [
  {
    title: "Customer Success",
    description: "Support Copilot resolved 92% of tickets autonomously.",
    trend: "Up 12% since last week",
  },
  {
    title: "Growth experiments",
    description: "Acquisition agents launched 14 multi-channel campaigns.",
    trend: "Stable conversion velocity",
  },
  {
    title: "Risk & compliance",
    description: "Policy Scout flagged 5 anomalies and escalated 2 for review.",
    trend: "Zero SLA breaches",
  },
];

const recentActivity = [
  {
    actor: "Rachel Flores",
    action: "Pushed new retrieval pipeline to Support Copilot",
    time: "12 minutes ago",
  },
  {
    actor: "Lifecycle Navigator",
    action: "Segmented 184 churn-risk customers and drafted outreach",
    time: "38 minutes ago",
  },
  {
    actor: "Orbit Pilot",
    action: "Synced lead intelligence into HubSpot • Sequence 2.1",
    time: "2 hours ago",
  },
  {
    actor: "Policy Scout",
    action: "Escalated 3 transactions to compliance review queue",
    time: "4 hours ago",
  },
];

const quickLinks = [
  {
    title: "Launch workspace",
    description: "Spin up a fresh workspace with guardrails and routing.",
    href: "/dashboard/workspaces",
  },
  {
    title: "Create agent",
    description: "Compose, simulate, and deploy a new workflow agent.",
    href: "/dashboard/agents",
  },
  {
    title: "Manage settings",
    description: "Rotate API keys, manage billing, and update preferences.",
    href: "/dashboard/settings",
  },
];

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="space-y-10"
    >
      <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Badge variant="secondary" className="h-6 w-fit rounded-full border border-border/70 px-3">
            Weekly pulse
          </Badge>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              This week&apos;s operating snapshot
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground">
              Track agent throughput, collaboration signals, and rollout velocity across every workspace you manage.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="outline" className="rounded-full border-border/70">
            <Link href="/dashboard/workspaces">Workspace directory</Link>
          </Button>
          <Button asChild className="rounded-full px-6">
            <Link href="/dashboard/agents">
              Ship new agent
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {statCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.25 }}
          >
            <Card className="overflow-hidden rounded-3xl border-border/70 bg-gradient-to-br from-card to-card/80 shadow-lg shadow-primary/5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <card.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {card.value}
                </p>
                <p className="mt-2 text-xs font-medium text-lime-400/90">{card.delta}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="rounded-3xl border-border/60 bg-card/95 shadow-md shadow-primary/5">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">Workspace performance</CardTitle>
                <CardDescription>
                  Momentum across the teams orchestrating agents this week.
                </CardDescription>
              </div>
              <Badge variant="secondary">Week 42</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {performance.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/60 bg-muted/20 p-4 transition hover:border-primary/60 hover:bg-muted/40"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <span className="text-xs text-emerald-400/90">{item.trend}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08 }}
        >
          <Card className="rounded-3xl border-border/60 bg-card/95 shadow-md shadow-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Activity className="h-4 w-4 text-primary" />
                Live activity
              </CardTitle>
              <CardDescription>Recently executed workflows across your teams.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {recentActivity.map((entry, index) => (
                <motion.div
                  key={`${entry.actor}-${entry.time}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-border/60 bg-muted/30 p-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">{entry.actor}</p>
                    <span className="text-xs text-muted-foreground">{entry.time}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{entry.action}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="rounded-3xl border-border/60 bg-card/95 shadow-md shadow-primary/5 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Agent rollout roadmap</CardTitle>
              <CardDescription>Where your most impactful automation launches live.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full">
              View roadmap
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Atlas Copilot",
                status: "QA & evaluation",
                owner: "Product Intelligence",
              },
              {
                name: "Insight Concierge",
                status: "Live in Growth workspace",
                owner: "Lifecycle Strategy",
              },
              {
                name: "Policy Scout",
                status: "Scaling to APAC markets",
                owner: "Risk & Compliance",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/20 px-4 py-3 transition hover:border-primary/60 hover:bg-muted/40"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">{agent.name}</p>
                  <p className="text-xs text-muted-foreground">{agent.owner}</p>
                </div>
                <Badge variant="outline" className="rounded-full border-border/70 text-xs text-muted-foreground">
                  {agent.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="flex h-full flex-col rounded-3xl border-border/60 bg-card/95 shadow-md shadow-primary/5">
          <CardHeader>
            <CardTitle className="text-base">System health</CardTitle>
            <CardDescription>Runbook signals for the last 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-4">
            {[
              {
                label: "Auth surface",
                status: "Healthy",
                icon: Shield,
                tone: "text-emerald-400",
              },
              {
                label: "Message queue",
                status: "65ms p95",
                icon: LineChart,
                tone: "text-blue-400",
              },
              {
                label: "Research API",
                status: "Degraded (retrying)",
                icon: Activity,
                tone: "text-amber-400",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/30 px-3 py-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/60">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <span className={cn("text-xs", item.tone)}>{item.status}</span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        {quickLinks.map((link) => (
          <Link key={link.title} href={link.href}>
            <Card className="group rounded-3xl border-border/60 bg-muted/20 p-5 transition hover:-translate-y-1 hover:border-primary/60 hover:bg-muted/40 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{link.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{link.description}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
              </div>
            </Card>
          </Link>
        ))}
      </section>
    </motion.div>
  );
}

