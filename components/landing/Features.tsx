"use client";

import { motion } from "framer-motion";
import {
  CheckSquare,
  FileText,
  Calendar,
  RotateCcw,
  Target,
  Brain,
  Timer,
} from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Tasks & Projects",
    description: "Atomic task management that scales with your workflow.",
  },
  {
    icon: FileText,
    title: "Notes & Documents",
    description: "Connected knowledge that grows with your thinking.",
  },
  {
    icon: Calendar,
    title: "Daily Planning",
    description: "Structure your day with science-backed time blocks.",
  },
  {
    icon: RotateCcw,
    title: "Routine Builder",
    description: "Build consistent habits that stick.",
  },
  {
    icon: Target,
    title: "Habit Tracking",
    description: "Visual progress that motivates and informs.",
  },
  {
    icon: Brain,
    title: "Science-Backed Focus Tools",
    description: "Pomodoro, Timeboxing, Deep-Work Cycles.",
  },
];

export function Features() {
  return (
    <section id="features" className="section-spacing bg-gradient-to-b from-white to-muted/20 dark:from-black dark:to-muted/10">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete productivity system, thoughtfully designed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-border/50 hover:border-border hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
