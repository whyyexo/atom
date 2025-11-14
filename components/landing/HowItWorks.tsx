"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Link2, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Sparkles,
    title: "Create workspace",
    description: "Set up your personal AI workspace in seconds. Connect your calendar, notes, and goals.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Connect apps & files",
    description: "Integrate with Google Calendar, Notion, Slack, and more. Atom learns from your existing data.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Let Atom optimize your day",
    description: "Your AI co-pilot suggests actions, automates routines, and helps you stay on track.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 [font-family:var(--font-heading)]">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-px bg-border/50 -translate-x-1/2">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                      className="h-full bg-primary origin-left"
                    />
                  </div>
                )}
                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-6xl font-bold text-muted-foreground/20 [font-family:var(--font-heading)]">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-3 [font-family:var(--font-heading)]">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

