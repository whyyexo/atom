"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type WorkspaceOnboardingFormProps = {
  email: string;
  initialName?: string | null;
};

type SlugStatus = "idle" | "checking" | "available" | "unavailable" | "error";

function normalizeSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9- ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function WorkspaceOnboardingForm({ email, initialName }: WorkspaceOnboardingFormProps) {
  const router = useRouter();
  const [name, setName] = useState(initialName?.trim() ?? "");
  const [slug, setSlug] = useState(() => {
    const seed = initialName?.trim() || email.split("@")[0] || "workspace";
    return normalizeSlug(seed);
  });
  const [slugDirty, setSlugDirty] = useState(false);
  const [slugStatus, setSlugStatus] = useState<SlugStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = useMemo(() => "atom.app/workspace/", []);

  useEffect(() => {
    if (slugDirty) return;
    if (!name.trim()) return;
    const normalized = normalizeSlug(name);
    if (!normalized) return;
    setSlug(normalized);
  }, [name, slugDirty]);

  useEffect(() => {
    if (!slug) {
      setSlugStatus("idle");
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      setSlugStatus("checking");
      try {
        const response = await fetch(`/api/workspaces/check?slug=${slug}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          setSlugStatus("error");
          return;
        }

        const data = (await response.json()) as { available: boolean };
        setSlugStatus(data.available ? "available" : "unavailable");
      } catch (checkError) {
        if (controller.signal.aborted) return;
        console.error(checkError);
        setSlugStatus("error");
      }
    }, 350);

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [slug]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!name.trim() || !slug) {
      setError("Please provide both a name and workspace URL.");
      return;
    }

    if (slugStatus === "unavailable") {
      setError("This workspace URL is already in use.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/workspaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, slug }),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "Unable to create workspace.");
      }

      router.replace("/dashboard");
      router.refresh();
    } catch (submitError) {
      console.error(submitError);
      setError(
        submitError instanceof Error
          ? submitError.message
          : "We couldn't create your workspace. Please try again.",
      );
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.14),_transparent_60%)] px-4 py-16">
      <Card className="w-full max-w-xl border-border/60 bg-background/95 shadow-2xl backdrop-blur-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-semibold tracking-tight text-white">
            Name your workspace
          </CardTitle>
          <CardDescription className="text-sm text-white/60">
            Every project lives inside a workspace. You can invite teammates later.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="workspace-name">Workspace name</Label>
              <Input
                id="workspace-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ex. Product Ops"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workspace-slug">Workspace URL</Label>
              <div className="flex rounded-md border border-input bg-background">
                <span className="flex items-center whitespace-nowrap px-3 text-sm text-muted-foreground">
                  {baseUrl}
                </span>
                <Input
                  id="workspace-slug"
                  value={slug}
                  onChange={(event) => {
                    setSlugDirty(true);
                    setSlug(normalizeSlug(event.target.value));
                  }}
                  className="flex-1 rounded-l-none border-0"
                  placeholder="your-team"
                  required
                />
              </div>
              {slugStatus === "checking" ? (
                <p className="text-xs text-muted-foreground">Checking availability...</p>
              ) : null}
              {slugStatus === "available" ? (
                <p className="text-xs text-emerald-400">This URL is available.</p>
              ) : null}
              {slugStatus === "unavailable" ? (
                <p className="text-xs text-destructive">This URL is already in use.</p>
              ) : null}
              {slugStatus === "error" ? (
                <p className="text-xs text-destructive">
                  We couldn't verify availability. Please try again.
                </p>
              ) : null}
            </div>
            {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}
            <Button
              type="submit"
              className="w-full"
              disabled={loading || slugStatus === "checking" || slugStatus === "unavailable"}
            >
              {loading ? "Creating workspace..." : "Create workspace"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


