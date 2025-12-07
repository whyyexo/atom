"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Layers, Users, Sparkles } from "lucide-react";
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

const pillars = [
  {
    title: "Cognitive Efficiency",
    description: "Every interface decision is validated by working memory limits, attention windows, and perceptual processing speed.",
    icon: Brain,
    href: "/science/cognitive",
  },
  {
    title: "Behavioral Design",
    description: "UI patterns that build habits, reduce decision fatigue, and maintain sustainable motivation without gamification.",
    icon: Layers,
    href: "/science/design-system",
  },
  {
    title: "Neuro-Optimized Interfaces",
    description: "Positioning, motion, and feedback calibrated to human reaction times, eye-tracking patterns, and cognitive load.",
    icon: Users,
    href: "/science/human",
  },
];

const categories = [
  {
    title: "Design System",
    description: "The Human Productivity Design System™ — placement logic, visual hierarchy, interaction psychology, and motion principles.",
    href: "/science/design-system",
    count: 6,
  },
  {
    title: "Cognitive Studies",
    description: "The science behind efficiency: attention mechanics, working memory limits, human perception, and reaction time.",
    href: "/science/cognitive",
    count: 4,
  },
  {
    title: "Human Factors",
    description: "Ergonomic design, notification science, audio cues, and micro-behaviors that build sustainable productivity habits.",
    href: "/science/human",
    count: 3,
  },
];

export default function SciencePage() {
  return (
    <ScienceLayout>
      <div className="space-y-32 pb-32">
        {/* Hero Section */}
        <section className="pt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#000000] leading-[1.1]"
            >
              Designed for the Human Mind.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-light text-[#333333] leading-relaxed"
            >
              Atom is built on cognitive science, behavioral psychology, and human-centred engineering.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/science/design-system"
                className="inline-flex items-center gap-2 text-base font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
              >
                Explore the Science
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* 3 Pillars */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeInUp}
                  className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-8 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0071e3] to-[#0077ed] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-base font-light text-[#333333] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Why Science Matters */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#000000]">
              Why Science Matters
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Every choice in Atom is validated by biology, working memory, and human perception.
              </p>
              <p>
                We don't guess. We measure. We test. We optimize based on how the human brain actually processes information, maintains attention, and builds habits.
              </p>
              <p>
                This isn't design for aesthetics. This is engineering for human performance.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Category Access */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#000000] mb-4">
                Explore by Category
              </h2>
              <p className="text-lg font-light text-[#333333] max-w-2xl">
                Deep dive into the scientific foundations behind Atom's design decisions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link
                    href={category.href}
                    className="block bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-8 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-[#000000] group-hover:text-[#0071e3] transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-sm font-medium text-[#666666] bg-[#f5f5f7] px-3 py-1 rounded-full">
                        {category.count} topics
                      </span>
                    </div>
                    <p className="text-base font-light text-[#333333] leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-[#0071e3]">
                      Explore
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </ScienceLayout>
  );
}
