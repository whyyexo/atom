"use client";

import { PremiumSidebar } from "@/components/dashboard/premium-sidebar";
import { PremiumTopBar } from "@/components/dashboard/premium-topbar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type DashboardShellProps = {
  children: React.ReactNode;
};

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/projects": "Projects",
  "/dashboard/tasks": "Tasks",
  "/dashboard/calendar": "Calendar",
  "/dashboard/notes": "Notes",
  "/dashboard/analytics": "Analytics",
  "/dashboard/notifications": "Notifications",
  "/dashboard/team": "Team",
  "/dashboard/settings": "Settings",
};

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const pageTitle = pageTitles[pathname] || "Dashboard";
  const [userEmail, setUserEmail] = useState("user@atom.app");
  const [userName, setUserName] = useState("User");
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    const loadUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email || "user@atom.app");
        
        // Get user metadata
        const firstName = user.user_metadata?.first_name || "";
        const lastName = user.user_metadata?.last_name || "";
        const fullName = user.user_metadata?.full_name || "";
        
        if (fullName) {
          setUserName(fullName);
        } else if (firstName && lastName) {
          setUserName(`${firstName} ${lastName}`);
        } else if (firstName) {
          setUserName(firstName);
        } else {
          // Fallback to email username
          const emailUsername = user.email?.split("@")[0] || "User";
          setUserName(emailUsername.charAt(0).toUpperCase() + emailUsername.slice(1));
        }
      }
    };

    loadUserData();
  }, [supabase]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error);
      }
      // Force a full page reload to ensure session is cleared
      window.location.href = "/auth";
    } catch (err) {
      console.error("Error during sign out:", err);
      // Still redirect even on error
      window.location.href = "/auth";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <PremiumSidebar 
        userEmail={userEmail} 
        userName={userName} 
        onSignOut={handleSignOut}
        workspaceSlug="dashboard"
      />

      <div className="flex w-full flex-1 flex-col ml-[280px]">
        <PremiumTopBar title={pageTitle} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
