"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Brain, Users, Target } from "lucide-react";
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

const researchCategories = [
  {
    title: "UX Studies",
    description: "User experience research on interface design, interaction patterns, and usability principles that inform Atom's design decisions.",
    icon: FileText,
    topics: [
      "Interface efficiency metrics",
      "Task completion optimization",
      "Navigation pattern effectiveness",
      "Information architecture principles",
    ],
  },
  {
    title: "Cognitive Psychology",
    description: "Research on how the brain processes information, maintains attention, and builds habits—the foundation of Atom's cognitive architecture.",
    icon: Brain,
    topics: [
      "Working memory constraints",
      "Attention span research",
      "Habit formation mechanisms",
      "Cognitive load theory",
    ],
  },
  {
    title: "Reaction Time Datasets",
    description: "Empirical data on human reaction times, processing speeds, and perceptual thresholds that calibrate Atom's interface responsiveness.",
    icon: Target,
    topics: [
      "Visual processing speed",
      "Motor response times",
      "Perceptual thresholds",
      "Response calibration",
    ],
  },
  {
    title: "Human-Computer Interaction",
    description: "HCI research on how humans interact with digital interfaces, including input methods, feedback systems, and interaction patterns.",
    icon: Users,
    topics: [
      "Input method efficiency",
      "Feedback system design",
      "Interaction pattern optimization",
      "Ergonomic interface principles",
    ],
  },
  {
    title: "Neuroscience Fundamentals",
    description: "Neuroscientific research on brain function, neural processing, and biological constraints that shape interface design.",
    icon: BookOpen,
    topics: [
      "Neural processing speed",
      "Attention network function",
      "Memory system architecture",
      "Perceptual system biology",
    ],
  },
];

export default function ResearchPage() {
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
              Research Index
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl font-light text-[#333333] leading-relaxed"
            >
              A comprehensive overview of the scientific research and empirical data that inform Atom's design decisions and interface architecture.
            </motion.p>
          </motion.div>
        </section>

        {/* Research Categories */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {researchCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0071e3] to-[#0077ed] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-[#000000] mb-3">
                        {category.title}
                      </h2>
                      <p className="text-base font-light text-[#333333] leading-relaxed mb-6">
                        {category.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {category.topics.map((topic) => (
                          <div
                            key={topic}
                            className="bg-white rounded-lg p-4 border border-[rgba(0,0,0,0.08)]"
                          >
                            <p className="text-sm font-medium text-[#000000]">{topic}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Research Principles */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#000000]">
              How Atom Uses Research
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Every design decision in Atom is informed by scientific research. We don't guess—we measure, test, and optimize based on empirical data about how the human brain actually works.
              </p>
              <p>
                This research-driven approach ensures that Atom's interface isn't just beautiful—it's optimized for human performance. Every pixel, every animation, every interaction is calibrated to reduce cognitive load and increase productivity.
              </p>
              <p>
                The result is an interface that feels natural because it aligns with biology, not convention. Users don't need to learn Atom—they already know how to use it, because it works the way their brain works.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most effective interfaces are built on science, not assumptions. Research provides the foundation for design decisions that actually work.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </ScienceLayout>
  );
}

