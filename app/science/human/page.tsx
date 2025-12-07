"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bell, Volume2, Sparkles } from "lucide-react";
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
    title: "Notification Design",
    description: "Optimal position at top, display duration, sound tone, body reaction, difference between urgent vs contextual.",
    icon: Bell,
    href: "/science/human/notifications",
  },
  {
    title: "The Psychology of Sound Feedback",
    description: "Short sounds = better recognition, 250–700 Hz = neutral perception, sounds that reinforce action without stress.",
    icon: Volume2,
    href: "/science/human/audio",
  },
  {
    title: "Micro-Behaviors & Habit Triggers",
    description: "Productive micro-loops, tiny wins, motion as cue, context-driven actions.",
    icon: Sparkles,
    href: "/science/human/micro-behaviors",
  },
];

const principles = [
  {
    title: "Ergonomic Mentale",
    description: "Interfaces designed to reduce mental strain, minimize decision fatigue, and maintain cognitive comfort over extended sessions.",
  },
  {
    title: "Fatigue Décisionnelle",
    description: "Every decision consumes mental energy. Atom minimizes decisions through smart defaults, predictive actions, and contextual automation.",
  },
  {
    title: "Motivation Durable",
    description: "Sustainable motivation without gamification spikes. Atom maintains engagement through subtle progress feedback and routine-building.",
  },
  {
    title: "Habitudes & Dopamine",
    description: "Habit formation through consistent reinforcement. Atom builds productive routines without creating dependency on external rewards.",
  },
];

export default function HumanFactorsPage() {
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
              Human Factors Engineering
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl font-light text-[#333333] leading-relaxed"
            >
              How Atom is designed to reduce mental strain, minimize decision fatigue, and build sustainable productivity habits.
            </motion.p>
          </motion.div>
        </section>

        {/* Principles */}
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
              Core Principles
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle) => (
                <motion.div
                  key={principle.title}
                  variants={fadeInUp}
                  className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6"
                >
                  <h3 className="text-lg font-semibold text-[#000000] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-base font-light text-[#333333] leading-relaxed">
                    {principle.description}
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
            <div className="grid md:grid-cols-3 gap-6">
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

