"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Brain, Layers, Users } from "lucide-react";
import { PublicLayout } from "@/components/public/public-layout";

interface ScienceLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  {
    name: "Overview",
    href: "/science",
    icon: Brain,
  },
  {
    name: "Design System",
    href: "/science/design-system",
    icon: Layers,
    children: [
      { name: "Placement Logic", href: "/science/design-system/placement" },
      { name: "Visual Hierarchy", href: "/science/design-system/visual-hierarchy" },
      { name: "Interaction Psychology", href: "/science/design-system/interaction-psychology" },
      { name: "Motion Principles", href: "/science/design-system/motion" },
      { name: "Cognitive Load", href: "/science/design-system/cognitive-load" },
      { name: "Behavioral Flow", href: "/science/design-system/behavior-flow" },
    ],
  },
  {
    name: "Cognitive Studies",
    href: "/science/cognitive",
    icon: Brain,
    children: [
      { name: "Attention & Focus", href: "/science/cognitive/attention" },
      { name: "Working Memory", href: "/science/cognitive/memory" },
      { name: "Human Perception", href: "/science/cognitive/perception" },
      { name: "Reaction Time", href: "/science/cognitive/reaction" },
    ],
  },
  {
    name: "Human Factors",
    href: "/science/human",
    icon: Users,
    children: [
      { name: "Notification Design", href: "/science/human/notifications" },
      { name: "Audio Cues", href: "/science/human/audio" },
      { name: "Micro-Behaviors", href: "/science/human/micro-behaviors" },
    ],
  },
  {
    name: "Research Index",
    href: "/science/research",
    icon: Brain,
  },
];

export function ScienceLayout({ children }: ScienceLayoutProps) {
  const pathname = usePathname();

  return (
    <PublicLayout>
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 py-16">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  const hasActiveChild = item.children?.some(
                    (child) => pathname === child.href
                  );

                  return (
                    <div key={item.name} className="space-y-1">
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive || hasActiveChild
                            ? "bg-[#0071e3] text-white"
                            : "text-[#333333] hover:bg-[#f5f5f7]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                      {item.children && (isActive || hasActiveChild) && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                                  isChildActive
                                    ? "text-[#0071e3] font-medium bg-[#f5f5f7]"
                                    : "text-[#666666] hover:text-[#000000] hover:bg-[#f5f5f7]"
                                }`}
                              >
                                {child.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

