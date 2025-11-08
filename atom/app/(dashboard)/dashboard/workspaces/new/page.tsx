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

export default function NewWorkspacePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Create workspace</h1>
          <p className="text-sm text-muted-foreground">
            Define a collaborative space for teams to build AI workflows together.
          </p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/dashboard/workspaces">Cancel</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Workspace details</CardTitle>
          <CardDescription>
            These details will help teammates understand the purpose of this workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Ex. Customer Support Excellence"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              placeholder="support-excellence"
              required
              pattern="[a-z0-9-]+"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Explain how this workspace will be used and who should join."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="visibility">Visibility</Label>
            <select
              id="visibility"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              defaultValue="private"
            >
              <option value="private">Private (invite only)</option>
              <option value="team">Teams (org members)</option>
              <option value="public">Public (org wide)</option>
            </select>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-3">
          <Button variant="outline" asChild>
            <Link href="/dashboard/workspaces">Back</Link>
          </Button>
          <Button type="submit">Create workspace</Button>
        </CardFooter>
      </Card>
    </div>
  );
}


