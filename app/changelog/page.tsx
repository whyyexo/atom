"use client";

import { motion } from "framer-motion";

import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const changelog = [
  {
    version: "2.0.0",
    date: "January 15, 2025",
    improvements: [
      "Redesigned interface with Apple-inspired minimalism",
      "New AI workspace with enhanced automation",
      "Improved real-time collaboration",
      "Faster performance across all features",
    ],
  },
  {
    version: "1.5.0",
    date: "December 10, 2024",
    improvements: [
      "Added markdown export",
      "Improved search functionality",
      "New keyboard shortcuts",
      "Bug fixes and performance improvements",
    ],
  },
  {
    version: "1.4.0",
    date: "November 5, 2024",
    improvements: [
      "Real-time collaboration beta",
      "Enhanced AI features",
      "New workspace templates",
      "Improved mobile experience",
    ],
  },
  {
    version: "1.3.0",
    date: "October 1, 2024",
    improvements: [
      "Dark mode support",
      "New task management features",
      "Improved note organization",
      "API updates",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-[1180px] px-6 py-24 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold text-[#000000] sm:text-6xl">Changelog</h1>
            <p className="text-xl font-light leading-relaxed text-[#333333]">
              Updates and improvements to Atom.
            </p>
          </div>

          <div className="space-y-16">
            {changelog.map((entry, index) => (
              <motion.div
                key={entry.version}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={subtleFade}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-[rgba(0,0,0,0.08)] pb-16 last:border-0"
              >
                <div className="space-y-6">
                  <div className="flex items-baseline gap-4">
                    <h2 className="text-2xl font-semibold text-[#000000]">{entry.version}</h2>
                    <span className="text-sm font-light text-[#333333]">{entry.date}</span>
                  </div>
                  <ul className="space-y-3 text-base font-light text-[#333333]">
                    {entry.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#333333] flex-shrink-0" />
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PublicLayout>
  );
}

