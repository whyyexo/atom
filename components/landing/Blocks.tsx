"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Layout,
  Route,
  Sparkles,
  Zap,
  Square,
} from "lucide-react";

const blocks = [
  { icon: FileText, label: "Text" },
  { icon: Layout, label: "Document" },
  { icon: Square, label: "Board" },
  { icon: Route, label: "Roadmap" },
  { icon: Sparkles, label: "AI Action" },
  { icon: Zap, label: "Automation" },
];

export function Blocks() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4 [font-family:var(--font-heading)]">
              The building blocks
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Everything you need to organize and automate your work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {blocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={block.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-200 bg-white">
                    <Icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <span className="text-[15px] font-medium text-gray-900">{block.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

