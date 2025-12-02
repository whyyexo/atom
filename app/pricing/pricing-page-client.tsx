"use client";

import { PricingCard } from "@/components/ui/pricing";
import { PublicLayout } from "@/components/public/public-layout";
import { Heart } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PricingPageClient } from "./pricing-client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PricingPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-64px 0px 0px 0px", // Account for navbar height
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <PublicLayout>
      <section className="py-16 md:py-32" id="pricing">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
          <div 
            ref={headerRef}
            className="mx-auto flex max-w-3xl flex-col text-center"
          >
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

      {/* Sticky Header */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-50 bg-white dark:bg-black border-b border-border/50 backdrop-blur-sm"
          >
            <div className="mx-auto max-w-[1180px] px-6 lg:px-12 py-4">
              <div className="mx-auto flex max-w-3xl flex-col text-center">
                <h1 className="text-2xl sm:text-3xl font-semibold text-[#000000] dark:text-white">
                  Pricing
                </h1>
                <p className="text-sm mb-4 font-light text-[#000000] dark:text-white/80">
                  Choose the plan that works for you. Start free, upgrade when you're ready.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PublicLayout>
  );
}

