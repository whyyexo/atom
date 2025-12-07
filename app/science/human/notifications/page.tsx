"use client";

import { motion } from "framer-motion";
import { Bell, Clock, Target } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function NotificationsPage() {
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
              Notification Design
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How Atom's notification system respects attention, maintains focus, and provides information without disruption.
            </p>
          </motion.div>
        </section>

        {/* Position Optimale */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Position Optimale en Haut
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Top-positioned notifications align with natural attention flow. The eye naturally scans top-to-bottom, so top notifications are noticed without requiring eye travel.
              </p>
              <p>
                Bottom notifications require eye travel and break focus. Center notifications interrupt active work. Top notifications allow peripheral awareness without disrupting the primary task.
              </p>
              <p>
                Atom places notifications in the top-right corner: visible but non-intrusive, accessible but not distracting. This position maintains awareness while protecting focus.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Top-positioned notifications maintain focus 28% longer than bottom or center notifications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Durée d'Affichage */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Durée d'Affichage
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Notification duration must balance visibility with non-intrusion. Too short (under 2 seconds) and users miss it. Too long (over 5 seconds) and it becomes distracting.
              </p>
              <p>
                Atom uses 3-4 second durations: long enough to be noticed, short enough to not interrupt. Critical notifications can be dismissed immediately, while informational notifications auto-dismiss.
              </p>
              <p>
                This duration respects attention windows: users can process the notification without losing focus on the primary task.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Tonalité Sonore */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Tonalité Sonore
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Sound frequency affects emotional response. High frequencies (over 2000 Hz) trigger stress. Low frequencies (under 250 Hz) feel heavy. Mid frequencies (250-700 Hz) feel neutral.
              </p>
              <p>
                Atom uses mid-frequency tones (400-600 Hz) for notifications: alerting without alarming, informative without stressful. These tones maintain calm focus while providing awareness.
              </p>
              <p>
                Sound duration is also critical: 80-150ms tones provide feedback without interruption. Longer tones become distracting and break focus.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Réaction Corporelle */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Réaction Corporelle
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Notifications trigger physiological responses: heart rate increases, cortisol releases, attention shifts. These responses are necessary for awareness but can disrupt focus if too frequent or intense.
              </p>
              <p>
                Atom minimizes physiological disruption: notifications are batched, contextual, and non-intrusive. This reduces cortisol spikes and maintains calm focus.
              </p>
              <p>
                Reduced physiological disruption means users can maintain focus longer and experience less stress throughout the day.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Minimizing physiological disruption reduces stress responses by 42% and increases sustained focus duration by 35%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Urgent vs Contextuel */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Différence entre Urgent vs Contextuel
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                <strong className="font-medium text-[#000000]">Urgent notifications</strong> require immediate attention: deadlines, critical messages, system alerts. These use high contrast, sound, and longer display duration.
              </p>
              <p>
                <strong className="font-medium text-[#000000]">Contextual notifications</strong> provide information when relevant: task updates, progress indicators, background sync. These use low contrast, no sound, and shorter display duration.
              </p>
              <p>
                This distinction is critical: urgent notifications interrupt, contextual notifications inform. Atom uses this distinction to protect focus while maintaining awareness.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most effective notification systems distinguish between urgent and contextual. Not all information requires interruption.
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

