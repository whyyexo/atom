"use client";

import { motion } from "framer-motion";
import { Focus, Sparkles, Layers } from "lucide-react";

const benefits = [
  {
    icon: Focus,
    title: "Designed for Focus",
    description: "Scientifically-supported workflows that reduce distractions.",
  },
  {
    icon: Sparkles,
    title: "Clarity Without Overwhelm",
    description: "A minimal system that brings structure to your day.",
  },
  {
    icon: Layers,
    title: "Your Life, Organized",
    description: "Notes, tasks, habits and routines in one connected place.",
  },
];

export function WhyAtom() {
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
            Why ATOM
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Science meets productivity. Built for the way your mind actually works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-muted/30 dark:from-black dark:to-muted/10 border border-border/50 hover:border-border transition-all hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
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









