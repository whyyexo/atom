"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye, Brain, Zap, Target } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const topics = [
  {
    title: "Attention & Focus Mechanics",
    description: "Single-thread brain, interruptions and cortisol, time to return to focus, impact of notifications, Gestalt grouping.",
    icon: Eye,
    href: "/science/cognitive/attention",
  },
  {
    title: "Working Memory Limits",
    description: "The brain retains 4±1 items, why interfaces must reduce load, importance of contextual repetition, Kanban system references.",
    icon: Brain,
    href: "/science/cognitive/memory",
  },
  {
    title: "Human Perception",
    description: "Eye landing zones, foveal vision, contrast and recognition speed, dead zones of the screen.",
    icon: Target,
    href: "/science/cognitive/perception",
  },
  {
    title: "Reaction Time Science",
    description: "180–250ms average, why animations under 100ms feel instant, action anticipation.",
    icon: Zap,
    href: "/science/cognitive/reaction",
  },
];

const fundamentals = [
  {
    title: "Human Reaction Time",
    description: "Average reaction time is 180-250ms. Interface responses must match or exceed this speed to feel instant.",
  },
  {
    title: "Visual Processing",
    description: "The brain processes visual information in 13ms. Interface changes must respect this processing speed.",
  },
  {
    title: "Attention Windows",
    description: "Sustained attention lasts 20-40 minutes. Interfaces should support these natural attention cycles.",
  },
  {
    title: "Memory Constraints",
    description: "Working memory holds 4±1 items. Interfaces must chunk information to respect these limits.",
  },
];

export default function CognitivePage() {
  return (
    <ScienceLayout>
      <div className="space-y-32 pb-32 pt-16">
        {/* Hero */}
        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-semibold tracking-tight text-[#000000] leading-[1.1]"
            >
              The Science Behind Efficiency
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl font-light text-[#333333] leading-relaxed"
            >
              Understanding how the human brain processes information, maintains attention, and builds habits—and how Atom is engineered to work with these biological constraints.
            </motion.p>
          </motion.div>
        </section>

        {/* Fundamentals */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#000000]"
            >
              Cognitive Fundamentals
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {fundamentals.map((fundamental) => (
                <motion.div
                  key={fundamental.title}
                  variants={fadeInUp}
                  className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6"
                >
                  <h3 className="text-lg font-semibold text-[#000000] mb-2">
                    {fundamental.title}
                  </h3>
                  <p className="text-base font-light text-[#333333] leading-relaxed">
                    {fundamental.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Topics Grid */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#000000]"
            >
              Deep Dives
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <motion.div
                    key={topic.title}
                    variants={fadeInUp}
                    className="group"
                  >
                    <Link
                      href={topic.href}
                      className="block bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-8 hover:shadow-md transition-all h-full"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0071e3] to-[#0077ed] flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#000000] mb-3 group-hover:text-[#0071e3] transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-base font-light text-[#333333] leading-relaxed mb-6">
                        {topic.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-[#0071e3]">
                        Read more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
      </div>
    </ScienceLayout>
  );
}

