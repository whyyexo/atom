"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  const headerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setShowScrollIndicator(!isAtBottom);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // Account for navbar height (64px) + some margin
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
    <>
      <section id="pricing" className="section-spacing bg-gradient-to-b from-white to-muted/20 dark:from-black dark:to-muted/10">
        <div className="container-padding max-w-5xl mx-auto">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            className="relative rounded-2xl border-2 p-8 border-border bg-white dark:bg-black"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {freePlan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-semibold text-foreground">
                  {freePlan.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{freePlan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {freePlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full h-12"
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
            className="relative rounded-2xl border-2 p-8 border-blue-500/50 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 shadow-lg shadow-blue-500/10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium">
              Most Popular
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Pro
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-semibold text-foreground">
                  $6.99
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">Unlock the full power of Atom.</p>
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
                    className="group rounded-xl bg-white/50 dark:bg-black/50 border border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.15)] p-4 hover:border-white dark:hover:border-white transition-all relative"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        {category.title}
                      </h4>
                      <Link 
                        href={category.href}
                        className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2 hover:gap-2"
                      >
                        <span className="text-xs text-foreground whitespace-nowrap overflow-hidden w-0 hover:w-12 transition-all duration-300 inline-block">details</span>
                        <motion.div
                          whileHover={{ x: -4 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          <ArrowUpRight className="w-4 h-4 text-foreground" />
                        </motion.div>
                      </Link>
                    </div>
                    <ul className="space-y-2">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
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
                  <div className="relative w-full h-10 rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 border border-border/50 flex items-center justify-center shadow-lg">
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
                      <ChevronDown className="w-5 h-5 text-foreground" />
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
            <p className="text-sm font-semibold text-foreground mt-4 text-center">Includes everything in Free, plus:</p>
          </motion.div>
        </div>
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
          className="fixed top-16 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 border-b border-border/50 backdrop-blur-xl"
        >
          <div className="container-padding max-w-5xl mx-auto py-4">
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-1">
                Simple Pricing
              </h2>
              <p className="text-sm text-muted-foreground">
                Choose the plan that fits your workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* Free Plan Sticky */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-white dark:bg-black">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{freePlan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-semibold text-foreground">{freePlan.price}</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <Link href={freePlan.href}>{freePlan.cta}</Link>
                </Button>
              </div>
              {/* Pro Plan Sticky */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-blue-500/50 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Pro</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-semibold text-foreground">$6.99</span>
                    <span className="text-xs text-muted-foreground">/month</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Link href="/signup">Upgrade to Pro</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

