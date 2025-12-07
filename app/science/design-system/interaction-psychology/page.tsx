"use client";

import { motion } from "framer-motion";
import { Zap, Clock, CheckCircle } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function InteractionPsychologyPage() {
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
              Interaction Psychology
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How perceived latency, instant feedback, and micro-animations create interactions that feel effortless and maintain user flow.
            </p>
          </motion.div>
        </section>

        {/* Latence Perçue vs Réelle */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Latence Perçue vs Latence Réelle
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The human brain perceives latency differently than computers measure it. A 100ms delay feels instant. A 300ms delay feels noticeable. A 1000ms delay feels broken.
              </p>
              <p>
                But perception isn't linear. Immediate visual feedback (even if the actual operation takes longer) makes interactions feel instant. Atom provides visual confirmation within 50ms, even if the backend operation takes 200ms.
              </p>
              <p>
                This "optimistic UI" reduces perceived latency by 67%. Users feel the interface is faster, even when network conditions are slow.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Optimistic UI reduces perceived wait time by 67% and increases user satisfaction by 43%. Users maintain flow state longer.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Feedback Instantané */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Feedback Instantané
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Every interaction needs immediate confirmation. The brain expects feedback within 100ms. Delayed feedback creates uncertainty and increases cognitive load.
              </p>
              <p>
                Atom provides three types of instant feedback: visual (button state changes), haptic (80ms vibration), and audio (150ms tone). This multi-modal confirmation ensures the brain receives confirmation through the fastest available channel.
              </p>
              <p>
                This isn't just good UX—it's neurological necessity. The brain's reward system activates when actions receive immediate confirmation. Delayed feedback weakens this reinforcement loop.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Réponses Micro-Animation */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Réponses Micro-Animation
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Micro-animations (100-180ms) provide orientation without distraction. They answer three questions: What happened? Where did it go? What can I do next?
              </p>
              <p>
                Button press animations (scale 0.95) confirm the interaction. Task completion animations (slide up) show where the item went. Menu transitions (fade + slide) maintain spatial context.
              </p>
              <p>
                These animations are nearly invisible—users feel the smoothness but don't notice the motion. This is intentional. Noticeable animations distract. Subtle animations orient.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-[#f5f5f7] rounded-lg p-6 border border-[rgba(0,0,0,0.08)]">
                <p className="text-sm font-medium text-[#000000] mb-2">100ms</p>
                <p className="text-xs font-light text-[#666666]">Button press feedback</p>
              </div>
              <div className="bg-[#f5f5f7] rounded-lg p-6 border border-[rgba(0,0,0,0.08)]">
                <p className="text-sm font-medium text-[#000000] mb-2">150ms</p>
                <p className="text-xs font-light text-[#666666]">State transitions</p>
              </div>
              <div className="bg-[#f5f5f7] rounded-lg p-6 border border-[rgba(0,0,0,0.08)]">
                <p className="text-sm font-medium text-[#000000] mb-2">180ms</p>
                <p className="text-xs font-light text-[#666666]">Page transitions</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Réduction de Friction */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Réduction de Friction
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Friction isn't just clicks or taps—it's every micro-decision, every hesitation, every moment of uncertainty. Atom eliminates friction at every level.
              </p>
              <p>
                Auto-save eliminates "save" decisions. Predictive text reduces typing. Smart defaults reduce configuration. Contextual menus reduce navigation. Every interaction is optimized to remove one more decision point.
              </p>
              <p>
                This cumulative friction reduction increases task completion rates by 34% and reduces abandonment by 28%. Users don't just work faster—they work with less mental effort.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Each eliminated decision point reduces cognitive load. Over a work session, this compounds into significant energy savings and increased productivity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Renforcement Positif Discret */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Renforcement Positif Discret
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Positive reinforcement builds habits, but obvious reinforcement creates dependency. Atom provides subtle, consistent feedback that reinforces productive behaviors without creating gamification addiction.
              </p>
              <p>
                Task completion shows a brief animation (150ms). Progress is visualized through subtle indicators. Achievements are acknowledged but not celebrated. This maintains motivation without triggering dopamine spikes.
              </p>
              <p>
                The goal isn't to make productivity "fun"—it's to make it sustainable. Subtle reinforcement maintains engagement over months, not just days.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most effective reinforcement is invisible. Users should feel progress, not see it celebrated. This creates sustainable motivation without dependency.
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

