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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";

export default function SciencePage() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-black dark:to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-semibold tracking-tight">
            Why Atom Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built on proven scientific research in productivity, neuroscience,
            and cognitive psychology
          </p>
        </motion.div>

        {/* Science Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
                  <CardHeader>
                    <div
                      className="flex items-start justify-between"
                      onClick={() =>
                        setExpandedSection(
                          isExpanded ? null : section.id
                        )
                      }
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            {section.title}
                          </CardTitle>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {section.description}
                          </p>
                        </div>
                      </div>
                      <button className="ml-4">
                        <Info className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </CardHeader>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <CardContent className="pt-0 space-y-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-black/60 dark:to-gray-900/60 border border-black/5 dark:border-white/5">
                          <h4 className="font-semibold mb-2">Explanation</h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {section.explanation}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Studies Cited
                          </h4>
                          <div className="space-y-2">
                            {section.studies.map((study, studyIdx) => (
                              <div
                                key={studyIdx}
                                className="text-xs text-gray-600 dark:text-gray-400 p-2 rounded-lg bg-gray-50 dark:bg-gray-900"
                              >
                                {study}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* How It Works */}
        <Card className="rounded-3xl border-0 bg-gradient-to-br from-[#007AFF]/10 to-[#5856D6]/10 dark:from-[#007AFF]/20 dark:to-[#5856D6]/20 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">How Atom Applies Science</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-black/60">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-[#34C759]" />
                  <h4 className="font-semibold">Task Prioritization</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  AI analyzes tasks using Pareto Principle and cognitive load
                  theory
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-black/60">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-[#34C759]" />
                  <h4 className="font-semibold">Deep Work Scheduling</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Optimal focus blocks based on your energy patterns and
                  chronobiology
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-black/60">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-[#34C759]" />
                  <h4 className="font-semibold">Email Intelligence</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Contextual sorting reduces cognitive switching costs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-6 py-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Ready to Experience Science-Based Productivity?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Download Atom and start applying these principles to your daily workflow
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
