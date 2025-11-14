"use client";

import { motion } from "framer-motion";

export function Showcase() {
  return (
    <section id="showcase" className="py-24 sm:py-32 bg-[#0a0a0a] scroll-mt-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white [font-family:var(--font-heading)] leading-[1.1]">
              A clean workspace
              <br />
              built for thinking, planning, and building.
            </h2>
          </motion.div>

          {/* Large workspace mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="rounded-2xl border border-[#1c1c1c] bg-[#0f0f0f] shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden">
              {/* Header */}
              <div className="h-14 border-b border-[#1c1c1c] flex items-center px-6 gap-4">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#2a2a2a]" />
                  <div className="h-2 w-2 rounded-full bg-[#2a2a2a]" />
                  <div className="h-2 w-2 rounded-full bg-[#2a2a2a]" />
                </div>
                <div className="flex-1" />
                <div className="h-8 w-32 rounded bg-[#1c1c1c]" />
              </div>

              {/* Content area */}
              <div className="p-8">
                {/* Sidebar + Main content layout */}
                <div className="flex gap-8">
                  {/* Sidebar */}
                  <div className="w-48 space-y-4">
                    <div className="space-y-2">
                      <div className="h-4 w-24 rounded bg-[#1c1c1c]" />
                      <div className="h-3 w-20 rounded bg-[#1c1c1c]" />
                      <div className="h-3 w-20 rounded bg-[#1c1c1c]" />
                      <div className="h-3 w-20 rounded bg-[#1c1c1c]" />
                    </div>
                    <div className="pt-4 border-t border-[#1c1c1c] space-y-2">
                      <div className="h-3 w-28 rounded bg-[#1c1c1c]" />
                      <div className="h-3 w-24 rounded bg-[#1c1c1c]" />
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 space-y-6">
                    {/* Header section */}
                    <div className="space-y-3">
                      <div className="h-8 w-64 rounded bg-[#1c1c1c]" />
                      <div className="h-4 w-96 rounded bg-[#1c1c1c]" />
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="space-y-3">
                          <div className="h-32 rounded-lg border border-[#1c1c1c] bg-[#0a0a0a]" />
                          <div className="space-y-2">
                            <div className="h-3 w-full rounded bg-[#1c1c1c]" />
                            <div className="h-3 w-3/4 rounded bg-[#1c1c1c]" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom section */}
                    <div className="pt-4 space-y-2">
                      <div className="h-4 w-full rounded bg-[#1c1c1c]" />
                      <div className="h-4 w-5/6 rounded bg-[#1c1c1c]" />
                      <div className="h-4 w-4/6 rounded bg-[#1c1c1c]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

