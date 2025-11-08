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
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">{agent.name}</h1>
            <Badge variant="secondary">{agent.status}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{agent.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Preview conversations</Button>
          <Button>Deploy update</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Agent overview</CardTitle>
          <CardDescription>
            Track key metrics to keep your agent performant and reliable.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border/80 bg-card p-4">
            <p className="text-xs uppercase text-muted-foreground">Workspace</p>
            <p className="mt-2 text-lg font-semibold">{agent.workspace}</p>
          </div>
          <div className="rounded-lg border border-border/80 bg-card p-4">
            <p className="text-xs uppercase text-muted-foreground">Model</p>
            <p className="mt-2 text-lg font-semibold">{agent.model}</p>
          </div>
          <div className="rounded-lg border border-border/80 bg-card p-4">
            <p className="text-xs uppercase text-muted-foreground">Latency</p>
            <p className="mt-2 text-lg font-semibold">{agent.latency}</p>
            <p className="text-xs text-muted-foreground">
              Throughput {agent.throughput}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Message history</CardTitle>
          <CardDescription>
            Snapshot of recent message exchanges handled by this agent.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-dashed border-border/80 p-4"
            >
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </div>
          ))}
          <Separator />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Connect additional tools via `POST /api/messages` using the agent ID.
            </span>
            <Button variant="secondary" size="sm">
              Attach tools
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


