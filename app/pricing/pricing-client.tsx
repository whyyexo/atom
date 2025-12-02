"use client";

import { PricingCard } from "@/components/ui/pricing";
import { Heart } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";

const freeFeatures = [
  "Atom Assistant (Lite) — quick answers, basic help, simple summaries",
  "Smart Workspace access — notes, tasks & calendar in one place",
  "Unlimited notes",
  "Up to 3 projects",
  "Daily smart suggestions (Lite)",
  "Basic planning assistance",
  "Cross-device sync (Web + Mobile)",
  "Community support",
];

const proCategories = [
  {
    title: "Atom Assistant (Pro)",
    features: [
      "Deep reasoning",
      "Advanced summaries & rewrites",
      "Context-aware help (school, work, personal)",
      "Memory-based suggestions",
      "Proactive recommendations",
    ],
  },
  {
    title: "Smart Planning OS",
    features: [
      "Auto-plan your day, week, and priorities",
      "Dynamic scheduling based on your energy & free time",
      "Personalized focus windows",
    ],
  },
  {
    title: "Intelligent Notes & Tasks",
    features: [
      "Automatic structuring of your notes",
      "Task prioritization that adapts to your day",
      "Instant study sheets creating (science-based)",
    ],
  },
  {
    title: "Unlimited Workspace",
    features: [
      "Unlimited projects",
      "Unlimited workspaces",
    ],
  },
  {
    title: "Real-time collaboration",
    features: [
      "Share docs, notes, and tasks",
      "Collaborative editing",
    ],
  },
  {
    title: "Export & Data Freedom",
    features: [
      "Export to Markdown, PDF, and more",
      "Cloud backup options",
    ],
  },
  {
    title: "Full Integrations",
    features: [
      "Google Calendar",
      "Notion Calendar",
    ],
  },
  {
    title: "Advanced Analytics",
    features: [
      "Productivity metrics",
      "Focus time tracking",
      "Weekly insights",
    ],
  },
  {
    title: "Priority Support",
    features: [
      "Faster response",
      "Priority beta access",
      "Early feature unlocks",
    ],
  },
];

export function PricingPageClient() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <div
        className={cn(
          "rounded-xl flex flex-col justify-between border p-1",
          isDark
            ? "border-white/10 bg-black"
            : "border-[rgba(0,0,0,0.08)] bg-white"
        )}
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <PricingCard
            title="Free"
            price="$0 / mo"
            description="Everything you need to experience the Atom ecosystem."
            buttonVariant="outline"
            features={freeFeatures}
          />
          <PricingCard
            title="Pro"
            price="$12 / mo"
            description="Unlock the full power of Atom."
            buttonVariant="default"
            highlight
            categories={proCategories}
          />
        </div>
      </div>

      {/* Donation Section */}
      <div
        className={cn(
          "mt-12 flex items-center justify-center gap-3 border-t pt-6",
          isDark ? "border-white/10" : "border-[#e5e5e5]"
        )}
      >
        <Heart className="h-4 w-4 text-[#000000]" />
        <p className="text-sm font-light text-[#000000]">
          <span className="text-[#0071e3]">2%</span> of all revenue is donated to{" "}
          <Link
            href="/impact"
            className="text-[#0071e3] underline decoration-[#0071e3] underline-offset-2 hover:text-[#0077ed] transition-colors"
          >
            social and educational organizations
          </Link>
          .
        </p>
      </div>
    </>
  );
}

