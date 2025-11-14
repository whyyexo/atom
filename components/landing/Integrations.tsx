"use client";

import { motion } from "framer-motion";
import { Calendar, Code, FileText, MessageSquare, Palette } from "lucide-react";

const integrations = [
  { name: "Google Calendar", icon: Calendar },
  { name: "Notion", icon: FileText },
  { name: "Slack", icon: MessageSquare },
  { name: "Figma", icon: Palette },
  { name: "GitHub", icon: Code },
];

export function Integrations() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 [font-family:var(--font-heading)]">
            Works with your favorite tools
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect Atom with the apps you already use
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border/50 bg-card/50 group-hover:border-primary/30 transition-colors">
                  <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {integration.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

