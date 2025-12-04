"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronDown, Sparkles, Calendar, FileText, Brain, Layers, Target } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/public/public-layout";
import { Check, Heart } from "lucide-react";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";

const features = [
  {
    title: "Smart Tasks",
    description: "Prioritize work with context-aware lists that adapt as you plan.",
  },
  {
    title: "Notes & Documents",
    description: "Structure research, briefs, and project docs inside a calm canvas.",
  },
  {
    title: "AI Actions",
    description: "Trigger intelligent workflows that clean notes and prep next steps.",
  },
  {
    title: "Workspaces",
    description: "Organize everything in focused spaces designed for clarity.",
  },
];

const subtleFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function LandingPageClient() {
  return (
    <PublicLayout>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <FeatureHighlightsSection />
      <PricingSection />
    </PublicLayout>
  );
}

function HeroSection() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 pt-20 pb-32 text-center lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#000000] sm:text-6xl lg:text-7xl">
            Work Smarter. Stay Focused. with a{" "}
            <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">
              science based
            </span>{" "}
            productivity app.
          </h1>
          <p className="mt-8 text-base font-light leading-relaxed text-[#333333] sm:text-lg">
            <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">Reclaim hours</span> every week with an <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">intelligent workspace</span> powered by <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">science</span> — tasks, notes, and your <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">AI assistant</span>, all working seamlessly together. Built for builders, operators, and relentless achievers.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="rounded-full bg-[#0071e3] px-8 py-3 text-base font-normal text-white hover:bg-[#0077ed] border-0"
              asChild
            >
              <Link href="/download">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent px-8 py-3 text-base font-normal text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
              asChild
            >
              <Link href="#showcase">View Demo</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 w-full"
        >
          <MacMockup />
        </motion.div>
      </div>
    </section>
  );
}

const featureItems = [
  {
    id: "assistant",
    icon: Brain,
    name: "AI Assistant",
    description: "Intelligent help that understands context and adapts to your workflow.",
  },
  {
    id: "planning",
    icon: Calendar,
    name: "Smart Planning",
    description: "Auto-plan your day based on energy levels and priorities.",
  },
  {
    id: "notes",
    icon: FileText,
    name: "Notes & Tasks",
    description: "Structure your thoughts with automatic organization.",
  },
  {
    id: "workspace",
    icon: Layers,
    name: "Workspaces",
    description: "Organize everything in focused spaces for clarity.",
  },
  {
    id: "focus",
    icon: Target,
    name: "Focus Mode",
    description: "Science-backed tools to maintain deep concentration.",
  },
];

