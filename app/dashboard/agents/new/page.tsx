"use client";

import { motion } from "framer-motion";
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
import { Select } from "@/components/ui/select";

export default function NewAgentPage() {
  return (
    <div className="space-y-8">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Create agent</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Configure the base settings for your AI agent. You can attach tools and data sources after creation.
          </p>
        </div>
        <Button variant="ghost" className="rounded-lg" asChild>
          <Link href="/dashboard/agents">Cancel</Link>
        </Button>
      </motion.header>

      <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Agent configuration</CardTitle>
          <CardDescription className="mt-1">
            Set the initial persona, capabilities, and guardrails for this agent.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm">Display name</Label>
            <Input id="name" placeholder="Lifecycle Navigator" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="workspace" className="text-sm">Workspace</Label>
            <Select
              placeholder="Select workspace"
              options={["Growth Analytics", "Support Automation", "Compliance Review"]}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="model" className="text-sm">Model</Label>
            <Select
              placeholder="Select model"
              options={["OpenAI gpt-4o-mini", "Anthropic Claude 3.5 Sonnet", "Google Gemini 2.0"]}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="instructions" className="text-sm">System instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Describe the agent's tone, guardrails, and responsibilities."
              className="min-h-[120px]"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="visibility" className="text-sm">Visibility</Label>
            <Select
              placeholder="Select visibility"
              options={["Workspace members", "Entire organization", "Private"]}
            />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-3">
          <Button variant="outline" className="rounded-lg border-border/50" asChild>
            <Link href="/dashboard/agents">Back</Link>
          </Button>
          <Button type="submit" className="rounded-lg">Create agent</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
