"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const docSections = [
  {
    id: "introduction",
    title: "Introduction",
    content: "Atom is a productivity workspace that combines tasks, notes, and AI-powered workflows. This documentation will help you get started and make the most of Atom.",
  },
  {
    id: "api",
    title: "API",
    content: "Atom provides a RESTful API for programmatic access. All API requests require authentication using your API key. Base URL: https://api.atom.com/v1",
  },
  {
    id: "workspaces",
    title: "Workspaces",
    content: "Workspaces are containers for your projects, tasks, and notes. Create a workspace to organize related work. Each workspace can have multiple projects and unlimited notes.",
  },
  {
    id: "collaboration",
    title: "Real-time Collaboration",
    content: "Share workspaces with your team. Changes sync in real-time. Use comments and mentions to collaborate on tasks and notes.",
  },
  {
    id: "authentication",
    title: "Authentication",
    content: "Atom uses API keys for authentication. Generate an API key in your settings. Include it in the Authorization header: Authorization: Bearer YOUR_API_KEY",
  },
  {
    id: "limits",
    title: "Limits",
    content: "Free plan: 3 projects, unlimited notes. Pro plan: Unlimited projects, unlimited notes, advanced AI features. Rate limits: 100 requests per minute per API key.",
  },
];

const docCategories = [
  { id: "getting-started", label: "Getting Started", sections: ["introduction"] },
  { id: "api", label: "API", sections: ["api", "authentication", "limits"] },
  { id: "features", label: "Features", sections: ["workspaces", "collaboration"] },
];

export default function DocsPage() {
  const [activeCategory, setActiveCategory] = useState(docCategories[0].id);

  return (
    <PublicLayout>
      <div className="mx-auto max-w-[1180px] px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[240px,1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-8">
              {docCategories.map((category) => (
                <div key={category.id}>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={`mb-4 text-sm font-semibold ${
                      activeCategory === category.id
                        ? "text-[#000000]"
                        : "text-[#333333] opacity-60"
                    }`}
                  >
                    {category.label}
                  </button>
                  <div className="space-y-2">
                    {category.sections.map((sectionId) => {
                      const section = docSections.find((s) => s.id === sectionId);
                      if (!section) return null;
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className="block px-4 py-2 text-sm font-normal text-[#333333] opacity-60 hover:opacity-100 transition-opacity"
                        >
                          {section.title}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          <main className="space-y-20">
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold text-[#000000] sm:text-6xl">Documentation</h1>
              <p className="text-xl font-light leading-relaxed text-[#333333]">
                Everything you need to know about using Atom.
              </p>
            </div>

            {docSections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={subtleFade}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6 border-b border-[rgba(0,0,0,0.08)] pb-20 last:border-0"
              >
                <h2 className="text-3xl font-semibold text-[#000000]">{section.title}</h2>
                <div className="prose prose-sm max-w-none">
                  <p className="text-lg font-light leading-relaxed text-[#333333]">
                    {section.content}
                  </p>
                </div>
                {section.id === "api" && (
                  <div className="mt-6 rounded-lg border border-[rgba(0,0,0,0.08)] bg-[#f5f5f5] p-4">
                    <pre className="text-sm font-mono text-[#333333]">
                      <code>GET /api/v1/workspaces</code>
                    </pre>
                  </div>
                )}
              </motion.section>
            ))}
          </main>
        </div>
      </div>
    </PublicLayout>
  );
}

