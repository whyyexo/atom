import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Message streams</h1>
        <p className="text-sm text-muted-foreground">
          Observe AI conversations across your workspaces and connect to downstream tooling.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>API status</CardTitle>
          <CardDescription>
            Atom exposes a single endpoint for streaming AI messages into your workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-dashed border-border/80 bg-card px-4 py-3">
            <p className="text-sm font-medium text-foreground">
              `POST /api/messages`
            </p>
            <p className="text-xs text-muted-foreground">
              Send messages with workspace, agent, and role metadata to persist conversation history.
            </p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>
              Ready to connect? View the API reference and SDK examples in our docs.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://docs.atom.app">View docs</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


