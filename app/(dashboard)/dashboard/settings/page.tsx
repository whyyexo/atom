import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Configure organization-level preferences and secrets.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Organization profile</CardTitle>
          <CardDescription>
            These details are visible across all workspaces.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="org-name">Organization name</Label>
            <Input id="org-name" placeholder="Atom Labs" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="domain">Verified domain</Label>
            <Input id="domain" placeholder="atom.app" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>API keys</CardTitle>
          <CardDescription>
            Rotate and manage API keys used to authenticate requests into Atom.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="publishable">Publishable key</Label>
            <Input id="publishable" value="pk_live_xxxxxxxxx" readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="secret">Secret key</Label>
            <Input id="secret" value="sk_live_xxxxxxxxx" type="password" readOnly />
          </div>
          <Button variant="outline">Rotate key</Button>
        </CardContent>
      </Card>
    </div>
  );
}


