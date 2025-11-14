"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, Bot, Compass, LineChart, MessagesSquare, Shield, TrendingUp } from "lucide-react";
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
    trend: "up",
  },
  {
    title: "Deployed agents",
    value: "26",
    delta: "+6 vs last sprint",
    icon: Bot,
    trend: "up",
  },
  {
    title: "Messages processed",
    value: "48.9K",
    delta: "+18%",
    icon: MessagesSquare,
    trend: "up",
  },
];

const performance = [
  {
    title: "Customer Success",
    description: "Support Copilot resolved 92% of tickets autonomously.",
    trend: "Up 12% since last week",
    status: "healthy",
  },
  {
    title: "Growth experiments",
    description: "Acquisition agents launched 14 multi-channel campaigns.",
    trend: "Stable conversion velocity",
    status: "stable",
  },
  {
    title: "Risk & compliance",
    description: "Policy Scout flagged 5 anomalies and escalated 2 for review.",
    trend: "Zero SLA breaches",
    status: "healthy",
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
    href: "/dashboard/workspaces/new",
    icon: Compass,
  },
  {
    title: "Create agent",
    description: "Compose, simulate, and deploy a new workflow agent.",
    href: "/dashboard/agents/new",
    icon: Bot,
  },
  {
    title: "Manage settings",
    description: "Rotate API keys, manage billing, and update preferences.",
    href: "/dashboard/settings",
    icon: Shield,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div className="space-y-2">
          <Badge variant="secondary" className="h-6 w-fit rounded-full border border-border/50 px-3 text-xs">
            Weekly pulse
          </Badge>
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              This week&apos;s operating snapshot
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Track agent throughput, collaboration signals, and rollout velocity across every workspace you manage.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-lg border-border/50">
            <Link href="/dashboard/workspaces">Workspace directory</Link>
          </Button>
          <Button asChild className="rounded-lg">
            <Link href="/dashboard/agents/new">
              Ship new agent
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              <Card className="group relative overflow-hidden rounded-2xl border-border/50 bg-card/50 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-semibold tracking-tight text-foreground">
                    {card.value}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                    <p className="text-xs font-medium text-emerald-500">{card.delta}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        {/* Workspace Performance */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold">Workspace performance</CardTitle>
                <CardDescription className="mt-1">
                  Momentum across the teams orchestrating agents this week.
                </CardDescription>
              </div>
              <Badge variant="secondary" className="rounded-full border border-border/50 px-3 text-xs">
                Week 42
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              {performance.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  className="group rounded-xl border border-border/50 bg-muted/30 p-4 transition-all hover:border-primary/30 hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <Badge
                      variant="outline"
                      className={cn(
                        "rounded-full border border-border/50 text-xs",
                        item.status === "healthy" && "text-emerald-500",
                        item.status === "stable" && "text-muted-foreground",
                      )}
                    >
                      {item.trend}
                    </Badge>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Live Activity */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.15 }}
        >
          <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Activity className="h-4 w-4 text-primary" />
                Live activity
              </CardTitle>
              <CardDescription>Recently executed workflows across your teams.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((entry, index) => (
                <motion.div
                  key={`${entry.actor}-${entry.time}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="rounded-xl border border-border/50 bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">{entry.actor}</p>
                    <span className="text-xs text-muted-foreground">{entry.time}</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{entry.action}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Agent Roadmap & System Health */}
      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">Agent rollout roadmap</CardTitle>
              <CardDescription>Where your most impactful automation launches live.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="rounded-lg">
              View roadmap
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
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
            ].map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.05 }}
                className="flex items-center justify-between rounded-xl border border-border/50 bg-muted/30 px-4 py-3 transition-all hover:border-primary/30 hover:bg-muted/50"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">{agent.name}</p>
                  <p className="text-xs text-muted-foreground">{agent.owner}</p>
                </div>
                <Badge variant="outline" className="rounded-full border border-border/50 text-xs text-muted-foreground">
                  {agent.status}
                </Badge>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <Card className="flex h-full flex-col rounded-2xl border-border/50 bg-card/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold">System health</CardTitle>
            <CardDescription>Runbook signals for the last 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-3">
            {[
              {
                label: "Auth surface",
                status: "Healthy",
                icon: Shield,
                tone: "text-emerald-500",
              },
              {
                label: "Message queue",
                status: "65ms p95",
                icon: LineChart,
                tone: "text-blue-500",
              },
              {
                label: "Research API",
                status: "Degraded (retrying)",
                icon: Activity,
                tone: "text-amber-500",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 px-3 py-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <span className={cn("text-xs", item.tone)}>{item.status}</span>
                  </div>
                </motion.div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        {quickLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + index * 0.05 }}
            >
              <Link href={link.href}>
                <Card className="group h-full rounded-2xl border-border/50 bg-card/50 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{link.title}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{link.description}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

