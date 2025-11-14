"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const valueProps = [
  {
    icon: Sparkles,
    title: "Unified Life Workspaces",
    description: "Projects, habits and goals in one living workspace.",
  },
  {
    icon: Brain,
    title: "Personal AI Co-pilot",
    description: "Agents that learn from you and act for you.",
  },
  {
    icon: Zap,
    title: "Automations & Predictions",
    description: "Automate routines and get proactive suggestions.",
  },
];

export function ValueProps() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full rounded-2xl border-border/50 bg-card/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground [font-family:var(--font-heading)]">
                      {prop.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

