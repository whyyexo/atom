import { Plus, Settings } from "lucide-react";
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

const mockWorkspaces = [
  {
    id: "ws_analytics",
    name: "Growth Analytics",
    members: 12,
    agents: 4,
    status: "Live",
  },
  {
    id: "ws_support",
    name: "Support Automation",
    members: 28,
    agents: 7,
    status: "Pilot",
  },
  {
    id: "ws_compliance",
    name: "Compliance Review",
    members: 9,
    agents: 3,
    status: "Private",
  },
];

export default function WorkspaceListPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Workspaces</h1>
          <p className="text-sm text-muted-foreground">
            Create and manage collaborative spaces for your teams.
          </p>
        </div>
        <Button size="lg" asChild>
          <Link href="/dashboard/workspaces/new">
            <Plus className="mr-2 h-4 w-4" />
            New workspace
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Workspace directory</CardTitle>
            <CardDescription>
              Overview of all workspaces and their current activity.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {mockWorkspaces.map((workspace) => (
              <Link
                key={workspace.id}
                href={`/dashboard/workspaces/${workspace.id}`}
                className="flex items-center justify-between rounded-lg border border-border/80 bg-card/80 px-4 py-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                    {workspace.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 3)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {workspace.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {workspace.members} members · {workspace.agents} agents
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{workspace.status}</Badge>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
          <Separator />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Workspaces are mapped to your billing tier. Need more seats?
            </span>
            <Button variant="outline" size="sm">
              Manage billing
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


