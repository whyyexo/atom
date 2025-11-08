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
  "ws_analytics": {
    name: "Growth Analytics",
    description:
      "Tracks lifecycle health across the funnel and personalizes outreach cadences.",
    status: "Live",
    agents: 4,
    members: 12,
    createdAt: "June 2, 2024",
  },
  "ws_support": {
    name: "Support Automation",
    description:
      "Central place for automating tier-1 support with human-in-the-loop escalation.",
    status: "Pilot",
    agents: 7,
    members: 28,
    createdAt: "September 14, 2024",
  },
  "ws_compliance": {
    name: "Compliance Review",
    description:
      "Automates policy reviews and flags edge cases for legal and compliance teams.",
    status: "Private",
    agents: 3,
    members: 9,
    createdAt: "January 6, 2025",
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
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">{workspace.name}</h1>
            <Badge variant="secondary">{workspace.status}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {workspace.description}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Invite teammates</Button>
          <Button>Configure agents</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Workspace summary</CardTitle>
          <CardDescription>
            Snapshot of workspace health across members and agents.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border/80 bg-card p-4">
            <p className="text-xs uppercase text-muted-foreground">Members</p>
            <p className="mt-2 text-2xl font-semibold">{workspace.members}</p>
            <p className="text-xs text-muted-foreground">
              Active contributors in this workspace.
            </p>
          </div>
          <div className="rounded-lg border border-border/80 bg-card p-4">
            <p className="text-xs uppercase text-muted-foreground">Agents</p>
            <p className="mt-2 text-2xl font-semibold">{workspace.agents}</p>
            <p className="text-xs text-muted-foreground">
              Deployed AI copilots serving this team.
            </p>
          </div>
          <div className="rounded-lg border border-border/80 bg-card p-4">
            <p className="text-xs uppercase text-muted-foreground">Created</p>
            <p className="mt-2 text-xl font-semibold">
              {workspace.createdAt}
            </p>
            <p className="text-xs text-muted-foreground">
              Governance audits pass: 100%
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent conversations</CardTitle>
          <CardDescription>
            Last 5 message threads captured across your workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
          ].map((thread) => (
            <div
              key={thread.agent}
              className="rounded-lg border border-dashed border-border/80 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-foreground">{thread.agent}</p>
                <Button variant="ghost" size="sm">
                  View thread
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{thread.summary}</p>
            </div>
          ))}
          <Separator />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              API webhooks stream into `POST /api/messages`. Connect your LLM of choice.
            </span>
            <Button variant="secondary" size="sm">
              Configure webhooks
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


