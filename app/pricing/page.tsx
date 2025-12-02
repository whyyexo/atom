import type { Metadata } from "next";
import { PricingCard } from "@/components/ui/pricing";
import { PublicLayout } from "@/components/public/public-layout";
import { Heart } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PricingPageClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing — Atom",
};

export default function PricingPage() {
  return (
    <PublicLayout>
      <section className="py-16 md:py-32" id="pricing">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
          <div className="mx-auto flex max-w-3xl flex-col text-center">
            <h1 className="mb-4 text-5xl font-semibold text-[#000000] sm:text-6xl lg:text-7xl">
              Pricing
            </h1>
            <p className="lg:text-lg mb-6 md:mb-8 lg:mb-12 font-light text-[#000000]">
              Choose the plan that works for you. Start free, upgrade when you're ready.
            </p>
          </div>
          <PricingPageClient />
        </div>
      </section>
    </PublicLayout>
  );
}
