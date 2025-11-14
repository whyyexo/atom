"use client";

import { motion } from "framer-motion";
import { Plus, Search, Sparkles, ArrowUpRight, Shield, Pencil, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal, ModalContent, ModalTrigger } from "@/components/ui/modal";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const agents = [
  {
    id: "agent-lifecycle",
    name: "Lifecycle Navigator",
    workspace: "Growth Acceleration",
    model: "gpt-4o-mini",
    status: "Active",
    latency: "820ms p95",
    retention: "+14%",
  },
  {
    id: "agent-support",
    name: "Support Copilot",
    workspace: "Customer Success",
    model: "claude-3.5-sonnet",
    status: "Pilot",
    latency: "540ms p95",
    retention: "+22%",
  },
  {
    id: "agent-compliance",
    name: "Policy Scout",
    workspace: "Risk & Compliance",
    model: "gpt-4.1",
    status: "Active",
    latency: "1.1s p95",
    retention: "SLA 100%",
  },
  {
    id: "agent-analytics",
    name: "Signal Synth",
    workspace: "Analytics Core",
    model: "gemini-1.5-pro",
    status: "In review",
    latency: "940ms p95",
    retention: "+9%",
  },
];

const statusTone: Record<string, string> = {
  Active: "bg-emerald-500/15 text-emerald-500 border-emerald-500/20",
  Pilot: "bg-amber-500/15 text-amber-500 border-amber-500/20",
  "In review": "bg-blue-500/15 text-blue-500 border-blue-500/20",
};

const models = ["gpt-4o-mini", "gpt-4.1", "claude-3.5-sonnet", "gemini-1.5-pro"];

export default function AgentsPage() {
  const [query, setQuery] = useState("");

  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => agent.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div className="space-y-8">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Agent control room
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Compose new copilots, monitor execution health, and ship updates with Linear-level precision.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-lg border-border/50">
            <Link href="/dashboard/settings">
              <Shield className="mr-2 h-4 w-4" />
              Access policies
            </Link>
          </Button>
          <Modal>
            <ModalTrigger asChild>
              <Button className="rounded-lg">
                <Plus className="mr-2 h-4 w-4" />
                New agent
              </Button>
            </ModalTrigger>
            <ModalContent
              title="Create a new agent"
              description="Define the persona, memory sources, and guardrails before publishing."
              footer={
                <>
                  <Button variant="ghost">Cancel</Button>
                  <Button>Create agent</Button>
                </>
              }
            >
              <Input placeholder="Agent name" />
              <Textarea placeholder="Describe the responsibility and tone for this agent..." className="min-h-[120px]" />
              <div className="grid gap-3 sm:grid-cols-2">
                <Select placeholder="Select workspace" options={["Growth Acceleration", "Customer Success", "Risk & Compliance"]} />
                <Select placeholder="Model" options={models} />
              </div>
            </ModalContent>
          </Modal>
        </div>
      </motion.header>

      <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
        <CardHeader className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Active agents</CardTitle>
            <CardDescription className="mt-1">
              View deployment status, latency, and core metrics for every workspace agent.
            </CardDescription>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
            <div className="relative flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-3 py-2">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search agents"
                className="h-8 border-none bg-transparent p-0 text-sm focus-visible:ring-0"
              />
            </div>
            <Badge variant="secondary" className="h-8 w-fit rounded-full border border-border/50 px-3 text-xs">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-primary" />
              Auto-versioning enabled
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="hidden grid-cols-12 items-center gap-4 rounded-xl border border-border/50 bg-muted/30 px-4 py-3 text-xs font-medium text-muted-foreground md:grid">
            <span className="col-span-3">Agent</span>
            <span className="col-span-2">Workspace</span>
            <span className="col-span-2">Model</span>
            <span className="col-span-2">Latency</span>
            <span className="col-span-2">Impact</span>
            <span className="col-span-1 text-right">Actions</span>
          </div>
          <div className="space-y-2">
            {filteredAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group rounded-xl border border-border/50 bg-muted/20 p-4 transition-all hover:border-primary/30 hover:bg-muted/40"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-3">
                    <p className="text-sm font-semibold text-foreground">{agent.name}</p>
                    <p className="text-xs text-muted-foreground">ID • {agent.id}</p>
                  </div>
                  <div className="flex items-center justify-between md:col-span-2 md:block">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Workspace</span>
                    <p className="text-sm text-foreground md:mt-1">{agent.workspace}</p>
                  </div>
                  <div className="flex items-center justify-between md:col-span-2 md:block">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Model</span>
                    <Badge variant="outline" className="mt-1 rounded-full border border-border/50 text-xs text-muted-foreground">
                      {agent.model}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between md:col-span-2 md:block">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Latency</span>
                    <p className="text-sm text-foreground md:mt-1">{agent.latency}</p>
                  </div>
                  <div className="flex items-center justify-between md:col-span-2 md:block">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Impact</span>
                    <p className="text-sm font-medium text-emerald-500 md:mt-1">{agent.retention}</p>
                  </div>
                  <div className="flex items-center justify-end gap-2 md:col-span-1">
                    <Badge
                      variant="outline"
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                        statusTone[agent.status] ?? "bg-muted text-muted-foreground border-border/50",
                      )}
                    >
                      {agent.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="hidden h-8 w-8 rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary md:flex"
                    >
                      <Link href={`/dashboard/agents/${agent.id}`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
