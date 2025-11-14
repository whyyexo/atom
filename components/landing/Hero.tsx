"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("workspace-preview");
    demoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 [font-family:var(--font-heading)] leading-[1.1]">
              Your AI-driven life,
              <br />
              <span className="text-primary">organized.</span>
            </h1>

            <p className="text-[15px] text-gray-600 leading-relaxed max-w-xl">
              Atom OS centralizes your calendar, goals, notes and habits — and actually helps you move forward.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-xl h-12 px-6 text-[15px] font-medium">
                <Link href="/sign-up">
                  Start now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToDemo}
                className="rounded-xl h-12 px-6 text-[15px] font-medium text-gray-600 hover:text-gray-900"
              >
                <Play className="mr-2 h-4 w-4" />
                View demo
              </Button>
            </div>
          </motion.div>

          {/* Minimal UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Clean workspace mockup */}
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Mockup header */}
                <div className="h-12 border-b border-gray-200 flex items-center px-4 gap-3">
                  <div className="h-2 w-2 rounded-full bg-gray-300" />
                  <div className="h-2 w-2 rounded-full bg-gray-300" />
                  <div className="h-2 w-2 rounded-full bg-gray-300" />
                  <div className="flex-1" />
                  <div className="h-6 w-20 rounded bg-gray-100" />
                </div>
                
                {/* Mockup content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 w-32 rounded bg-gray-200" />
                    <div className="h-4 w-48 rounded bg-gray-100" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-20 rounded-lg border border-gray-200 bg-gray-50" />
                        <div className="h-3 w-full rounded bg-gray-100" />
                        <div className="h-3 w-3/4 rounded bg-gray-100" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <div className="h-3 w-full rounded bg-gray-100" />
                    <div className="h-3 w-5/6 rounded bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
