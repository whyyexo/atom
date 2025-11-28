import { createServerClient } from "./server";
import type { Database } from "./types";

type Workspace = Database["public"]["Tables"]["workspaces"]["Row"];

export async function getWorkspaceByUserId(userId: string): Promise<Workspace | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("workspaces")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching workspace:", error);
    return null;
  }

  return data;
}

export async function getWorkspaceBySlug(slug: string): Promise<Workspace | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("workspaces")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching workspace by slug:", error);
    return null;
  }

  return data;
}

export async function updateWorkspace(
  workspaceId: string,
  updates: Partial<Pick<Workspace, "name" | "slug">>
): Promise<Workspace | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("workspaces")
    .update(updates)
    .eq("id", workspaceId)
    .select()
    .single();

  if (error) {
    console.error("Error updating workspace:", error);
    return null;
  }

  return data;
}
