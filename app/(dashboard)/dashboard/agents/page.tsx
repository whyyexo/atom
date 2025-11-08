import { Plus, Sparkles } from "lucide-react";
import Link from "next/link";

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

const mockAgents = [
  {
    id: "agent-lifecycle",
    name: "Lifecycle Navigator",
    workspace: "Growth Analytics",
    model: "gpt-4o-mini",
    status: "Active",
  },
  {
    id: "agent-support",
    name: "Support Copilot",
    workspace: "Support Automation",
    model: "claude-3.5-sonnet",
    status: "Training",
  },
  {
    id: "agent-compliance",
    name: "Policy Review",
    workspace: "Compliance Review",
    model: "gpt-4.1",
    status: "Active",
  },
];

export default function AgentListPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Agents</h1>
          <p className="text-sm text-muted-foreground">
            Manage the agents powering your AI workflows and automations.
          </p>
        </div>
        <Button size="lg" asChild>
          <Link href="/dashboard/agents/new">
            <Plus className="mr-2 h-4 w-4" />
            New agent
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Agent directory</CardTitle>
            <CardDescription>
              Every agent connected across your workspaces.
            </CardDescription>
          </div>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            Auto-versioning enabled
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {mockAgents.map((agent) => (
              <Link
                key={agent.id}
                href={`/dashboard/agents/${agent.id}`}
                className="flex items-center justify-between rounded-lg border border-border/80 bg-card px-4 py-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <div>
                  <p className="font-medium text-foreground">{agent.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Workspace: {agent.workspace} • Model: {agent.model}
                  </p>
                </div>
                <Badge
                  variant={agent.status === "Active" ? "default" : "secondary"}
                >
                  {agent.status}
                </Badge>
              </Link>
            ))}
          </div>
          <Separator />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Need help creating your first agent?</span>
            <Button variant="outline" size="sm">
              Launch guided builder
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


