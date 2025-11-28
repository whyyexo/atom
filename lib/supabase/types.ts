export type Database = {
  public: {
    Tables: {
      workspaces: {
        Row: {
          id: string;
          user_id: string;
          slug: string;
          name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          slug: string;
          name?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          slug?: string;
          name?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          workspace_id: string;
          title: string;
          description: string | null;
          color: string;
          progress: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          workspace_id: string;
          title: string;
          description?: string | null;
          color?: string;
          progress?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          workspace_id?: string;
          title?: string;
          description?: string | null;
          color?: string;
          progress?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          workspace_id: string;
          project_id: string | null;
          title: string;
          status: "todo" | "in-progress" | "review" | "done";
          priority: "low" | "medium" | "high";
          due_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          workspace_id: string;
          project_id?: string | null;
          title: string;
          status?: "todo" | "in-progress" | "review" | "done";
          priority?: "low" | "medium" | "high";
          due_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          workspace_id?: string;
          project_id?: string | null;
          title?: string;
          status?: "todo" | "in-progress" | "review" | "done";
          priority?: "low" | "medium" | "high";
          due_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      notes: {
        Row: {
          id: string;
          workspace_id: string;
          title: string;
          content: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          workspace_id: string;
          title: string;
          content?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          workspace_id?: string;
          title?: string;
          content?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      notifications: {
        Row: {
          id: string;
          workspace_id: string;
          type: "system" | "automations" | "apps" | "billing";
          title: string;
          content: string | null;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          workspace_id: string;
          type: "system" | "automations" | "apps" | "billing";
          title: string;
          content?: string | null;
          is_read?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          workspace_id?: string;
          type?: "system" | "automations" | "apps" | "billing";
          title?: string;
          content?: string | null;
          is_read?: boolean;
          created_at?: string;
        };
      };
    };
  };
};

