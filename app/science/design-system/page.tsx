"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Zap, Move, Brain, Repeat } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const topics = [
  {
    title: "Placement Logic",
    description: "Distance naturelle main > écran, eye scanning patterns, zones de priorité et d'urgence.",
    icon: Target,
    href: "/science/design-system/placement",
  },
  {
    title: "Visual Hierarchy",
    description: "Contraste, spacing extrême, perception de priorité, rôle de la couleur limitée.",
    icon: Eye,
    href: "/science/design-system/visual-hierarchy",
  },
  {
    title: "Interaction Psychology",
    description: "Latence perçue vs réelle, feedback instantané, réduction de friction, renforcement positif.",
    icon: Zap,
    href: "/science/design-system/interaction-psychology",
  },
  {
    title: "Motion Principles",
    description: "Pourquoi l'œil comprend mieux la direction, animation comme pédagogie, durées optimales 100–180ms.",
    icon: Move,
    href: "/science/design-system/motion",
  },
  {
    title: "Cognitive Load Reduction",
    description: "Chunking, limitation des options visibles, disparition du bruit visuel, prévisibilité.",
    icon: Brain,
    href: "/science/design-system/cognitive-load",
  },
  {
    title: "Behavioral Flow",
    description: "Constance = habitude, routine-building UX, feedback de progression, ancrages visuels.",
    icon: Repeat,
    href: "/science/design-system/behavior-flow",
  },
];

export default function DesignSystemPage() {
  return (
    <ScienceLayout>
      <div className="space-y-32 pb-32 pt-16">
        {/* Hero */}
        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8 max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-semibold tracking-tight text-[#000000] leading-[1.1]"
            >
              Human Productivity Design System™
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl font-light text-[#333333] leading-relaxed"
            >
              Every pixel, spacing, and interaction in Atom is engineered to reduce cognitive friction and increase human performance.
            </motion.p>
          </motion.div>
        </section>

        {/* Topics Grid */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.title}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link
                    href={topic.href}
                    className="block bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-8 hover:shadow-md transition-all h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0071e3] to-[#0077ed] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-3 group-hover:text-[#0071e3] transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-base font-light text-[#333333] leading-relaxed mb-6">
                      {topic.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-[#0071e3]">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
    </ScienceLayout>
  );
}

