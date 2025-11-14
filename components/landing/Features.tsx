"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Calendar,
  Lock,
  MessageSquare,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Memory & context",
    description: "Embeddings that remember your preferences, goals, and patterns across all your data.",
  },
  {
    icon: Calendar,
    title: "Smart calendar sync",
    description: "Automatically syncs with Google Calendar, Outlook, and Apple Calendar. Suggests optimal meeting times.",
  },
  {
    icon: Sparkles,
    title: "Multi-agent workflows",
    description: "Deploy specialized AI agents for different tasks — scheduling, note-taking, goal tracking, and more.",
  },
  {
    icon: Lock,
    title: "Privacy-first controls",
    description: "Your data stays yours. End-to-end encryption, local processing options, and granular privacy controls.",
  },
  {
    icon: MessageSquare,
    title: "Automated summaries & briefs",
    description: "Get daily briefs, meeting summaries, and actionable insights without lifting a finger.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    description: "Share workspaces, collaborate on goals, and sync with your team's calendars and workflows.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 [font-family:var(--font-heading)]">
            Everything you need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features to organize and optimize your life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="h-full rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2 [font-family:var(--font-heading)]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

