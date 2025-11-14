"use client";

import { motion } from "framer-motion";
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
    <div className="space-y-8">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Message streams
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Observe AI conversations across your workspaces and connect to downstream tooling.
        </p>
      </motion.header>

      <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">API status</CardTitle>
          <CardDescription className="mt-1">
            Atom exposes a single endpoint for streaming AI messages into your workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-xl border border-dashed border-border/50 bg-muted/20 px-4 py-3">
            <p className="text-sm font-medium text-foreground">
              `POST /api/messages`
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Send messages with workspace, agent, and role metadata to persist conversation history.
            </p>
          </div>
          <Separator className="bg-border/50" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>
              Ready to connect? View the API reference and SDK examples in our docs.
            </p>
            <Button variant="outline" size="sm" className="rounded-lg border-border/50" asChild>
              <Link href="https://docs.atom.app">View docs</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
