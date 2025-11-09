import type { LucideIcon } from "lucide-react";
import { Brain, ClipboardList, Home, Inbox, LandPlot, MessageSquare, Settings } from "lucide-react";

export type NavigationItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const dashboardNav: NavigationItem[] = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Inbox",
    href: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    title: "My issues",
    href: "/dashboard/my-issues",
    icon: ClipboardList,
  },
  {
    title: "Workspaces",
    href: "/dashboard/workspaces",
    icon: LandPlot,
  },
  {
    title: "Agents",
    href: "/dashboard/agents",
    icon: Brain,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];


