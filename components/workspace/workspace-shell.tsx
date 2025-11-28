"use client";

import { PremiumSidebar } from "@/components/dashboard/premium-sidebar";
import { PremiumTopBar } from "@/components/dashboard/premium-topbar";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/types";

type Workspace = Database["public"]["Tables"]["workspaces"]["Row"];

type WorkspaceShellProps = {
  children: React.ReactNode;
  workspace: Workspace;
  user: User;
};

const pageTitles: Record<string, string> = {
  "/workspace/[slug]": "Dashboard",
  "/workspace/[slug]/projects": "Projects",
  "/workspace/[slug]/tasks": "Tasks",
  "/workspace/[slug]/calendar": "Calendar",
  "/workspace/[slug]/notes": "Notes",
  "/workspace/[slug]/analytics": "Analytics",
  "/workspace/[slug]/notifications": "Notifications",
  "/workspace/[slug]/settings": "Settings",
};

export function WorkspaceShell({ children, workspace, user }: WorkspaceShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState(user.email || "");
  const [userName, setUserName] = useState(user.user_metadata?.full_name || user.email?.split("@")[0] || "User");

  useEffect(() => {
    // Fetch user metadata
    const fetchUser = async () => {
      const {
        data: { user: currentUser },
      } = await supabase.auth.getUser();
      if (currentUser) {
        setUserEmail(currentUser.email || "");
        setUserName(
          currentUser.user_metadata?.full_name ||
            currentUser.email?.split("@")[0] ||
            "User"
        );
      }
    };
    fetchUser();
  }, []);

  const getPageTitle = () => {
    const pathParts = pathname.split("/");
    const pagePath = pathParts.slice(0, 3).join("/");
    return pageTitles[pagePath] || "Dashboard";
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <PremiumSidebar
        userEmail={userEmail}
        userName={userName}
        onSignOut={handleSignOut}
        workspaceSlug={workspace.slug}
      />

      <div className="flex w-full flex-1 flex-col ml-[280px]">
        <PremiumTopBar title={getPageTitle()} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