function MacMockup() {
  const [selectedFeature, setSelectedFeature] = useState(featureItems[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle menu selection change
  const handleMenuChange = (index: number) => {
    if (index >= 0 && index < featureItems.length) {
      setActiveIndex(index);
      setSelectedFeature(featureItems[index]);
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Title Section */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-[#000000]">Engineered for clarity</h2>
        <p className="mt-2 text-base font-light text-[#666666]">One system, designed for deeper focus.</p>
      </div>

      {/* Mac Screen - Just the rectangle, larger, no support */}
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Screen with blurred logo background */}
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] shadow-2xl">
          {/* macOS Menu Bar - Inside the screen */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between bg-[#3a3a3a]/90 backdrop-blur-sm px-4 py-1.5">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="h-3 w-3 rounded-full bg-[#28ca42]"></div>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/70">
              <span>Atom</span>
              <span>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>Window</span>
              <span>Help</span>
            </div>
            <div className="w-12"></div>
          </div>

          {/* Blurred Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Image
              src="/ATOM_blanc.png"
              alt="Atom Logo"
              width={400}
              height={112}
              className="h-auto w-[400px] blur-[2px] invert"
            />
          </div>

          {/* Product Mockup Center */}
          <div className="absolute inset-4 top-16 flex items-center justify-center">
            <div className="h-full w-full max-w-2xl rounded-xl bg-white/90 shadow-xl backdrop-blur-sm">
              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center">
                  {(() => {
                    const Icon = selectedFeature.icon;
                    return <Icon className="mx-auto h-16 w-16 text-[#a8d5ff]" />;
                  })()}
                  <h3 className="mt-4 text-xl font-semibold text-[#000000]">{selectedFeature.name}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* macOS-like Dock - Inside the screen at bottom */}
          <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
            <div className="relative flex items-center gap-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-xl px-3 py-2 shadow-lg border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]">
              {featureItems.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={feature.id}
                    onClick={() => handleMenuChange(index)}
                    className="relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        y: isActive ? -4 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="relative z-10"
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? "text-[#a8d5ff]" : "text-[#666666] dark:text-[#999999]"
                        }`}
                      />
                    </motion.div>
                    {/* Active background indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute inset-0 rounded-lg bg-[#a8d5ff]/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Description - No line above */}
      <motion.div
        key={selectedFeature.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 text-center"
      >
        <p className="text-lg leading-relaxed">
          <span className="font-semibold text-[#000000]">{selectedFeature.name}.</span>{" "}
          <span className="font-light text-[#666666]">{selectedFeature.description}</span>
        </p>
      </motion.div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="mb-6 h-12 w-12 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white"></div>
              <h3 className="text-2xl font-semibold text-[#000000]">{feature.title}</h3>
              <p className="text-base font-light leading-relaxed text-[#333333]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureHighlightsSection() {
  return (
    <section className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="space-y-32">
          {[
            {
              title: "Organize your thoughts",
              text: "Capture ideas, structure projects, and keep everything in one place. Atom helps you think clearly by removing distractions and focusing on what matters.",
            },
            {
              title: "Automate your workflow",
              text: "Let AI handle the repetitive tasks. From cleaning notes to generating summaries, Atom works in the background so you can focus on creating.",
            },
            {
              title: "Collaborate seamlessly",
              text: "Share workspaces with your team. Real-time updates keep everyone aligned without the noise of traditional collaboration tools.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="max-w-2xl space-y-6"
            >
              <h3 className="text-4xl font-semibold text-[#000000]">{item.title}</h3>
              <p className="text-lg font-light leading-relaxed text-[#333333]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section id="showcase" className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={subtleFade}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="mx-auto w-full max-w-6xl rounded-lg bg-[#f5f5f5] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="aspect-video flex items-center justify-center text-[#999999]">
              Product Screenshot
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const freePlanFeatures = [
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

function PricingSection() {
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
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="pricing" className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={subtleFade}
          transition={{ duration: 0.6 }}
          className="rounded-xl flex flex-col justify-between border border-[rgba(0,0,0,0.08)] p-1 bg-white"
        >
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Free Plan */}
            <div className="flex flex-col justify-between p-6 space-y-4 flex-1 bg-white rounded-xl border border-[rgba(0,0,0,0.08)]">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium text-[#000000]">Free</h2>
                  <span className="my-3 block text-2xl font-semibold text-[#000000]">$0 / mo</span>
                  <p className="text-sm font-light text-[#333333]">Everything you need to experience the Atom ecosystem.</p>
                </div>
                <Button
                  asChild
                  className="w-full rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
                  variant="outline"
                >
                  <Link href="/download">Get Started</Link>
                </Button>
              </div>
              <ul className="border-t border-[rgba(0,0,0,0.08)] pt-4 list-outside space-y-3 text-sm">
                {freePlanFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#333333]">
                    <Check className="size-3 text-blue-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col justify-between p-6 space-y-4 w-full md:w-1/2 bg-white rounded-xl border border-[rgba(0,0,0,0.08)]">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h2 className="font-medium text-[#000000]">Pro</h2>
                    <span className="my-3 block text-2xl font-semibold text-[#000000]">$7 / mo</span>
                    <p className="text-sm font-light text-[#333333]">Unlock the full power of Atom.</p>
                  </div>
                  <Button
                    asChild
                    className="w-full rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] border-0"
                    variant="default"
                  >
                    <Link href="/download">Upgrade to Pro</Link>
                  </Button>
                </div>
              </div>
              <div className="relative mt-4">
                <p className="text-sm font-semibold text-[#000000] text-center relative z-10">
                  Includes everything in Free, plus:
                </p>
                {isScrolling && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 backdrop-blur-sm bg-white/20 rounded-xl -z-0"
                    style={{ 
                      left: '-1.5rem',
                      right: '-1.5rem',
                      top: '-100%',
                      bottom: '-100%',
                      height: 'calc(100% + 200%)'
                    }}
                  />
                )}
              </div>
              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="space-y-3 max-h-[500px] overflow-y-auto scrollbar-hide mt-4"
                >
                  {proCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={subtleFade}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group rounded-lg p-3 border border-[rgba(0,0,0,0.15)] bg-[rgba(0,0,0,0.02)] hover:border-[rgba(0,0,0,0.25)] transition-all relative"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xs font-semibold text-[#000000]">
                          {category.title}
                        </h4>
                        <Link 
                          href={category.href}
                          className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 text-[rgba(0,0,0,0.25)] hover:text-[#000000] transition-colors" />
                        </Link>
                      </div>
                      <ul className="space-y-1.5">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-xs text-[#333333]">
                            <Check className="size-3 flex-shrink-0 mt-0.5 text-blue-600" />
                            <span>{feature}</span>
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
                    <div className="relative w-full h-10 rounded-full backdrop-blur-sm bg-white/10 border border-[rgba(0,0,0,0.1)] flex items-center justify-center shadow-lg">
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
            </div>
          </div>
        </motion.div>

        {/* Donation Section */}
        <div className="mt-12 flex items-center justify-center gap-3 border-t border-[#e5e5e5] pt-6">
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
      </div>
    </section>
  );
}

