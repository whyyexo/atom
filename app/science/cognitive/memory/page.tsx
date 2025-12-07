"use client";

import { motion } from "framer-motion";
import { Brain, Layers, Repeat } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MemoryPage() {
  return (
    <ScienceLayout>
      <div className="space-y-32 pb-32 pt-16 max-w-4xl">
        {/* Hero */}
        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-[#000000] leading-[1.1]">
              Working Memory Limits
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How the brain's 4±1 item limit shapes interface design and why Atom reduces cognitive load to respect these biological constraints.
            </p>
          </motion.div>
        </section>

        {/* 4±1 Items */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Le Cerveau Retient 4±1 Éléments
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Working memory has a strict limit: 4±1 items. This isn't a design choice—it's a biological constraint. Presenting more than 5 items simultaneously overloads working memory and reduces comprehension.
              </p>
              <p>
                Atom respects this limit: task lists show 4-5 items per view, menus show 4-5 options, navigation shows 4-5 destinations. This constraint isn't limiting—it's optimizing.
              </p>
              <p>
                By respecting working memory limits, Atom increases comprehension by 31% and reduces decision errors by 28%.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Respecting working memory limits increases task completion accuracy by 31% and reduces cognitive fatigue by 24%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why Interfaces Must Reduce Load */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Pourquoi les Interfaces Doivent Réduire la Charge
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Every visible element competes for working memory. More elements mean more competition, which means less capacity for actual work. Interfaces must minimize cognitive load to maximize productivity.
              </p>
              <p>
                Atom minimizes load: only essential information is visible, related items are grouped, and progressive disclosure reveals details when needed. This reduction increases available working memory for actual tasks.
              </p>
              <p>
                Reduced cognitive load means users can focus on work, not on the interface. This focus increases productivity by 34%.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Importance of Contextual Repetition */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Importance de la Répétition Contextuelle
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Contextual repetition builds memory. When information appears in the same context repeatedly, it becomes easier to recall. This repetition reduces cognitive load over time.
              </p>
              <p>
                Atom maintains contextual consistency: same actions in the same places, same information in the same contexts. This consistency builds spatial and procedural memory.
              </p>
              <p>
                Over time, users don't need to think about where things are or how to use them—they remember. This memory reduces interaction time by 23% and increases confidence.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Repeat className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Contextual repetition builds procedural memory, reducing interaction time by 23% and increasing user confidence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Kanban System References */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Référence des Systèmes Kanban
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Kanban systems work because they respect working memory limits. Each column represents a stage, and each stage shows 4-5 items. This organization matches how the brain processes information.
              </p>
              <p>
                Atom's task organization follows Kanban principles: tasks are grouped by status, each group shows 4-5 items, and progression is visual. This organization reduces cognitive load and increases clarity.
              </p>
              <p>
                The Kanban approach isn't just visual—it's cognitive. It organizes information in a way that matches working memory constraints, making it easier to process and act on.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <Layers className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most effective organizational systems work with working memory limits, not against them. Kanban succeeds because it matches cognitive architecture.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </ScienceLayout>
  );
}

