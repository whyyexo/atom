"use client";

import { motion } from "framer-motion";
import { Atom, Zap, Target, Calendar } from "lucide-react";

const osFeatures = [
  {
    icon: Atom,
    title: "Atomic Notes",
    description: "Break ideas into their smallest, most connected parts.",
  },
  {
    icon: Zap,
    title: "Atomic Tasks",
    description: "Tasks that decompose naturally into actionable steps.",
  },
  {
    icon: Target,
    title: "Flow Cycles",
    description: "Work in focused cycles that match your energy.",
  },
  {
    icon: Calendar,
    title: "Smart Priorities",
    description: "AI-assisted prioritization based on your goals.",
  },
];

export function AtomOS() {
  return (
    <section className="section-spacing bg-white dark:bg-black">
      <div className="container-padding max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
              ATOM OS
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your Personal Productivity System
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              ATOM is not "just another todo app". It's a framework, mixing minimalism + behavioral science.
            </p>

            <div className="space-y-6">
              {osFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200/50 dark:border-blue-800/30"
            >
              <p className="text-sm font-medium text-foreground mb-2">
                Weekly Review System
              </p>
              <p className="text-sm text-muted-foreground">
                Built-in reflection cycles that help you learn and improve continuously.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-border/50 p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1),transparent_70%)] rounded-2xl" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Atom className="w-24 h-24 text-blue-600/30 dark:text-blue-400/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



