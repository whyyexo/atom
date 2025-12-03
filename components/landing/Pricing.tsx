"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ChevronDown, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

import { Button } from "@/components/ui/button";

const freePlan = {
  name: "Free",
  price: "$0",
  description: "Everything you need to experience the Atom ecosystem.",
  features: [
    "Atom Assistant (Lite) — quick answers, basic help, simple summaries",
    "Smart Workspace access — notes, tasks & calendar in one place",
    "Unlimited notes",
    "Up to 3 projects",
    "Daily smart suggestions (Lite)",
    "Basic planning assistance",
    "Cross-device sync (Web + Mobile)",
    "Community support",
  ],
  cta: "Get Started",
  href: "/signup",
};

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
    href: "/features/atom-assistant",
  },
  {
    title: "Smart Planning OS",
    features: [
      "Auto-plan your day, week, and priorities",
      "Dynamic scheduling based on your energy & free time",
      "Personalized focus windows",
    ],
    href: "/features/planning",
  },
  {
    title: "Intelligent Notes & Tasks",
    features: [
      "Automatic structuring of your notes",
      "Task prioritization that adapts to your day",
      "Instant study sheets creating (science-based)",
    ],
    href: "/features/notes-tasks",
  },
  {
    title: "Unlimited Workspace",
    features: [
      "Unlimited projects",
      "Unlimited workspaces",
    ],
    href: "/features/workspace",
  },
  {
    title: "Real-time collaboration",
    features: [
      "Share docs, notes, and tasks",
      "Collaborative editing",
    ],
    href: "/features/collaboration",
  },
  {
    title: "Export & Data Freedom",
    features: [
      "Export to Markdown, PDF, and more",
      "Cloud backup options",
    ],
    href: "/features/export",
  },
  {
    title: "Full Integrations",
    features: [
      "Google Calendar",
      "Notion Calendar",
    ],
    href: "/features/integrations",
  },
  {
    title: "Advanced Analytics",
    features: [
      "Productivity metrics",
      "Focus time tracking",
      "Weekly insights",
    ],
    href: "/features/analytics",
  },
  {
    title: "Priority Support",
    features: [
      "Faster response",
      "Priority beta access",
      "Early feature unlocks",
    ],
    href: "/features/support",
  },
];

export function Pricing() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setShowScrollIndicator(!isAtBottom);
      setIsScrolling(scrollTop > 0);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="pricing" className="section-spacing bg-white">
        <div className="container-padding max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#000000] mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Choose the plan that fits your workflow.
            </p>
          </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border-2 p-8 border-[rgba(0,0,0,0.1)] bg-white"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#000000] mb-2">
                {freePlan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-semibold text-[#000000]">
                  {freePlan.price}
                </span>
              </div>
              <p className="text-sm text-[#666666]">{freePlan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {freePlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#666666]">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full h-12 border-[rgba(0,0,0,0.1)] text-[#000000] hover:bg-[rgba(0,0,0,0.05)]"
            >
              <Link href={freePlan.href}>{freePlan.cta}</Link>
            </Button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl border-2 p-8 border-blue-500/50 bg-gradient-to-br from-blue-50/50 to-purple-50/50 shadow-lg shadow-blue-500/10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium">
              Most Popular
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#000000] mb-2">
                Pro
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-semibold text-[#000000]">
                  $7
                </span>
                <span className="text-[#666666]">/month</span>
              </div>
              <p className="text-sm text-[#666666]">Unlock the full power of Atom.</p>
            </div>

            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="space-y-4 mb-8 max-h-[600px] overflow-y-auto scrollbar-hide"
              >
                {proCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group rounded-xl bg-white/80 border border-[rgba(0,0,0,0.15)] p-4 hover:border-[rgba(0,0,0,0.25)] transition-all relative"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-semibold text-[#000000]">
                        {category.title}
                      </h4>
                      <Link 
                        href={category.href}
                        className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                      >
                        <ArrowUpRight className="w-4 h-4 text-[rgba(0,0,0,0.25)] hover:text-[#000000] transition-colors" />
                      </Link>
                    </div>
                    <ul className="space-y-2">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-[#666666]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Scroll Indicator Bubble */}
              {showScrollIndicator && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[80%]"
                >
                  <div className="relative w-full h-10 rounded-full backdrop-blur-md bg-white/30 border border-[rgba(0,0,0,0.1)] flex items-center justify-center shadow-lg">
                    <motion.div
                      animate={{
                        y: [0, 6, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#000000]" />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>

            <Button
              asChild
              variant="default"
              size="lg"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Link href="/signup">Upgrade to Pro</Link>
            </Button>
            <div className="relative mt-4 -mx-8 px-8">
              <p className="text-sm font-semibold text-[#000000] text-center relative z-10">
                Includes everything in Free, plus:
              </p>
              {isScrolling && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 backdrop-blur-md bg-white/30 rounded-xl -z-0"
                  style={{ 
                    left: '-2rem',
                    right: '-2rem',
                    top: '-100%',
                    bottom: '-100%',
                    height: 'calc(100% + 200%)'
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}

