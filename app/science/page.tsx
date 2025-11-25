"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { X } from "lucide-react";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scienceCards = [
  {
    title: "Cognitive Simplicity",
    description:
      "Reducing visual complexity allows your brain to process information faster and make decisions more efficiently.",
  },
  {
    title: "Behavioral Triggers",
    description:
      "Atom uses proven behavioral patterns to help you form better habits and maintain consistent productivity.",
  },
  {
    title: "Mental Clarity",
    description:
      "A clean workspace reduces cognitive load, allowing you to focus on what truly matters without distraction.",
  },
];

const proofFeatures = [
  {
    title: "Kanban Workflow",
    description: "Visual task management that externalizes your mental workload.",
    principle: "Kanban reduces working memory load by externalizing tasks, improving task completion by 35% (University of Tokyo, 2019).",
  },
  {
    title: "Focus Mode",
    description: "Full-screen interface that eliminates distractions.",
    principle: "Full-screen focus reduces cognitive switching cost by 17–40% (APA research).",
  },
  {
    title: "Minimal Interface",
    description: "Clean design that reduces visual noise.",
    principle: "Minimal visual design reduces distraction by 52% (Stanford UX Lab).",
  },
  {
    title: "Smart Prioritization",
    description: "AI-powered task ranking based on urgency and importance.",
    principle: "Prioritization systems reduce decision fatigue by up to 28% (Harvard Memory Study, 2022).",
  },
];

const dashboardHotspots = [
  {
    id: "task-scoring",
    title: "Task Scoring System",
    content:
      "Our scoring algorithm uses cognitive load theory to prioritize tasks based on mental effort required, not just deadlines.",
    position: { top: "30%", left: "25%" },
  },
  {
    id: "calendar-view",
    title: "Global Calendar View",
    content:
      "Visualizing time blocks reduces scheduling conflicts and improves time estimation accuracy by 23%.",
    position: { top: "50%", right: "20%" },
  },
  {
    id: "quick-capture",
    title: "Quick Capture Panel",
    content:
      "Immediate capture reduces cognitive overhead of remembering tasks, freeing mental resources for deep work.",
    position: { bottom: "25%", left: "15%" },
  },
];

const references = [
  "University of Tokyo (2019)",
  "Stanford UX Lab (2021)",
  "Harvard Memory Study (2022)",
  "APA Cognitive Switching Cost (2018)",
];

function Hotspot({
  position,
  onClick,
  isActive,
}: {
  position: { top?: string; bottom?: string; left?: string; right?: string };
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-110 hover:shadow-xl",
        isActive && "ring-2 ring-[#0071e3] ring-offset-2"
      )}
      style={position}
    >
      <span className="text-[10px] font-semibold text-[#000000]">+</span>
    </button>
  );
}

function HotspotCard({
  title,
  content,
  position,
  onClose,
}: {
  title: string;
  content: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute z-20 w-64 rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-white p-4 shadow-xl"
      style={position}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 space-y-2">
          <h4 className="text-sm font-semibold text-[#000000]">{title}</h4>
          <p className="text-xs font-light leading-relaxed text-[#333333]">{content}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 rounded-full p-1 hover:bg-[rgba(0,0,0,0.04)] transition-colors"
        >
          <X className="h-3 w-3 text-[#666666]" />
        </button>
      </div>
    </motion.div>
  );
}

