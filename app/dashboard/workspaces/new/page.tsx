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

export default function NewWorkspacePage() {
  return (
    <div className="space-y-8">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Create workspace</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Define a collaborative space for teams to build AI workflows together.
          </p>
        </div>
        <Button variant="ghost" className="rounded-lg" asChild>
          <Link href="/dashboard/workspaces">Cancel</Link>
        </Button>
      </motion.header>

      <Card className="rounded-2xl border-border/50 bg-card/50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Workspace details</CardTitle>
          <CardDescription className="mt-1">
            These details will help teammates understand the purpose of this workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm">Name</Label>
            <Input
              id="name"
              placeholder="Ex. Customer Support Excellence"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="slug" className="text-sm">Slug</Label>
            <Input
              id="slug"
              placeholder="support-excellence"
              required
              pattern="[a-z0-9-]+"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-sm">Description</Label>
            <Textarea
              id="description"
              placeholder="Explain how this workspace will be used and who should join."
              className="min-h-[100px]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="visibility" className="text-sm">Visibility</Label>
            <Select
              id="visibility"
              placeholder="Select visibility"
              options={["Private (invite only)", "Teams (org members)", "Public (org wide)"]}
            />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-3">
          <Button variant="outline" className="rounded-lg border-border/50" asChild>
            <Link href="/dashboard/workspaces">Back</Link>
          </Button>
          <Button type="submit" className="rounded-lg">Create workspace</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
