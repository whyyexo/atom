"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToShowcase = () => {
    const showcaseSection = document.getElementById("showcase");
    showcaseSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a0a0a] border-b border-[#1c1c1c]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white [font-family:var(--font-heading)] leading-[1.1]">
              Your AI-driven life,
              <br />
              <span className="text-primary">organized.</span>
            </h1>

            <p className="text-[15px] text-gray-400 leading-relaxed max-w-xl">
              Atom OS centralizes your calendar, goals, notes and habits — and actually helps you move forward.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-xl h-12 px-6 text-[15px] font-medium bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/sign-up">
                  Start now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToShowcase}
                className="rounded-xl h-12 px-6 text-[15px] font-medium text-gray-400 hover:text-white border border-[#1c1c1c] hover:border-[#2a2a2a]"
              >
                <Play className="mr-2 h-4 w-4" />
                View demo
              </Button>
            </div>
          </motion.div>

          {/* Clean UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-[#1c1c1c] bg-[#0f0f0f] shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden">
              {/* Mockup header */}
              <div className="h-12 border-b border-[#1c1c1c] flex items-center px-4 gap-3">
                <div className="h-2 w-2 rounded-full bg-[#2a2a2a]" />
                <div className="h-2 w-2 rounded-full bg-[#2a2a2a]" />
                <div className="h-2 w-2 rounded-full bg-[#2a2a2a]" />
                <div className="flex-1" />
                <div className="h-6 w-20 rounded bg-[#1c1c1c]" />
              </div>
              
              {/* Mockup content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="h-4 w-32 rounded bg-[#1c1c1c]" />
                  <div className="h-4 w-48 rounded bg-[#1c1c1c]" />
                </div>
                
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-20 rounded-lg border border-[#1c1c1c] bg-[#0a0a0a]" />
                      <div className="h-3 w-full rounded bg-[#1c1c1c]" />
                      <div className="h-3 w-3/4 rounded bg-[#1c1c1c]" />
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 space-y-2">
                  <div className="h-3 w-full rounded bg-[#1c1c1c]" />
                  <div className="h-3 w-5/6 rounded bg-[#1c1c1c]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
