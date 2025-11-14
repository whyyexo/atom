"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Layout,
  Route,
  Zap,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Documents",
    description: "Create, organize, and collaborate on documents with intelligent structure.",
  },
  {
    icon: Layout,
    title: "Boards",
    description: "Visual project management with flexible board layouts and workflows.",
  },
  {
    icon: Route,
    title: "Roadmaps",
    description: "Plan and track your projects with clear timelines and milestones.",
  },
  {
    icon: Zap,
    title: "Automations",
    description: "Streamline repetitive tasks with powerful automation workflows.",
  },
  {
    icon: Sparkles,
    title: "AI agents",
    description: "Intelligent assistants that learn from your work and help you execute.",
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="max-w-3xl">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLast = index === features.length - 1;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="py-8"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center">
                      <Icon className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-white mb-2 [font-family:var(--font-heading)]">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {!isLast && (
                  <div className="mt-8 h-px bg-[#1c1c1c]" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
