"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, KeyRound, Lock, Monitor, Palette, ShieldCheck } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const apiKeys = [
  {
    label: "Publishable key",
    value: "pk_live_5a41c4e3c2...",
    lastRotated: "2 days ago",
  },
  {
    label: "Secret key",
    value: "sk_live_e72a12043f...",
    lastRotated: "Never",
  },
];

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [telemetryEnabled, setTelemetryEnabled] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="space-y-8"
    >
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Organization settings
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Control theme, access, and surface keys powering authenticated workflows. Changes apply immediately across
          every workspace.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <Card className="rounded-3xl border-border/60 bg-card/95 shadow-lg shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>User preferences</CardTitle>
              <CardDescription>Personalise how Atom behaves for you across the dashboard.</CardDescription>
            </div>
            <Badge variant="secondary" className="rounded-full border border-border/60">
              {theme === "dark" ? "Dark mode" : "Light mode"}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <Palette className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Theme</p>
                  <p className="text-xs text-muted-foreground">
                    Toggle between light and dark. We default to dark — Linear style.
                  </p>
                </div>
              </div>
              <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <Monitor className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Weekly digest</p>
                  <p className="text-xs text-muted-foreground">
                    Delivered every Monday at 09:00 UTC with agent performance rollups.
                  </p>
                </div>
              </div>
              <Switch checked={weeklyDigest} onCheckedChange={setWeeklyDigest} />
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Anonymised telemetry</p>
                  <p className="text-xs text-muted-foreground">
                    Help us improve agent orchestration insights with anonymised usage data.
                  </p>
                </div>
              </div>
              <Switch checked={telemetryEnabled} onCheckedChange={setTelemetryEnabled} />
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl border-border/60 bg-muted/20 p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-base text-foreground">Account details</CardTitle>
            <CardDescription>Update what others see when collaborating with you.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-0">
            <div className="grid gap-2">
              <Label htmlFor="display-name">Display name</Label>
              <Input id="display-name" placeholder="Jordan Reeves" defaultValue="Jordan Reeves" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" placeholder="Director, Automation" defaultValue="Director, Automation" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Short bio</Label>
              <Textarea id="bio" placeholder="Tell teammates how you collaborate…" className="min-h-[100px]" />
            </div>
            <Button variant="outline" className="rounded-full border-border/70">
              Save profile
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-3xl border-border/60 bg-card/95 shadow-lg shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>API credentials</CardTitle>
              <CardDescription>Rotate keys after rotating secrets or refreshing scopes.</CardDescription>
            </div>
            <Badge variant="outline" className="rounded-full border border-border/60 text-xs">
              v2 / tokens
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {apiKeys.map((key, index) => (
              <motion.div
                key={key.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-border/60 bg-muted/20 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{key.label}</p>
                    <p className="text-xs text-muted-foreground">Last rotated {key.lastRotated}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-3 rounded-xl border border-dashed border-border/70 bg-background/80 px-3 py-2 font-mono text-xs tracking-tight text-muted-foreground">
                  {key.value}
                </div>
                <div className="mt-3 flex items-center justify-end gap-2">
                  <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-foreground">
                    Rotate
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-red-400">
                    Revoke
                  </Button>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
        <Card className="rounded-3xl border-border/60 bg-card/95 shadow-lg shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Security posture</CardTitle>
              <CardDescription>Current authentication and enforcement configuration.</CardDescription>
            </div>
            <Badge variant="secondary" className="rounded-full border border-border/60">
              SAML + SCIM
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/20 px-4 py-3">
              <div className="flex items-center gap-3">
                <Lock className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Enforce SSO</p>
                  <p className="text-xs text-muted-foreground">
                    Members authenticate via Okta. MFA enforced at identity provider.
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="rounded-full border border-border/60 text-xs text-emerald-400">
                Enabled
              </Badge>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/20 px-4 py-3">
              <div className="flex items-center gap-3">
                <KeyRound className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Session policies</p>
                  <p className="text-xs text-muted-foreground">Session max age: 14 days • Idle timeout: 6 hours</p>
                </div>
              </div>
              <Badge variant="outline" className="rounded-full border border-border/60 text-xs text-muted-foreground">
                Edit
              </Badge>
            </div>
            <div className="rounded-2xl border border-dashed border-border/70 bg-muted/20 p-4 text-xs text-muted-foreground">
              SCIM provisioning enabled. User sync every 10 minutes. Last sync completed 4 minutes ago.
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="rounded-3xl border border-red-500/40 bg-red-500/5 p-6 text-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-red-200">Danger zone</p>
            <p className="text-xs text-red-300">
              Deleting the organization removes all workspaces, agents, and telemetry. This action is irreversible.
            </p>
          </div>
          <Button variant="destructive" className="rounded-full px-6">
            Delete organization
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
