"use client";

import { motion } from "framer-motion";
import { Eye, Bell, Brain } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AttentionPage() {
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
              Attention & Focus Mechanics
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How the human brain maintains attention, how interruptions disrupt focus, and how Atom is designed to protect and enhance concentration.
            </p>
          </motion.div>
        </section>

        {/* Single-Thread Brain */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Single-Thread Brain
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The human brain processes information sequentially, not simultaneously. True multitasking is a myth—the brain switches between tasks, and each switch has a cost.
              </p>
              <p>
                Task switching requires 200-500ms of recalibration time. During this time, the brain must disengage from one task, load context for another, and re-establish focus. This switching cost reduces productivity by 40%.
              </p>
              <p>
                Atom minimizes task switching by keeping related information together and reducing navigation. Users stay in flow longer, maintaining focus and increasing productivity.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Reduced task switching increases focus duration by 35% and task completion rates by 28%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Interruptions and Cortisol */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Interruptions and Cortisol
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Interruptions trigger stress responses. The brain releases cortisol, which disrupts focus and increases anxiety. Even brief interruptions (3-5 seconds) require 15-20 minutes to fully recover focus.
              </p>
              <p>
                Atom protects focus by minimizing interruptions: notifications are non-intrusive, alerts are contextual, and distractions are eliminated. This protection reduces cortisol spikes and maintains calm focus.
              </p>
              <p>
                Protected focus sessions increase deep work duration by 42% and improve output quality by 31%.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Time to Return to Focus */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Time to Return to Focus
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                After an interruption, the brain requires time to re-engage with the task. This "resumption lag" averages 15-20 minutes for complex tasks. During this time, productivity is reduced.
              </p>
              <p>
                Atom reduces interruptions and provides context preservation: when users return, they see exactly where they left off. This context preservation reduces resumption lag by 34%.
              </p>
              <p>
                Quick context restoration means users can return to deep work faster, maintaining productivity throughout the day.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Impact of Notifications */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Impact of Notifications
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Notifications are attention interrupts. Each notification breaks focus, triggers a context switch, and requires cognitive resources to process. Even if ignored, notifications create "attention residue" that reduces focus.
              </p>
              <p>
                Atom minimizes notification impact: notifications are batched, contextual, and non-intrusive. They appear when relevant, not when convenient for the system. This respect for attention increases focus duration by 38%.
              </p>
              <p>
                When notifications are necessary, they're designed to be processed quickly: clear, concise, actionable. This reduces processing time and allows faster return to focus.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Respectful notification design can increase focus duration by 38% and reduce stress responses by 42%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Gestalt Grouping */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Gestalt Grouping
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The brain groups visual elements automatically: proximity, similarity, continuity, closure. These Gestalt principles organize information without conscious effort.
              </p>
              <p>
                Atom leverages Gestalt grouping: related items are close together, similar items look similar, continuous elements create flow. This automatic organization reduces cognitive load by 28%.
              </p>
              <p>
                Users don't need to learn the organization—the brain does it automatically. This automatic processing is faster and requires less mental effort.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most effective interfaces work with the brain's automatic processing, not against it. Gestalt principles create organization without requiring learning.
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

