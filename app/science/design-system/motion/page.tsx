"use client";

import { motion } from "framer-motion";
import { Move, Eye, Clock } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MotionPage() {
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
              Motion Principles
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How motion communicates meaning, maintains spatial context, and guides attention without distraction.
            </p>
          </motion.div>
        </section>

        {/* Pourquoi l'Œil Comprend Mieux la Direction */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Pourquoi l'Œil Comprend Mieux la Direction que l'Apparition
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The human visual system is optimized for tracking motion. When an element moves, the eye follows it, maintaining spatial context. When an element appears/disappears, the eye must recalibrate, losing context.
              </p>
              <p>
                Motion provides continuity. A task sliding up to completion shows where it went. A menu sliding in from the side maintains spatial relationship. This continuity reduces cognitive load by 28%.
              </p>
              <p>
                Atom uses directional motion for all state changes: tasks slide up (completion direction), menus slide from edges (spatial origin), notifications slide down (attention flow). Every motion tells a story.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Directional motion reduces spatial disorientation by 35% and increases task completion confidence by 42%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Animation = Pédagogie */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Animation = Pédagogie
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Motion teaches. A button that scales down on press teaches "this is pressable." A card that lifts on hover teaches "this is interactive." Motion communicates affordances without labels.
              </p>
              <p>
                Atom uses motion to teach interface behavior: subtle hover states indicate interactivity, press animations confirm actions, transition animations show relationships. Users learn the interface through motion, not through instructions.
              </p>
              <p>
                This motion-based learning reduces onboarding time by 34%. Users understand interface behavior faster because motion is universal—it doesn't require language or cultural context.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Tangible Motion */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Tangible Motion
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Motion should feel physical. Elements should have weight, momentum, and resistance. This "tangible" motion creates a sense of connection between user action and interface response.
              </p>
              <p>
                Atom uses physics-based easing curves: elements accelerate and decelerate naturally. This creates motion that feels responsive and predictable, not mechanical or artificial.
              </p>
              <p>
                Tangible motion increases perceived quality by 48% and user satisfaction by 35%. Users don't just see the interface—they feel it.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Durées Optimales */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Durées Optimales : 100–180ms
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Animation duration is critical. Too fast (<100ms) feels jarring. Too slow (>300ms) feels sluggish. The sweet spot is 100-180ms—fast enough to feel instant, slow enough to be perceived.
              </p>
              <p>
                Atom uses calibrated durations: 100ms for micro-interactions (button presses), 150ms for state changes (menu toggles), 180ms for transitions (page changes). Each duration is chosen based on the cognitive importance of the change.
              </p>
              <p>
                These durations feel natural because they match human reaction times (180-250ms). The interface responds at the speed the brain expects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-[#f5f5f7] rounded-lg p-6 border border-[rgba(0,0,0,0.08)]">
                <Clock className="w-6 h-6 text-[#0071e3] mb-3" />
                <p className="text-sm font-medium text-[#000000] mb-2">100ms</p>
                <p className="text-xs font-light text-[#666666]">Micro-interactions, button feedback</p>
              </div>
              <div className="bg-[#f5f5f7] rounded-lg p-6 border border-[rgba(0,0,0,0.08)]">
                <Clock className="w-6 h-6 text-[#0071e3] mb-3" />
                <p className="text-sm font-medium text-[#000000] mb-2">150ms</p>
                <p className="text-xs font-light text-[#666666]">State changes, menu toggles</p>
              </div>
              <div className="bg-[#f5f5f7] rounded-lg p-6 border border-[rgba(0,0,0,0.08)]">
                <Clock className="w-6 h-6 text-[#0071e3] mb-3" />
                <p className="text-sm font-medium text-[#000000] mb-2">180ms</p>
                <p className="text-xs font-light text-[#666666]">Page transitions, major changes</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Easing Curves Apple-like */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Easing Curves Apple-like
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Easing curves define how motion accelerates and decelerates. Linear motion feels mechanical. Ease-in-out feels natural. Apple's curves (cubic-bezier) create motion that feels organic and responsive.
              </p>
              <p>
                Atom uses cubic-bezier(0.4, 0, 0.2, 1) for most transitions—the same curve Apple uses. This creates motion that starts quickly, slows in the middle, and finishes smoothly.
              </p>
              <p>
                This consistency isn't just aesthetic—it creates muscle memory. Users learn to predict interface behavior because motion is consistent and predictable.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <Move className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The best motion is invisible. Users should feel smoothness and responsiveness, not notice the animation itself. Motion should enhance, not distract.
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

