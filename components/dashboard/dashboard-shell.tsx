"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { PremiumSidebar } from "@/components/dashboard/premium-sidebar";
import { AppleNavbar } from "@/components/dashboard/apple-navbar";
import { useRouter } from "next/navigation";

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("user@atom.app");
  const [userName, setUserName] = useState<string>("User");
  const [mounted, setMounted] = useState(false);
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    setMounted(true);
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
          setUserName(userEmail.split("@")[0]);
        }
      }
    };

    loadUserData();
  }, [supabase, userEmail]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <PremiumSidebar 
        userEmail={userEmail} 
        userName={userName} 
        onSignOut={handleSignOut}
      />
      <div className="flex-1 md:ml-[280px]">
        <AppleNavbar />
        <main className="min-h-screen pt-24">{children}</main>
      </div>
    </div>
  );
}
