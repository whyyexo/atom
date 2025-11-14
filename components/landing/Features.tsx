"use client";

import { motion } from "framer-motion";
import { FolderKanban, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: FolderKanban,
    title: "Project Spaces",
    description: "Structure and manage any project inside a clean workspace.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Blocks",
    description: "Use intelligent blocks that write, plan, and generate content.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Collaborate in real-time with clean workflows.",
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="h-full rounded-xl border border-gray-200 bg-white p-8 hover:scale-[1.01] transition-transform duration-200">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center">
                    <Icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 [font-family:var(--font-heading)]">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
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
