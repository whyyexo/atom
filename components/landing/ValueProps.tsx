"use client";

import { motion } from "framer-motion";
import { FolderKanban, Sparkles, Users } from "lucide-react";

const valueProps = [
  {
    icon: FolderKanban,
    title: "Workspaces",
    description: "Organize projects with clarity and precision.",
  },
  {
    icon: Sparkles,
    title: "AI-powered blocks",
    description: "Structured intelligent components.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    description: "Synchronized, fast, frictionless.",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 sm:py-32 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-16">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="group"
              >
                <div className="flex flex-col items-start">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center">
                    <Icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white mb-3 [font-family:var(--font-heading)] group-hover:text-primary transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed">
                    {prop.description}
                  </p>
                  <div className="mt-4 h-px w-0 bg-primary group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

