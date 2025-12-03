"use client";

import { motion } from "framer-motion";
import { Timer, TrendingUp, Sparkles } from "lucide-react";

const scienceFeatures = [
  {
    icon: Timer,
    title: "Deep Work Timer",
    description: "Based on productive interval research. Optimize your focus sessions.",
  },
  {
    icon: TrendingUp,
    title: "Attention Score",
    description: "Measures how consistent you are. Track your focus patterns over time.",
  },
  {
    icon: Sparkles,
    title: "Flow Recommender",
    description: "Suggests your next best action. AI-powered workflow optimization.",
  },
];

export function ScienceSection() {
  return (
    <section className="section-spacing bg-white dark:bg-black">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Science-Backed Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on research. Designed for results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {scienceFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}