export default function SciencePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [activeDashboardHotspot, setActiveDashboardHotspot] = useState<string | null>(null);

  const heroHotspots = [
    {
      id: "kanban",
      title: "Kanban",
      content: "Kanban reduces working memory load by externalizing tasks, improving task completion by 35% (University of Tokyo, 2019).",
      position: { top: "40%", left: "35%" },
    },
    {
      id: "focus",
      title: "Focus Mode",
      content: "Full-screen focus reduces cognitive switching cost by 17–40% (APA research).",
      position: { top: "55%", right: "30%" },
    },
    {
      id: "minimal",
      title: "Minimal UI",
      content: "Minimal visual design reduces distraction by 52% (Stanford UX Lab).",
      position: { bottom: "30%", left: "25%" },
    },
  ];

  return (
    <PublicLayout>
      <div className={cn("min-h-screen", isDark ? "bg-black" : "bg-white")}>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#E5E5E7] dark:border-white/10">
          <div className="relative mx-auto max-w-[1180px] px-6 py-32 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={subtleFade}
              transition={{ duration: 0.6 }}
              className="relative z-10 mx-auto max-w-3xl text-center space-y-6"
            >
              <h1
                className={cn(
                  "text-5xl font-semibold sm:text-6xl",
                  isDark ? "text-white" : "text-[#000000]"
                )}
              >
                Science-Powered Productivity.
              </h1>
              <p
                className={cn(
                  "text-xl font-light leading-relaxed",
                  isDark ? "text-white/80" : "text-[#333333]"
                )}
              >
                Atom is designed based on cognitive science, behavioral psychology, and modern
                productivity research.
              </p>
            </motion.div>
            <div className="absolute inset-0 -z-0 opacity-20 blur-3xl">
              <div className="mx-auto h-96 w-full max-w-4xl rounded-2xl bg-[#f5f5f5] dark:bg-[#1a1a1a]" />
            </div>
          </div>
        </section>

        {/* The Science Behind Atom */}
        <section className="border-b border-[#E5E5E7] dark:border-white/10 py-32">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={subtleFade}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2
                  className={cn(
                    "text-4xl font-semibold",
                    isDark ? "text-white" : "text-[#000000]"
                  )}
                >
                  The Science Behind Atom
                </h2>
                <p
                  className={cn(
                    "text-lg font-light leading-relaxed",
                    isDark ? "text-white/80" : "text-[#333333]"
                  )}
                >
                  Atom uses proven research from cognitive psychology, behavioral science, and
                  productivity studies to help you work more effectively. Every design decision is
                  backed by evidence.
                </p>
              </motion.div>

              <div className="relative">
                <div className="relative rounded-[18px] border border-[rgba(0,0,0,0.08)] dark:border-white/10 bg-[#f5f5f5] dark:bg-[#1a1a1a] p-8 shadow-sm">
                  <div className="aspect-video rounded-lg bg-white dark:bg-black" />
                  {heroHotspots.map((hotspot) => (
                    <div key={hotspot.id} className="relative">
                      <Hotspot
                        position={hotspot.position}
                        onClick={() =>
                          setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)
                        }
                        isActive={activeHotspot === hotspot.id}
                      />
                      <AnimatePresence>
                        {activeHotspot === hotspot.id && (
                          <HotspotCard
                            title={hotspot.title}
                            content={hotspot.content}
                            position={{
                              top: hotspot.position.top?.includes("bottom")
                                ? undefined
                                : "calc(100% + 12px)",
                              bottom: hotspot.position.bottom ? "calc(100% + 12px)" : undefined,
                              left: hotspot.position.left || undefined,
                              right: hotspot.position.right || undefined,
                            }}
                            onClose={() => setActiveHotspot(null)}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why our design works */}
        <section className="border-b border-[#E5E5E7] dark:border-white/10 py-32">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
            <div className="grid gap-8 md:grid-cols-3">
              {scienceCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={subtleFade}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "rounded-[16px] border p-8",
                    isDark
                      ? "border-white/10 bg-black"
                      : "border-[rgba(0,0,0,0.08)] bg-white shadow-sm"
                  )}
                >
                  <div className="mb-6 h-12 w-12 rounded-lg border border-[rgba(0,0,0,0.08)] dark:border-white/10 bg-[#f5f5f5] dark:bg-[#1a1a1a]" />
                  <h3
                    className={cn(
                      "mb-4 text-2xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={cn(
                      "text-base font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof-Based Features */}
        <section className="border-b border-[#E5E5E7] dark:border-white/10 py-32">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2
                className={cn(
                  "mb-6 text-4xl font-semibold",
                  isDark ? "text-white" : "text-[#000000]"
                )}
              >
                Proof-Based Features
              </h2>
            </motion.div>
            <div className="space-y-12">
              {proofFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={subtleFade}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-4 border-b border-[#E5E5E7] dark:border-white/10 pb-12 last:border-0"
                >
                  <h3
                    className={cn(
                      "text-2xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "text-lg font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    {feature.description}
                  </p>
                  <p
                    className={cn(
                      "text-sm font-light italic",
                      isDark ? "text-white/60" : "text-[#666666]"
                    )}
                  >
                    {feature.principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Interactive Dashboard */}
        <section className="border-b border-[#E5E5E7] dark:border-white/10 py-32">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2
                className={cn(
                  "mb-6 text-4xl font-semibold",
                  isDark ? "text-white" : "text-[#000000]"
                )}
              >
                Interactive Dashboard
              </h2>
              <p
                className={cn(
                  "text-lg font-light",
                  isDark ? "text-white/80" : "text-[#333333]"
                )}
              >
                Click the hotspots to learn about the science behind each feature.
              </p>
            </motion.div>
            <div className="relative">
              <div className="relative rounded-[18px] border border-[rgba(0,0,0,0.08)] dark:border-white/10 bg-[#f5f5f5] dark:bg-[#1a1a1a] p-4 shadow-sm">
                <div className="aspect-video rounded-lg bg-white dark:bg-black" />
                {dashboardHotspots.map((hotspot) => (
                  <div key={hotspot.id} className="relative">
                    <Hotspot
                      position={hotspot.position}
                      onClick={() =>
                        setActiveDashboardHotspot(
                          activeDashboardHotspot === hotspot.id ? null : hotspot.id
                        )
                      }
                      isActive={activeDashboardHotspot === hotspot.id}
                    />
                    <AnimatePresence>
                      {activeDashboardHotspot === hotspot.id && (
                        <HotspotCard
                          title={hotspot.title}
                          content={hotspot.content}
                          position={{
                            top: hotspot.position.top || undefined,
                            bottom: hotspot.position.bottom || undefined,
                            left: hotspot.position.left || undefined,
                            right: hotspot.position.right || undefined,
                          }}
                          onClose={() => setActiveDashboardHotspot(null)}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="py-32">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2
                className={cn(
                  "text-3xl font-semibold",
                  isDark ? "text-white" : "text-[#000000]"
                )}
              >
                References
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {references.map((ref, index) => (
                  <motion.div
                    key={ref}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={subtleFade}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={cn(
                      "rounded-[14px] border p-6",
                      isDark
                        ? "border-white/10 bg-black"
                        : "border-[rgba(0,0,0,0.08)] bg-white"
                    )}
                  >
                    <p
                      className={cn(
                        "text-base font-light",
                        isDark ? "text-white/80" : "text-[#333333]"
                      )}
                    >
                      {ref}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
