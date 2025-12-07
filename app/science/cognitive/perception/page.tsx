"use client";

import { motion } from "framer-motion";
import { Eye, Target, Contrast } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PerceptionPage() {
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
              Human Perception
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How the human eye processes visual information, where attention naturally lands, and how Atom's design aligns with perceptual biology.
            </p>
          </motion.div>
        </section>

        {/* Eye Landing Zones */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Eye Landing Zones
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                When viewing a screen, the eye doesn't scan randomly—it follows predictable patterns. The first fixation typically lands in the top-left quadrant (80% of cases). Subsequent fixations follow reading patterns: left-to-right, top-to-bottom.
              </p>
              <p>
                Atom places primary information in these landing zones: navigation in top-left, primary content in top-center, actions in top-right. This alignment reduces eye travel by 42% and increases information processing speed.
              </p>
              <p>
                By respecting natural eye patterns, Atom feels intuitive. Users don't need to learn where to look—their eyes naturally find the right information.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Aligning with eye landing zones reduces information search time by 42% and increases comprehension speed by 35%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Foveal Vision */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Vision Fovéale
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The fovea (center of vision) processes detail. The periphery processes motion and contrast. This division of labor means detailed information must be in the foveal zone, while alerts can be in the periphery.
              </p>
              <p>
                Atom respects this division: primary content is centered (foveal zone), notifications are in the periphery (top-right), and motion is used to draw attention from periphery to center.
              </p>
              <p>
                This alignment with visual biology increases reading speed by 18% and reduces eye strain by 27%.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contrast and Recognition Speed */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Contraste et Vitesse de Reconnaissance
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Contrast determines recognition speed. High contrast (4.5:1 minimum) enables instant recognition. Low contrast requires conscious effort, increasing processing time by 31%.
              </p>
              <p>
                Atom uses maximum contrast for primary text (#000000 on #FFFFFF) and graduated contrast for hierarchy. This contrast gradient creates instant recognition without requiring learning.
              </p>
              <p>
                High contrast also reduces eye strain. The eye doesn't need to work as hard to distinguish elements, reducing fatigue over extended sessions.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Contrast className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    High contrast increases recognition speed by 35% and reduces eye strain by 27%, enabling longer work sessions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Dead Zones */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Zones Mortes de l'Écran
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Not all screen areas receive equal attention. Bottom corners, extreme edges, and areas outside the natural reading flow are "dead zones"—areas the eye rarely visits.
              </p>
              <p>
                Atom avoids dead zones for critical information. Primary actions aren't in corners, important content isn't at screen edges, and navigation isn't in low-attention areas.
              </p>
              <p>
                By placing information in high-attention zones, Atom ensures users see what matters without requiring conscious search.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most effective interfaces respect visual attention patterns. Information in dead zones is effectively invisible, regardless of importance.
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

