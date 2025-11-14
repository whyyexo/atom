"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, CalendarRange, Filter, Link2, Plus, Search, Settings } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal, ModalContent, ModalTrigger } from "@/components/ui/modal";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

const workspaces = [
  {
    id: "ws_growth",
    name: "Growth Acceleration",
    agents: 9,
    members: 18,
    status: "Live",
    description: "Experiment velocity, lifecycle orchestration, and channel automation.",
    updatedAt: "14 minutes ago",
  },
  {
    id: "ws_support",
    name: "Customer Success",
    agents: 11,
    members: 32,
    status: "Live",
    description: "Tier-1 support triage, deflection, and escalation workflows.",
    updatedAt: "29 minutes ago",
  },
  {
    id: "ws_compliance",
    name: "Risk & Compliance",
    agents: 4,
    members: 11,
    status: "Pilot",
    description: "Policy classification and anomaly detection with human-in-the-loop review.",
    updatedAt: "1 hour ago",
  },
  {
    id: "ws_research",
    name: "Product Research",
    agents: 6,
    members: 9,
    status: "Private",
    description: "Continuous discovery agents, synthesis, and executive briefings.",
    updatedAt: "3 hours ago",
  },
];

const filters = ["All", "Live", "Pilot", "Private"];

export default function WorkspacesPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filteredWorkspaces = useMemo(() => {
    return workspaces.filter((workspace) => {
      const matchesQuery = workspace.name.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = selectedFilter === "All" || workspace.status === selectedFilter;
      return matchesQuery && matchesStatus;
    });
  }, [selectedFilter, query]);

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
            Workspace operating system
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Manage agent fleets, workspace guardrails, and collaboration intelligence with Linear-grade precision.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-lg border-border/50">
            <CalendarRange className="mr-2 h-4 w-4" />
            Activity log
          </Button>
          <Modal>
            <ModalTrigger asChild>
              <Button className="rounded-lg">
                <Plus className="mr-2 h-4 w-4" />
                New workspace
              </Button>
            </ModalTrigger>
            <ModalContent
              title="Create workspace"
              description="Spin up a new collaboration surface with governance baked in."
              footer={
                <>
                  <Button variant="ghost">Cancel</Button>
                  <Button>Create workspace</Button>
                </>
              }
            >
              <Input placeholder="Workspace name" />
              <Textarea placeholder="Describe the purpose and who should join..." className="min-h-[120px]" />
              <div className="grid gap-3 sm:grid-cols-2">
                <Select placeholder="Visibility" options={["Live", "Pilot", "Private"]} />
                <Select placeholder="Region" options={["US", "EU", "APAC"]} />
              </div>
            </ModalContent>
          </Modal>
        </div>
      </motion.header>

      <section className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          {filters.map((filter) => (
            <Button
              key={filter}
              size="sm"
              variant={filter === selectedFilter ? "default" : "ghost"}
              className={filter === selectedFilter ? "rounded-lg" : "rounded-lg"}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="flex w-full items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-3 py-2 md:w-72">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search workspaces"
            className="h-8 border-none bg-transparent p-0 text-sm focus-visible:ring-0"
          />
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {filteredWorkspaces.length === 0 ? (
          <Card className="rounded-2xl border-border/50 bg-muted/20 p-10 text-center text-sm text-muted-foreground">
            No workspaces found. Adjust filters or create a new workspace.
          </Card>
        ) : (
          filteredWorkspaces.map((workspace, index) => (
            <motion.div
              key={workspace.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
                    {workspace.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 3)
                      .toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">{workspace.name}</h2>
                    <p className="text-xs text-muted-foreground">{workspace.updatedAt}</p>
                  </div>
                </div>
                <Badge variant="outline" className="rounded-full border border-border/50 text-xs text-muted-foreground">
                  {workspace.status}
                </Badge>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{workspace.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {workspace.members} members · {workspace.agents} agents deployed
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    asChild
                  >
                    <Link href={`/dashboard/workspaces/${workspace.id}`}>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl border-border/50 bg-card/50 p-6 shadow-sm">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-base font-semibold">Workspace capacity</CardTitle>
            <CardDescription className="mt-1">Monitor seats used vs. available across your organization.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Seats occupied</span>
              <span className="font-medium text-foreground">58 / 75</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-muted">
              <div className="h-full w-[78%] rounded-full bg-primary" />
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              Add-on seat packs available in Billing → Plans.
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-border/50 bg-card/50 p-6 shadow-sm">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-base font-semibold">Active integrations</CardTitle>
            <CardDescription className="mt-1">Connected data sources driving context for your agents.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 px-0">
            {["Linear", "Notion", "Postgres analytics", "Slack"].map((integration) => (
              <div
                key={integration}
                className="flex items-center justify-between rounded-xl border border-border/50 bg-background/80 px-3 py-2 text-sm text-muted-foreground"
              >
                {integration}
                <Badge variant="secondary" className="rounded-full border border-border/50 text-xs">
                  Connected
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-border/50 bg-card/50 p-6 shadow-sm">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-base font-semibold">Workspace blueprints</CardTitle>
            <CardDescription className="mt-1">Start faster with curated templates for common org functions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 px-0">
            {["Sales acceleration", "Incident command", "R&D insights"].map((blueprint) => (
              <div
                key={blueprint}
                className="flex items-center justify-between rounded-xl border border-border/50 bg-background/80 px-3 py-2 text-sm transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {blueprint}
                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary">
                  <Link2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="rounded-2xl border border-dashed border-border/50 bg-muted/10 p-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Workspace activity feed</p>
            <p className="text-xs text-muted-foreground">
              Streaming events to <span className="font-medium text-primary">api.atom.app/v1/events</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-24 rounded-lg" />
            <Button variant="outline" size="sm" className="rounded-lg border-border/50">
              Stream observer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
