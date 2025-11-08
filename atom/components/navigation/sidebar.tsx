'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col border-r border-border/80 bg-card/60">
      <div className="flex h-16 items-center gap-2 border-b border-border/80 px-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold uppercase text-primary">
          ◎
        </span>
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Atom
        </span>
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


