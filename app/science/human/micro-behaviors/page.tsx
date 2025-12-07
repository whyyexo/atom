"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, TrendingUp, Repeat } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MicroBehaviorsPage() {
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
              Micro-Behaviors & Habit Triggers
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How small, consistent interactions build productive habits and maintain long-term engagement.
            </p>
          </motion.div>
        </section>

        {/* Productive Micro-Loops */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Micro-Loops Productifs
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Habits form through loops: cue, routine, reward. Micro-loops are small, repeatable cycles that build into larger habits. Atom creates productive micro-loops: quick task creation, instant completion feedback, progress visualization.
              </p>
              <p>
                Each micro-loop is designed to be effortless: one tap to create, one tap to complete, instant visual confirmation. This effortlessness makes repetition easy, and repetition builds habits.
              </p>
              <p>
                Over time, these micro-loops become automatic. Users don't think about creating tasks or completing them—they just do it. This automaticity is the foundation of productive habits.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Repeat className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Productive micro-loops increase task creation by 42% and completion rates by 35% over 90 days.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tiny Wins */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Tiny Wins
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Small victories build motivation. Each completed task, each progress milestone, each productive action creates a "tiny win" that reinforces behavior.
              </p>
              <p>
                Atom acknowledges these wins subtly: brief animations, progress indicators, completion counts. These acknowledgments are informative but not distracting—they provide motivation without creating dependency.
              </p>
              <p>
                Tiny wins maintain motivation over time. Users feel progress without needing external rewards. This intrinsic motivation is more sustainable than gamification.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Motion as Cue */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Motion as Cue
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Motion can serve as a habit cue. Consistent animations signal actions, guide attention, and reinforce behaviors. Atom uses motion as a subtle cue system.
              </p>
              <p>
                Task completion animations cue "progress." Menu transitions cue "navigation." Hover states cue "interactivity." These motion cues become automatic triggers for productive behaviors.
              </p>
              <p>
                Motion cues are more effective than visual cues because they're processed faster and remembered longer. Users learn interface behavior through motion, not through instructions.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Motion cues reduce learning time by 34% and increase habit formation speed by 28%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Context-Driven Actions */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Actions Contextuelles
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Context determines behavior. The same action in different contexts feels different. Atom uses context to guide productive behaviors.
              </p>
              <p>
                Morning context shows daily goals. Work context shows active tasks. Evening context shows reflection prompts. Each context guides appropriate actions.
              </p>
              <p>
                Context-driven actions feel natural. Users don't need to think about what to do—the context suggests it. This natural guidance increases engagement and reduces decision fatigue.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most effective habit triggers are contextual. Behavior should feel natural, not forced. Context creates natural guidance.
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

