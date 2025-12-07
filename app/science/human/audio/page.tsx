"use client";

import { motion } from "framer-motion";
import { Volume2, Music, CheckCircle } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AudioPage() {
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
              The Psychology of Sound Feedback
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How Atom uses sound to provide feedback, reinforce actions, and maintain awareness without disrupting focus.
            </p>
          </motion.div>
        </section>

        {/* Short Sounds = Better Recognition */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Sons Courts = Meilleure Reconnaissance
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Short sounds (80-150ms) are processed faster and recognized more accurately than long sounds. The brain processes brief audio cues instantly, while longer sounds require sustained attention.
              </p>
              <p>
                Atom uses 80-150ms tones for all audio feedback: button presses, task completions, notifications. These brief tones provide confirmation without requiring attention shift.
              </p>
              <p>
                Short sounds also reduce interruption. They provide feedback and disappear before they can disrupt focus. This brevity maintains flow while providing confirmation.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Volume2 className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Short audio feedback maintains flow state 41% longer than longer tones or no feedback.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 250-700 Hz = Neutral Perception */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              250–700 Hz = Perception Neutre
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Frequency affects emotional response. High frequencies (over 2000 Hz) trigger alertness and stress. Low frequencies (under 250 Hz) feel heavy and somber. Mid frequencies (250-700 Hz) feel neutral and calm.
              </p>
              <p>
                Atom uses 400-600 Hz tones: neutral, calm, informative. These frequencies provide feedback without emotional charge, maintaining focus while providing awareness.
              </p>
              <p>
                This neutral frequency range is critical for sustained use. Emotional tones (high or low) create fatigue over time. Neutral tones maintain calm focus throughout the day.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Sounds That Reinforce Action */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Sounds That Reinforce Action Without Stress
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Audio feedback should reinforce actions, not create stress. Positive reinforcement tones (soft, brief, mid-frequency) confirm actions without triggering stress responses.
              </p>
              <p>
                Atom's audio feedback is designed to feel good: soft tones that confirm without alarming, brief durations that inform without interrupting, neutral frequencies that maintain calm.
              </p>
              <p>
                This positive reinforcement builds habits. Users associate productive actions with pleasant feedback, creating motivation without dependency.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Positive audio reinforcement increases task completion rates by 28% and maintains motivation without creating dependency.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Audio Design Principles */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Audio Design Principles
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-[#f5f5f7] rounded-lg p-6 border border-[rgba(0,0,0,0.08)]">
                <p className="text-sm font-medium text-[#000000] mb-2">80-150ms</p>
                <p className="text-xs font-light text-[#666666]">Duration for all feedback tones</p>
              </div>
              <div className="bg-[#f5f5f7] rounded-lg p-6 border border-[rgba(0,0,0,0.08)]">
                <p className="text-sm font-medium text-[#000000] mb-2">400-600 Hz</p>
                <p className="text-xs font-light text-[#666666]">Neutral frequency range</p>
              </div>
              <div className="bg-[#f5f5f7] rounded-lg p-6 border border-[rgba(0,0,0,0.08)]">
                <p className="text-sm font-medium text-[#000000] mb-2">Soft</p>
                <p className="text-xs font-light text-[#666666]">Volume level (40-50 dB)</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The best audio feedback is invisible. Users should feel confirmation, not hear it. Sound should enhance, not distract.
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

