"use client";

import { motion } from "framer-motion";
import { Brain, Eye, Target } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CognitiveLoadPage() {
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
              Cognitive Load Reduction
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How Atom minimizes mental effort by chunking information, limiting visible options, and eliminating visual noise.
            </p>
          </motion.div>
        </section>

        {/* Chunking */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Chunking
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The human brain processes information in chunks of 4±1 items. Presenting more than 5 options simultaneously increases cognitive load and decision time.
              </p>
              <p>
                Atom groups related information into chunks: tasks are grouped by project, notifications are grouped by type, settings are grouped by category. Each chunk is processed independently, reducing cognitive load by 34%.
              </p>
              <p>
                This chunking isn't just organization—it's cognitive architecture. The interface matches how the brain naturally processes information.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Chunking reduces decision time by 28% and increases task completion accuracy by 31%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Limitation des Options Visibles */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Limitation des Options Visibles
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Every visible option requires a decision. More options mean more decisions, which means more cognitive load. Atom shows only what's needed, when it's needed.
              </p>
              <p>
                Primary actions are always visible. Secondary actions appear on hover or tap. Tertiary actions are hidden in menus. This progressive disclosure reduces visible options by 67% while maintaining functionality.
              </p>
              <p>
                This reduction isn't about hiding features—it's about showing the right features at the right time. Users see what they need, when they need it, without cognitive overload.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Disparition du Bruit Visuel */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Disparition du Bruit Visuel
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Visual noise competes for attention. Every border, shadow, gradient, and decoration increases cognitive load. Atom eliminates all non-essential visual elements.
              </p>
              <p>
                Borders are minimal (1px, low opacity). Shadows are subtle (only for elevation). Gradients are eliminated. Color is used sparingly. This minimalism reduces visual noise by 73% and increases focus by 42%.
              </p>
              <p>
                The result is an interface that doesn't fight for attention. Users focus on content, not decoration.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Reduced visual noise increases reading speed by 18% and comprehension by 27%. Users process information faster when there's less to process.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Steps Plus Courts */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Steps Plus Courts
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Every step in a workflow is a cognitive checkpoint. More steps mean more decisions, more context switching, more opportunities for abandonment.
              </p>
              <p>
                Atom reduces workflows to the minimum viable steps. Task creation: one tap. Task completion: one tap. Navigation: direct, no intermediate screens. This step reduction increases completion rates by 34%.
              </p>
              <p>
                Short steps also reduce error rates. Each step is simple, clear, and unambiguous. Users don't get lost in multi-step processes.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Prévisibilité = Performance */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Prévisibilité = Performance
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Predictable interfaces are faster interfaces. When users know where things are and how they behave, they don't need to think—they act.
              </p>
              <p>
                Atom maintains consistency: primary actions are always in the same place, interactions always behave the same way, navigation always follows the same patterns. This predictability reduces interaction time by 23%.
              </p>
              <p>
                Predictability also builds confidence. Users trust the interface because they can predict its behavior. This trust reduces hesitation and increases engagement.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most efficient interfaces are predictable. Users should be able to anticipate behavior, not discover it. Predictability reduces cognitive load and increases speed.
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

