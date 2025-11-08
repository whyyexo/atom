import { ArrowRight, Bot, MessagesSquare, Users } from "lucide-react";
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

const stats = [
  {
    label: "Active workspaces",
    value: 3,
    change: "+1 this week",
    icon: Users,
  },
  {
    label: "Agents deployed",
    value: 9,
    change: "+4 this week",
    icon: Bot,
  },
  {
    label: "Messages processed",
    value: "12.4K",
    change: "+18% vs last week",
    icon: MessagesSquare,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Badge variant="outline">Workspace Overview</Badge>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Welcome back to Atom
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your workspaces, iterate on agents, and monitor message streams.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/dashboard/workspaces/new">
              Create workspace <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-semibold">{item.value}</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
          <CardDescription>
            Live feed of what&apos;s happening across your agents.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              title: "Lifecycle Navigator handled 248 messages",
              description: "Workspace: Product Growth • Agent latency 720ms",
            },
            {
              title: "Support Copilot deployed with new retrieval pipeline",
              description:
                "Workspace: Customer Success • Push by rachel@atom.app",
            },
            {
              title: "Policy Review Agent flagged 3 escalations",
              description:
                "Workspace: Compliance • Escalations sent to review channel",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-dashed border-border/80 p-4"
            >
              <p className="text-sm font-semibold text-foreground">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
          <Separator />
          <div className="flex items-center justify-between text-sm">
            <p className="text-muted-foreground">
              Need deeper analytics? Pipe events into your data warehouse.
            </p>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/dashboard/settings">View integrations</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


