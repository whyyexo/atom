"use client";

import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    title: "Designed to reduce mental friction.",
    content:
      "Atom's interface is intentionally minimal. Research from cognitive load theory shows that reducing visual noise directly improves decision-making and focus. The cleaner the environment, the faster your brain processes information. That's why Atom looks simple—because simplicity improves productivity.",
  },
  {
    title: "Kanban improves clarity and reduces overwhelm.",
    content:
      "According to research from the Lean Institute and multiple behavioral studies, visualizing work in a Kanban flow reduces stress and increases task completion rate by up to 30%. Atom uses a streamlined Kanban system so you always know what's next—and what actually matters.",
  },
  {
    title: "Your brain works in cycles.",
    content:
      "Neuroscience shows that humans focus best in 60–90 minute ultradian cycles. Atom's focus tools align with these natural rhythms to help you enter deep work more easily and stay there longer.",
  },
  {
    title: "AI that guides, not overwhelms.",
    content:
      "Our AI is trained to reduce decision fatigue. Behavioral science shows that too many choices paralyze productivity. Atom doesn't give you endless options—it gives you the next right action.",
  },
];

export default function SciencePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <PublicLayout>
      <div className={cn("min-h-screen", isDark ? "bg-black" : "bg-white")}>
        <div className="mx-auto max-w-[1180px] px-6 py-24 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={subtleFade}
            transition={{ duration: 0.6 }}
            className="space-y-32"
          >
            {/* Hero Section */}
            <section className="mx-auto max-w-3xl text-center space-y-6">
              <h1
                className={cn(
                  "text-5xl font-semibold sm:text-6xl",
                  isDark ? "text-white" : "text-[#000000]"
                )}
              >
                Productivity, backed by science.
              </h1>
              <p
                className={cn(
                  "text-xl font-light leading-relaxed",
                  isDark ? "text-white/80" : "text-[#333333]"
                )}
              >
                Atom is designed using cognitive psychology, neuroscience and behavioral science to
                help you work better—not harder.
              </p>
            </section>

            {/* Why Atom looks the way it does */}
            <section className="space-y-8 border-t border-[#e5e5e5] dark:border-white/10 pt-16">
              <div className="mx-auto max-w-3xl space-y-6">
                <h2
                  className={cn(
                    "text-3xl font-semibold",
                    isDark ? "text-white" : "text-[#000000]"
                  )}
                >
                  Why Atom looks the way it does
                </h2>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={subtleFade}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3
                    className={cn(
                      "text-2xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    {sections[0].title}
                  </h3>
                  <p
                    className={cn(
                      "text-lg font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    {sections[0].content}
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Why we use Kanban */}
            <section className="space-y-8 border-t border-[#e5e5e5] dark:border-white/10 pt-16">
              <div className="mx-auto max-w-3xl space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={subtleFade}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3
                    className={cn(
                      "text-2xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    {sections[1].title}
                  </h3>
                  <p
                    className={cn(
                      "text-lg font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    {sections[1].content}
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Why we include focus cycles */}
            <section className="space-y-8 border-t border-[#e5e5e5] dark:border-white/10 pt-16">
              <div className="mx-auto max-w-3xl space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={subtleFade}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3
                    className={cn(
                      "text-2xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    {sections[2].title}
                  </h3>
                  <p
                    className={cn(
                      "text-lg font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    {sections[2].content}
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Why our AI behaves differently */}
            <section className="space-y-8 border-t border-[#e5e5e5] dark:border-white/10 pt-16">
              <div className="mx-auto max-w-3xl space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={subtleFade}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3
                    className={cn(
                      "text-2xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    {sections[3].title}
                  </h3>
                  <p
                    className={cn(
                      "text-lg font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    {sections[3].content}
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Built with evidence */}
            <section className="space-y-8 border-t border-[#e5e5e5] dark:border-white/10 pt-16">
              <div className="mx-auto max-w-3xl text-center space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={subtleFade}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h2
                    className={cn(
                      "text-3xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    Science makes productivity predictable.
                  </h2>
                  <p
                    className={cn(
                      "text-lg font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    We don't guess. We rely on decades of research in cognitive psychology,
                    behavioral design and systems thinking to help you work better, with less
                    effort.
                  </p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </PublicLayout>
  );
}

