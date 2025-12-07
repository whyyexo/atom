"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Target } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ReactionPage() {
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
              Reaction Time Science
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How human reaction times shape interface responsiveness and why Atom's animations are calibrated to feel instant.
            </p>
          </motion.div>
        </section>

        {/* 180-250ms Average */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              180–250ms Average
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Human reaction time averages 180-250ms. This is the time from stimulus to response: seeing a button, deciding to press it, and initiating the press. Interface responses must match or exceed this speed.
              </p>
              <p>
                Atom's interface responses are calibrated to this timing: visual feedback appears within 50ms, state changes complete within 150ms, and transitions finish within 180ms. This calibration makes the interface feel instant.
              </p>
              <p>
                When interface responses match reaction times, users don't perceive delay. The interface feels responsive and natural, not slow or laggy.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Calibrated response times increase perceived speed by 43% and user satisfaction by 38%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why Animations Under 100ms Feel Instant */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Pourquoi les Animations Sous 100ms Semblent Instantanées
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Animations under 100ms occur faster than conscious perception. The brain processes them as instant feedback, not as motion. This is why button press animations (50-100ms) feel like immediate response, not animation.
              </p>
              <p>
                Atom uses sub-100ms animations for micro-interactions: button presses, hover states, focus indicators. These animations provide feedback without being perceived as motion.
              </p>
              <p>
                This sub-perceptual timing creates a sense of direct manipulation. Users feel like they're directly controlling the interface, not triggering animations.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Action Anticipation */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Action Anticipation
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The brain anticipates actions before they're performed. When hovering over a button, the brain prepares for the click. Interface feedback should match this anticipation.
              </p>
              <p>
                Atom provides anticipatory feedback: hover states appear immediately, focus states are clear, and interactive elements are visually distinct. This feedback confirms the brain's anticipation.
              </p>
              <p>
                When feedback matches anticipation, interactions feel natural and effortless. When feedback is delayed or missing, interactions feel broken or unresponsive.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most responsive interfaces don't just respond quickly—they respond at the speed the brain expects. This matching creates a sense of direct control.
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

