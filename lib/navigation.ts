import { Home, CheckSquare, Calendar, Inbox, BookOpen, Settings, User } from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: typeof Home;
  tooltip: string;
  separator?: boolean;
};

export const navigationItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
    tooltip: "Dashboard",
  },
  {
    id: "tasks",
    label: "Tasks",
    href: "/dashboard/tasks",
    icon: CheckSquare,
    tooltip: "Tasks",
  },
  {
    id: "calendar",
    label: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
    tooltip: "Calendar",
  },
  {
    id: "inbox",
    label: "Inbox",
    href: "/dashboard/inbox",
    icon: Inbox,
    tooltip: "AI Inbox",
  },
  {
    id: "science",
    label: "Science",
    href: "/science",
    icon: BookOpen,
    tooltip: "Science",
    separator: true,
  },
  {
    id: "settings",
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    tooltip: "Settings",
  },
];

