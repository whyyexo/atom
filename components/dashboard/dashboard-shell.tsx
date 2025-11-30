"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { SidebarApple } from "@/components/navigation/sidebar-apple";
import { MobileNavApple } from "@/components/navigation/mobile-nav-apple";

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const [userEmail, setUserEmail] = useState("user@atom.app");
  const [userName, setUserName] = useState<string | undefined>(undefined);
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
        }
      }
    };

    loadUserData();
  }, [supabase]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SidebarApple userEmail={userEmail} userName={userName} />
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden">
        <MobileNavApple userEmail={userEmail} userName={userName} />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-[72px] pb-20 md:pb-0">
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  );
}
