"use client";

import { motion } from "framer-motion";

export function WorkspacePreview() {
  return (
    <section id="workspace-preview" className="py-24 sm:py-32 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-12"
        >
          {/* Text */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4 [font-family:var(--font-heading)]">
              A workspace powerful enough to build anything — simple enough to stay out of your way.
            </h2>
          </div>

          {/* Large workspace mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >
            {/* Header */}
            <div className="h-14 border-b border-gray-200 flex items-center px-6 gap-4">
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
              </div>
              <div className="flex-1" />
              <div className="h-8 w-32 rounded bg-gray-100" />
            </div>

            {/* Content area */}
            <div className="p-8">
              {/* Sidebar + Main content layout */}
              <div className="flex gap-8">
                {/* Sidebar */}
                <div className="w-48 space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 w-24 rounded bg-gray-200" />
                    <div className="h-3 w-20 rounded bg-gray-100" />
                    <div className="h-3 w-20 rounded bg-gray-100" />
                    <div className="h-3 w-20 rounded bg-gray-100" />
                  </div>
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <div className="h-3 w-28 rounded bg-gray-100" />
                    <div className="h-3 w-24 rounded bg-gray-100" />
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 space-y-6">
                  {/* Header section */}
                  <div className="space-y-3">
                    <div className="h-8 w-64 rounded bg-gray-200" />
                    <div className="h-4 w-96 rounded bg-gray-100" />
                  </div>

                  {/* Cards grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="space-y-3">
                        <div className="h-32 rounded-lg border border-gray-200 bg-gray-50" />
                        <div className="space-y-2">
                          <div className="h-3 w-full rounded bg-gray-100" />
                          <div className="h-3 w-3/4 rounded bg-gray-100" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom section */}
                  <div className="pt-4 space-y-2">
                    <div className="h-4 w-full rounded bg-gray-100" />
                    <div className="h-4 w-5/6 rounded bg-gray-100" />
                    <div className="h-4 w-4/6 rounded bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

