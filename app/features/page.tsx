"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const features = [
  {
    id: "notes",
    title: "Notes",
    description: "Capture and organize your thoughts in a clean, distraction-free editor. Markdown support, real-time sync, and powerful search.",
  },
  {
    id: "tasks",
    title: "Tasks",
    description: "Smart task management that adapts to your workflow. Prioritize, schedule, and track progress without the complexity.",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Organize related work in focused projects. Each project has its own workspace with tasks, notes, and timelines.",
  },
  {
    id: "ai",
    title: "AI Workspace",
    description: "Built-in AI assistant that helps you generate ideas, clean notes, summarize content, and automate workflows.",
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect with your favorite tools. Import from Notion, sync with Google Calendar, and export to markdown.",
  },
];

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <PublicLayout>
      <div className="mx-auto max-w-[1180px] px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[240px,1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-normal transition-opacity ${
                    activeFeature === feature.id
                      ? "text-[#000000] opacity-100"
                      : "text-[#333333] opacity-60 hover:opacity-100"
                  }`}
                >
                  {feature.title}
                </button>
              ))}
            </nav>
          </aside>

          <main className="space-y-20">
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold text-[#000000] sm:text-6xl">Features</h1>
              <p className="text-xl font-light leading-relaxed text-[#333333]">
                Everything you need to organize your work, all in one place.
              </p>
            </div>

            {features.map((feature, index) => (
              <motion.section
                key={feature.id}
                id={feature.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={subtleFade}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6 border-b border-[rgba(0,0,0,0.08)] pb-20 last:border-0"
              >
                <h2 className="text-3xl font-semibold text-[#000000]">{feature.title}</h2>
                <p className="text-lg font-light leading-relaxed text-[#333333] max-w-2xl">
                  {feature.description}
                </p>
              </motion.section>
            ))}
          </main>
        </div>
      </div>
    </PublicLayout>
  );
}

