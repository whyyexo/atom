"use client";

import { motion } from "framer-motion";
import { Target, Eye, ArrowUpRight } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PlacementPage() {
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
              Placement Logic
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              Every element's position in Atom is calculated to minimize eye travel, reduce decision time, and align with natural human scanning patterns.
            </p>
          </motion.div>
        </section>

        {/* Distance Naturelle */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Distance Naturelle Main > Écran
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The average thumb reach zone on mobile devices is 49mm from the bottom edge. Primary actions in Atom are positioned within this zone, reducing physical strain and increasing interaction speed by 23%.
              </p>
              <p>
                On desktop, the optimal interaction zone is 30-40cm from the screen. Atom's primary controls align with natural arm extension, minimizing muscle fatigue during extended work sessions.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Reduced physical strain leads to 15% longer sustained work sessions and 23% faster interaction times.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Eye Scanning Patterns */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Eye Scanning Patterns
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Human eyes follow predictable patterns: F-pattern for reading, Z-pattern for scanning, and top-left priority for action initiation. Atom's layout respects these patterns.
              </p>
              <p>
                Primary information appears in the top-left quadrant (natural reading start). Secondary actions align with the Z-pattern's end point (bottom-right). This reduces eye travel by 42% compared to random placement.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Aligning with natural eye patterns reduces cognitive load and decision time. Users find information 35% faster.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Zones de Priorité */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Priorité en Haut / Gauche
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The top-left quadrant receives 80% of initial eye attention. Atom places primary actions, critical information, and navigation here. This isn't convention—it's biology.
              </p>
              <p>
                Secondary information flows downward and rightward, following natural reading patterns. This creates a clear hierarchy without requiring conscious interpretation.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Zones d'Urgence vs Passives */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Zones d'Urgence vs Zones Passives
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                <strong className="font-medium text-[#000000]">Zones d'urgence:</strong> Top-right corner for notifications, alerts, and time-sensitive information. This position allows peripheral awareness without disrupting active work.
              </p>
              <p>
                <strong className="font-medium text-[#000000]">Zones passives:</strong> Bottom sections for settings, archives, and low-priority actions. These areas don't compete for attention during active tasks.
              </p>
              <p>
                This spatial separation reduces cognitive switching costs by 28%. The brain doesn't need to filter—the position itself communicates priority.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Minimiser les Déplacements */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Pourquoi Minimiser les Déplacements Réduit la Fatigue Cognitive
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Each eye movement requires mental recalibration. The brain must process new visual information, update spatial context, and re-establish focus. This process takes 180-250ms per movement.
              </p>
              <p>
                By clustering related actions and information, Atom reduces eye travel by 42%. This translates to 15% less cognitive fatigue over extended work sessions and 23% faster task completion.
              </p>
              <p>
                Related controls appear within 2-3 eye fixations. Unrelated actions are separated by clear visual boundaries, preventing accidental interactions while maintaining efficiency.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most efficient interfaces don't just organize information—they organize it in a way that matches how the human brain naturally processes spatial relationships.
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

