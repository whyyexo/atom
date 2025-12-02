"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Zap,
  TrendingUp,
  Info,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { PublicLayout } from "@/components/public/public-layout";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SciencePageClient() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "cognitive-load",
      title: "Cognitive Load Theory",
      icon: Brain,
      description:
        "Based on Sweller's research, we optimize task complexity to prevent cognitive overload.",
      studies: [
        "Sweller, J. (1988). Cognitive load during problem solving: Effects on learning.",
        "Paas, F. (1992). Training strategies for attaining transfer of problem-solving skill.",
      ],
      explanation:
        "Your brain has limited working memory. When tasks exceed this capacity, productivity drops. Atom monitors your cognitive load and suggests task breakdowns.",
    },
    {
      id: "pareto",
      title: "Pareto Principle (80/20)",
      icon: Target,
      description:
        "80% of results come from 20% of efforts. Our AI identifies your high-impact tasks.",
      studies: [
        "Pareto, V. (1896). Cours d'économie politique.",
        "Koch, R. (1997). The 80/20 Principle: The Secret to Achieving More with Less.",
      ],
      explanation:
        "Not all tasks are equal. Atom's AI prioritizes tasks that deliver maximum impact, helping you focus on what truly matters.",
    },
    {
      id: "parkinson",
      title: "Parkinson's Law",
      icon: Zap,
      description:
        "Work expands to fill the time available. We set optimal time limits for tasks.",
      studies: [
        "Parkinson, C. N. (1955). Parkinson's Law: The Pursuit of Progress.",
      ],
      explanation:
        "Without time constraints, tasks take longer than necessary. Atom suggests realistic time estimates to maintain focus and efficiency.",
    },
    {
      id: "deep-work",
      title: "Deep Work",
      icon: TrendingUp,
      description:
        "Cal Newport's research shows focused, distraction-free work produces superior results.",
      studies: [
        "Newport, C. (2016). Deep Work: Rules for Focused Success in a Distracted World.",
      ],
      explanation:
        "Deep work blocks allow for sustained attention, leading to breakthrough insights and high-quality output. Atom schedules these blocks based on your energy patterns.",
    },
  ];

  return (
    <PublicLayout>
      <section className="bg-white px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={subtleFade}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-20"
          >
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#000000] sm:text-6xl lg:text-7xl">
              Why Atom Works
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-[#333333] sm:text-2xl">
              Built on proven scientific research in productivity, neuroscience,
              and cognitive psychology
            </p>
          </motion.div>

          {/* Science Sections */}
          <div className="grid gap-8 md:grid-cols-2 mb-20">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const isExpanded = expandedSection === section.id;

              return (
                <motion.div
                  key={section.id}
                  initial="hidden"
                  animate="visible"
                  variants={subtleFade}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div
                    className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                    onClick={() =>
                      setExpandedSection(
                        isExpanded ? null : section.id
                      )
                    }
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0071e3] to-[#0077ed] flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#000000] mb-2">
                          {section.title}
                        </h3>
                        <p className="text-sm font-light text-[#333333] mb-4">
                          {section.description}
                        </p>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4 pt-4 border-t border-[rgba(0,0,0,0.08)]"
                          >
                            <div className="p-4 rounded-lg bg-[#f5f5f5] border border-[rgba(0,0,0,0.08)]">
                              <h4 className="font-semibold text-[#000000] mb-2">Explanation</h4>
                              <p className="text-sm font-light text-[#333333]">
                                {section.explanation}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-[#000000] mb-3 flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                Studies Cited
                              </h4>
                              <div className="space-y-2">
                                {section.studies.map((study, studyIdx) => (
                                  <div
                                    key={studyIdx}
                                    className="text-xs font-light text-[#333333] p-3 rounded-lg bg-[#f5f5f5] border border-[rgba(0,0,0,0.08)]"
                                  >
                                    {study}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      <button className="ml-2">
                        <Info className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''} text-[#666666]`} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* How It Works */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={subtleFade}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-8 mb-20"
          >
            <h2 className="text-2xl font-semibold text-[#000000] mb-8">How Atom Applies Science</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-lg bg-[#f5f5f5] border border-[rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0071e3]" />
                  <h4 className="font-semibold text-[#000000]">Task Prioritization</h4>
                </div>
                <p className="text-sm font-light text-[#333333]">
                  AI analyzes tasks using Pareto Principle and cognitive load
                  theory
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#f5f5f5] border border-[rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0071e3]" />
                  <h4 className="font-semibold text-[#000000]">Deep Work Scheduling</h4>
                </div>
                <p className="text-sm font-light text-[#333333]">
                  Optimal focus blocks based on your energy patterns and
                  chronobiology
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#f5f5f5] border border-[rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0071e3]" />
                  <h4 className="font-semibold text-[#000000]">Email Intelligence</h4>
                </div>
                <p className="text-sm font-light text-[#333333]">
                  Contextual sorting reduces cognitive switching costs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={subtleFade}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center space-y-6 py-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#000000]">Ready to Experience Science-Based Productivity?</h2>
              <p className="text-lg font-light text-[#333333]">
                Download Atom and start applying these principles to your daily workflow
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}

