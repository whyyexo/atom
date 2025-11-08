"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col border-r border-border/80 bg-card/60">
      <div className="flex h-16 items-center gap-3 border-b border-border/80 px-4">
        <Image
          src="/ATOM_blanc.png"
          alt="Atom logo"
          width={110}
          height={28}
          priority
        />
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {dashboardNav.map((item) => {
          const active =
            pathname === item.href ||
            (pathname?.startsWith(item.href) && item.href !== "/dashboard");

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                active && "bg-muted text-foreground shadow-sm",
              )}
            >
              <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
