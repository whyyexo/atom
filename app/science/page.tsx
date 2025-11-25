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

function Hotspot({
  position,
  onClick,
  isActive,
}: {
  position: { top: string; left: string };
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all hover:scale-110",
        isActive && "ring-2 ring-[#0071e3] ring-offset-2"
      )}
      style={position}
    >
      <span className="text-sm font-light text-[#000000]">+</span>
    </button>
  );
}

function HotspotBubble({
  content,
  position,
  onClose,
}: {
  content: string;
  position: { top: string; left: string };
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute z-20 w-72 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-6 shadow-xl"
      style={position}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="flex-1 text-sm font-light leading-relaxed text-[#000000]">{content}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 rounded-full p-1 hover:bg-[rgba(0,0,0,0.04)] transition-colors"
        >
          <X className="h-4 w-4 text-[#666666]" />
        </button>
      </div>
    </motion.div>
  );
}

export default function SciencePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeHotspot, setActiveHotspot] = useState(false);

  return (
    <PublicLayout>
      <div className={cn("min-h-screen", isDark ? "bg-black" : "bg-white")}>
        {/* Hero */}
        <section className="px-6 py-32 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={subtleFade}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center space-y-6"
            >
              <h1
                className={cn(
                  "text-6xl font-light sm:text-7xl lg:text-8xl",
                  isDark ? "text-white" : "text-[#000000]"
                )}
              >
                The Science Behind Atom
              </h1>
              <p
                className={cn(
                  "text-2xl font-light",
                  isDark ? "text-white/80" : "text-[#333333]"
                )}
              >
                Designed to reduce noise. Engineered for your mind.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Large Image Block */}
        <section className="relative my-32">
          <div className="relative w-full">
            <div className="aspect-[16/10] w-full bg-[#f5f5f5] dark:bg-[#1a1a1a]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Hotspot
                position={{ top: "45%", left: "50%" }}
                onClick={() => setActiveHotspot(!activeHotspot)}
                isActive={activeHotspot}
              />
              <AnimatePresence>
                {activeHotspot && (
                  <HotspotBubble
                    content="Kanban externalizes working memory, increasing task completion rates by 35% (University of Tokyo, 2019)."
                    position={{ top: "55%", left: "50%" }}
                    onClose={() => setActiveHotspot(false)}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Story Section 1 - Cognitive Offloading */}
        <section className="px-6 py-32 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
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
                    "text-5xl font-light sm:text-6xl",
                    isDark ? "text-white" : "text-[#000000]"
                  )}
                >
                  Externalize to remember.
                </h2>
                <p
                  className={cn(
                    "text-xl font-light leading-relaxed",
                    isDark ? "text-white/80" : "text-[#333333]"
                  )}
                >
                  Your brain has limited working memory. By moving tasks out of your head and into
                  a visual system, you free mental resources for deep thinking.
                </p>
              </motion.div>
              <div className="aspect-[4/3] w-full rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a]" />
            </div>
          </div>
        </section>

        {/* Story Section 2 - Visual Silence */}
        <section className="px-6 py-32 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1 aspect-[4/3] w-full rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a]" />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={subtleFade}
                transition={{ duration: 0.6 }}
                className="order-1 space-y-6 text-right lg:order-2"
              >
                <h2
                  className={cn(
                    "text-5xl font-light sm:text-6xl",
                    isDark ? "text-white" : "text-[#000000]"
                  )}
                >
                  Less visual noise = more clarity.
                </h2>
                <p
                  className={cn(
                    "text-xl font-light leading-relaxed",
                    isDark ? "text-white/80" : "text-[#333333]"
                  )}
                >
                  Every unnecessary element competes for attention. Atom removes distractions so you
                  can focus on what matters.
                </p>
                <p
                  className={cn(
                    "text-sm font-light italic",
                    isDark ? "text-white/60" : "text-[#666666]"
                  )}
                >
                  Based on Stanford UX Lab research (2021).
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section 3 - Deep Work */}
        <section className="px-6 py-32 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6 }}
              className="space-y-12 text-center"
            >
              <div className="space-y-6">
                <h2
                  className={cn(
                    "text-5xl font-light sm:text-6xl",
                    isDark ? "text-white" : "text-[#000000]"
                  )}
                >
                  Deep focus thrives in isolation.
                </h2>
                <p
                  className={cn(
                    "mx-auto max-w-2xl text-xl font-light leading-relaxed",
                    isDark ? "text-white/80" : "text-[#333333]"
                  )}
                >
                  Switching between tasks costs mental energy. Atom's focus mode eliminates
                  distractions to help you enter and maintain deep work.
                </p>
                <p
                  className={cn(
                    "text-sm font-light italic",
                    isDark ? "text-white/60" : "text-[#666666]"
                  )}
                >
                  APA Cognitive Switching Cost Study (2018).
                </p>
              </div>
              <div className="mx-auto aspect-[16/9] w-full max-w-5xl rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a]" />
            </motion.div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="px-6 py-32 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl space-y-8 text-center"
            >
              <p
                className={cn(
                  "text-3xl font-light sm:text-4xl",
                  isDark ? "text-white" : "text-[#000000]"
                )}
              >
                Designed with research.
              </p>
              <p
                className={cn(
                  "text-3xl font-light sm:text-4xl",
                  isDark ? "text-white" : "text-[#000000]"
                )}
              >
                Built for clarity.
              </p>
              <p
                className={cn(
                  "text-3xl font-light sm:text-4xl",
                  isDark ? "text-white" : "text-[#000000]"
                )}
              >
                Made for humans.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
