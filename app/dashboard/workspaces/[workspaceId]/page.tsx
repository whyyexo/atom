"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const workspaceIndex: Record<
  string,
  {
    name: string;
    description: string;
    status: string;
    agents: number;
    members: number;
    createdAt: string;
  }
> = {
  "ws_growth": {
    name: "Growth Acceleration",
    description:
      "Experiment velocity, lifecycle orchestration, and channel automation.",
    status: "Live",
    agents: 9,
    members: 18,
    createdAt: "June 2, 2024",
  },
  "ws_support": {
    name: "Customer Success",
    description:
      "Tier-1 support triage, deflection, and escalation workflows.",
    status: "Live",
    agents: 11,
    members: 32,
    createdAt: "September 14, 2024",
  },
  "ws_compliance": {
    name: "Risk & Compliance",
    description:
      "Policy classification and anomaly detection with human-in-the-loop review.",
    status: "Pilot",
    agents: 4,
    members: 11,
    createdAt: "January 6, 2025",
  },
  "ws_analytics": {
    name: "Growth Analytics",
    description:
      "Tracks lifecycle health across the funnel and personalizes outreach cadences.",
    status: "Live",
    agents: 4,
    members: 12,
    createdAt: "June 2, 2024",
  },
  "ws_research": {
    name: "Product Research",
    description:
      "Continuous discovery agents, synthesis, and executive briefings.",
    status: "Private",
    agents: 6,
    members: 9,
    createdAt: "3 hours ago",
  },
};

export default function WorkspaceDetailPage({
  params,
}: {
  params: { workspaceId: string };
}) {
  const workspace = workspaceIndex[params.workspaceId];

  if (!workspace) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">{workspace.name}</h1>
            <Badge variant="secondary" className="rounded-full border border-border/50">{workspace.status}</Badge>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {workspace.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" className="rounded-lg border-border/50">Invite teammates</Button>
          <Button className="rounded-lg">Configure agents</Button>
        </div>
      </motion.header>

      <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Workspace summary</CardTitle>
          <CardDescription className="mt-1">
            Snapshot of workspace health across members and agents.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border/50 bg-muted/20 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Members</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">{workspace.members}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Active contributors in this workspace.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-muted/20 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Agents</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">{workspace.agents}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Deployed AI copilots serving this team.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-muted/20 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Created</p>
            <p className="mt-2 text-xl font-semibold text-foreground">
              {workspace.createdAt}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Governance audits pass: 100%
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent conversations</CardTitle>
          <CardDescription className="mt-1">
            Last 5 message threads captured across your workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              agent: "Lifecycle Navigator",
              summary: "Identified churn risk for Enterprise ACV accounts.",
            },
            {
              agent: "Support Copilot",
              summary:
                "Escalated recurring outage reports to Platform Reliability.",
            },
            {
              agent: "Trial Concierge",
              summary:
                "Launched onboarding workflow for 86 new trial signups.",
            },
          ].map((thread, index) => (
            <motion.div
              key={thread.agent}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between rounded-xl border border-dashed border-border/50 bg-muted/10 p-4"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{thread.agent}</p>
                <p className="mt-1 text-xs text-muted-foreground">{thread.summary}</p>
              </div>
              <Button variant="ghost" size="sm" className="rounded-lg">
                View thread
              </Button>
            </motion.div>
          ))}
          <Separator className="bg-border/50" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              API webhooks stream into `POST /api/messages`. Connect your LLM of choice.
            </span>
            <Button variant="secondary" size="sm" className="rounded-lg">
              Configure webhooks
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
