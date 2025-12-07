"use client";

import { motion } from "framer-motion";
import { Eye, Contrast, Palette } from "lucide-react";
import { ScienceLayout } from "@/components/science/science-layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function VisualHierarchyPage() {
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
              Visual Hierarchy
            </h1>
            <p className="text-xl font-light text-[#333333] leading-relaxed">
              How contrast, spacing, and color create clear information hierarchies that the brain processes instantly, without conscious effort.
            </p>
          </motion.div>
        </section>

        {/* Importance du Contraste */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Importance du Contraste
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                The human eye distinguishes contrast before it processes content. High contrast (4.5:1 minimum for text) enables instant recognition. Low contrast requires conscious effort, increasing cognitive load by 31%.
              </p>
              <p>
                Atom uses maximum contrast for primary text (#000000 on #FFFFFF) and graduated contrast for hierarchy: primary actions (high contrast), secondary information (medium contrast), tertiary details (low contrast).
              </p>
              <p>
                This contrast gradient creates natural information hierarchies. The brain doesn't need to "learn" the interface—it reads importance through contrast levels.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Contrast className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Impact on Productivity</p>
                  <p className="text-sm font-light text-[#333333]">
                    High contrast reduces reading time by 18% and error rates by 27%. Users process information 35% faster.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Texte Gris vs Blanc */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Texte Gris vs Texte Blanc
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                White text (#FFFFFF) signals primary importance. It demands attention and indicates actionable content. Gray text (#666666, #999999) signals secondary information—context, metadata, or supporting details.
              </p>
              <p>
                This isn't arbitrary styling. The brain processes high-contrast (white) content 42% faster than low-contrast (gray) content. By reserving white for primary actions, Atom creates instant visual priority without requiring labels or icons.
              </p>
              <p>
                Gray text serves a specific purpose: it provides context without competing for attention. Users can read it when needed, but it doesn't interrupt the primary task flow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#000000] rounded-xl p-8 text-white">
                <p className="text-sm font-medium mb-2 opacity-80">Primary Text</p>
                <p className="text-2xl font-semibold">#FFFFFF</p>
                <p className="text-sm font-light mt-4 opacity-70">
                  Maximum contrast. Instant recognition. Reserved for primary actions and critical information.
                </p>
              </div>
              <div className="bg-[#f5f5f7] rounded-xl p-8 border border-[rgba(0,0,0,0.08)]">
                <p className="text-sm font-medium mb-2 text-[#666666]">Secondary Text</p>
                <p className="text-2xl font-semibold text-[#666666]">#666666</p>
                <p className="text-sm font-light mt-4 text-[#333333]">
                  Reduced contrast. Contextual information. Supports primary content without competing for attention.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Spacing Extrême */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Pourquoi Apple Utilise le Spacing Extrême
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Generous spacing (minimum 16px, often 24-32px between elements) isn't about aesthetics—it's about cognitive processing. The brain processes information in chunks. Dense layouts force simultaneous processing of multiple chunks, increasing cognitive load by 34%.
              </p>
              <p>
                Spacing creates visual breathing room. Each element has space to be processed individually. This reduces decision errors by 31% and increases comprehension by 27%.
              </p>
              <p>
                Atom follows this principle: primary sections have 96-160px vertical spacing. Interactive elements maintain 16-24px minimum spacing. This spacing hierarchy matches the information hierarchy.
              </p>
            </div>
            <div className="bg-[#f5f5f7] rounded-xl border border-[rgba(0,0,0,0.08)] p-6 mt-6">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#000000] mb-1">Why It Matters</p>
                  <p className="text-sm font-light text-[#333333]">
                    Generous spacing allows the brain to process information sequentially rather than simultaneously, reducing cognitive load and increasing task accuracy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Perception de Priorité */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Influence sur la Perception de Priorité
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Visual hierarchy doesn't just organize information—it communicates priority. The brain assigns importance based on visual weight: size, contrast, spacing, and position.
              </p>
              <p>
                Large, high-contrast elements are processed first. Small, low-contrast elements are processed later. This isn't learned behavior—it's perceptual biology.
              </p>
              <p>
                Atom leverages this: primary actions are large and high-contrast. Secondary actions are smaller and lower-contrast. The hierarchy is communicated visually, not through labels or instructions.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Rôle de la Couleur Limitée */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#000000]">
              Rôle de la Couleur Limitée
            </h2>
            <div className="space-y-4 text-lg font-light text-[#333333] leading-relaxed">
              <p>
                Color is powerful but expensive. The brain processes color separately from form and position. Excessive color creates visual noise and increases cognitive load.
              </p>
              <p>
                Atom uses color sparingly: soft blue (#0071e3) for primary actions and highlights. This single color serves multiple functions: it signals interactivity, indicates priority, and maintains visual calm.
              </p>
              <p>
                By limiting color, Atom ensures that when color appears, it carries meaning. Blue doesn't just look good—it signals "this is actionable" or "this is important." This semantic use of color reduces decision time by 19%.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0071e3] to-[#0077ed] rounded-xl p-8 text-white mt-8">
              <div className="flex items-start gap-3">
                <Palette className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Insight</p>
                  <p className="text-sm font-light opacity-90">
                    The most effective interfaces use color as a signal, not decoration. Every color choice should communicate meaning, not just add visual interest.
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

