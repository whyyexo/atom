export type WorkspaceRole = "OWNER" | "ADMIN" | "MEMBER";

export type WorkspaceRow = {
  id: string;
  name: string;
  slug: string;
  owner_id: string;
  created_at: string;
  updated_at: string | null;
};

export type WorkspaceMemberRow = {
  id: string;
  user_id: string;
  workspace_id: string;
  role: WorkspaceRole;
  created_at: string;
  updated_at: string | null;
};

export type UserProfileRow = {
  id: string;
  auth_id: string;
  email: string;
  display_name: string | null;
  created_at: string;
  updated_at: string | null;
};

