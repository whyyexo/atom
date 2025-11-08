import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewAgentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Create agent</h1>
          <p className="text-sm text-muted-foreground">
            Configure the base settings for your AI agent. You can attach tools and data sources after creation.
          </p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/dashboard/agents">Cancel</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Agent configuration</CardTitle>
          <CardDescription>
            Set the initial persona, capabilities, and guardrails for this agent.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Display name</Label>
            <Input id="name" placeholder="Lifecycle Navigator" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="workspace">Workspace</Label>
            <select
              id="workspace"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option>Growth Analytics</option>
              <option>Support Automation</option>
              <option>Compliance Review</option>
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="model">Model</Label>
            <select
              id="model"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              defaultValue="gpt-4o-mini"
            >
              <option value="gpt-4o-mini">OpenAI gpt-4o-mini</option>
              <option value="claude-3.5-sonnet">Anthropic Claude 3.5 Sonnet</option>
              <option value="google-gemini-2.0">Google Gemini 2.0</option>
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="instructions">System instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Describe the agent's tone, guardrails, and responsibilities."
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="visibility">Visibility</Label>
            <select
              id="visibility"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              defaultValue="workspace"
            >
              <option value="workspace">Workspace members</option>
              <option value="organization">Entire organization</option>
              <option value="private">Private</option>
            </select>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-3">
          <Button variant="outline" asChild>
            <Link href="/dashboard/agents">Back</Link>
          </Button>
          <Button type="submit">Create agent</Button>
        </CardFooter>
      </Card>
    </div>
  );
}


