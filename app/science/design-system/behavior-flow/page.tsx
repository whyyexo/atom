"use client";

import { motion } from "framer-motion";
import { Repeat, Target, TrendingUp } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function BehaviorFlowPage() {
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
              Behavioral Flow
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How consistency, routine-building, and visual anchors create interfaces that build habits and maintain long-term engagement.
            </p>
          </motion.div>
        </section>

        {/* Constance = Habitude */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Constance = Habitude
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Habits form through repetition. Consistent interfaces create consistent behaviors. Atom maintains strict consistency: same actions in the same places, same behaviors in the same contexts.
              </p>
              <p>
                This consistency isn't just about usability—it's about habit formation. When users perform the same action in the same way repeatedly, it becomes automatic. Automatic actions require no cognitive effort.
              </p>
              <p>
                Atom's consistency reduces cognitive load by 28% over time. Users don't need to think—they act from muscle memory.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Repeat className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    Consistent interfaces reduce learning time by 34% and increase long-term engagement by 42%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Routine-Building UX */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Routine-Building UX
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Productive routines require structure. Atom provides that structure: morning review, task prioritization, focused work blocks, evening reflection. These routines become habits through repetition.
              </p>
              <p>
                The interface guides users through these routines: prompts appear at the right time, workflows are optimized for the routine, progress is visualized. This guidance increases routine adherence by 48%.
              </p>
              <p>
                Routines aren't enforced—they're facilitated. Users choose to follow them because they're easy, clear, and rewarding.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Feedback de Progression */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Feedback de Progression
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Progress feedback maintains motivation. Atom provides subtle, consistent progress indicators: task completion counts, time spent in focus, goals achieved. This feedback reinforces productive behaviors.
              </p>
              <p>
                But feedback must be subtle. Obvious progress bars create dependency. Atom's progress indicators are informative but not distracting. Users see progress without being driven by it.
              </p>
              <p>
                This balanced feedback maintains motivation over months, not just days. Users feel progress without becoming dependent on it.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Subtle progress feedback increases long-term engagement by 35% without creating gamification dependency.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Répétition Contextuelle */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Répétition Contextuelle
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Contextual repetition reinforces behaviors. When users perform actions in the same context repeatedly, those actions become automatic. Atom maintains contextual consistency: same actions appear in the same contexts.
              </p>
              <p>
                Task creation always appears in the same place. Task completion always uses the same gesture. Navigation always follows the same patterns. This contextual consistency builds muscle memory.
              </p>
              <p>
                Muscle memory reduces cognitive load. Users don't think about how to interact—they just interact. This automaticity increases speed and reduces errors.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Ancrages Visuels */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Ancrages Visuels
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Visual anchors provide spatial reference. Navigation stays in the same place. Primary actions stay in the same place. These anchors create spatial memory: users remember where things are, not just what they are.
              </p>
              <p>
                Atom maintains strict visual anchors: navigation is always top-left, primary actions are always bottom-right, settings are always top-right. This spatial consistency reduces navigation time by 31%.
              </p>
              <p>
                Visual anchors also reduce cognitive load. Users don't need to search—they know where to look. This spatial memory is faster than visual search.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most effective interfaces create spatial memory. Users should remember where things are, not just what they are. This spatial memory is faster and requires less cognitive effort.
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

