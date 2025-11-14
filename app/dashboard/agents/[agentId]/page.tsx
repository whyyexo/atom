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

const agentIndex: Record<
  string,
  {
    name: string;
    workspace: string;
    model: string;
    status: string;
    description: string;
    latency: string;
    throughput: string;
  }
> = {
  "agent-lifecycle": {
    name: "Lifecycle Navigator",
    workspace: "Growth Analytics",
    model: "OpenAI gpt-4o-mini",
    status: "Active",
    description:
      "Partners with product and growth teams to orchestrate lifecycle campaigns and experiment backlogs.",
    latency: "680ms p95",
    throughput: "3.4K messages / day",
  },
  "agent-support": {
    name: "Support Copilot",
    workspace: "Support Automation",
    model: "Anthropic Claude 3.5 Sonnet",
    status: "Training",
    description:
      "Augments support agents to triage tickets, surface knowledge, and draft responses with guardrails.",
    latency: "1.1s p95",
    throughput: "9.8K messages / day",
  },
  "agent-compliance": {
    name: "Policy Review",
    workspace: "Compliance Review",
    model: "OpenAI gpt-4.1",
    status: "Active",
    description:
      "Assists legal teams with policy reviews, risk classification, and escalation workflows.",
    latency: "850ms p95",
    throughput: "1.2K messages / day",
  },
};

export default function AgentDetailPage({
  params,
}: {
  params: { agentId: string };
}) {
  const agent = agentIndex[params.agentId];

  if (!agent) {
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
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">{agent.name}</h1>
            <Badge variant="secondary" className="rounded-full border border-border/50">{agent.status}</Badge>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{agent.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" className="rounded-lg border-border/50">Preview conversations</Button>
          <Button className="rounded-lg">Deploy update</Button>
        </div>
      </motion.header>

      <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Agent overview</CardTitle>
          <CardDescription className="mt-1">
            Track key metrics to keep your agent performant and reliable.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border/50 bg-muted/20 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Workspace</p>
            <p className="mt-2 text-lg font-semibold text-foreground">{agent.workspace}</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-muted/20 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Model</p>
            <p className="mt-2 text-lg font-semibold text-foreground">{agent.model}</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-muted/20 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Latency</p>
            <p className="mt-2 text-lg font-semibold text-foreground">{agent.latency}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Throughput {agent.throughput}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Message history</CardTitle>
          <CardDescription className="mt-1">
            Snapshot of recent message exchanges handled by this agent.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: "Escalation flagged to compliance reviewer",
              detail: "High-confidence risk classification with exceed threshold score.",
            },
            {
              title: "Customer retention strategy drafted",
              detail: "Agent synthesized cohort analysis into action plan.",
            },
            {
              title: "Ticket #14288 resolved within SLA",
              detail: "Agent autopilot composed response using knowledge base articles.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-dashed border-border/50 bg-muted/10 p-4"
            >
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
          <Separator className="bg-border/50" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Connect additional tools via `POST /api/messages` using the agent ID.
            </span>
            <Button variant="secondary" size="sm" className="rounded-lg">
              Attach tools
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
