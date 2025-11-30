import { Home } from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: typeof Home;
  tooltip: string;
  separator?: boolean;
};

export const navigationItems: NavItem[] = [
  // Navigation items removed - dashboard functionality removed
];
