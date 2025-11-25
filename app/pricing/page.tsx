"use client";

import { PricingCard } from "@/components/ui/pricing";
import { PublicLayout } from "@/components/public/public-layout";
import { Heart } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function PricingPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <PublicLayout>
      <section className="py-16 md:py-32" id="pricing">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
          <div className="mx-auto flex max-w-3xl flex-col text-center">
            <h2 className="mb-3 text-3xl font-semibold text-[#000000] md:mb-4 lg:mb-6 lg:text-4xl">
              Simple, transparent pricing
            </h2>
            <p
              className={cn(
                "lg:text-lg mb-6 md:mb-8 lg:mb-12 font-light",
                isDark ? "text-white/80" : "text-[#333333]"
              )}
            >
              Choose the plan that works for you. Start free, upgrade when you're ready.
            </p>
          </div>
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
                description="Everything you need to get started"
                buttonVariant="outline"
                features={[
                  "Unlimited notes and documents",
                  "Up to 3 projects",
                  "Basic AI features",
                  "Community support",
                ]}
              />
              <PricingCard
                title="Pro"
                price="$6.99 / mo"
                description="Unlock AI actions and unlimited projects"
                buttonVariant="default"
                highlight
                features={[
                  "Unlimited notes and documents",
                  "Unlimited projects and workspaces",
                  "Real-time collaboration",
                  "Export to markdown, PDF, and more",
                  "Priority support",
                  "Advanced AI automation",
                  "Unlimited AI actions",
                  "Custom integrations",
                  "Advanced analytics",
                  "Team management",
                ]}
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
              <span className="text-[#0071e3]">2%</span> of all revenue is donated to social and{" "}
              <Link
                href="/impact"
                className="text-[#0071e3] underline decoration-[#0071e3] underline-offset-2 hover:text-[#0077ed] transition-colors"
              >
                educational organizations
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
