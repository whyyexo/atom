"use client";

import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const supportBlocks = [
  {
    title: "Digital Literacy Programs",
    content:
      "We contribute to initiatives that help students and teachers gain essential digital skills, from using productivity tools to understanding the foundations of modern technology.",
  },
  {
    title: "Youth Education & STEM",
    content:
      "We support organizations that make science, technology, engineering, and mathematics more accessible to young learners—especially in underfunded communities.",
  },
  {
    title: "Learning Accessibility",
    content:
      "Knowledge should be available to everyone. We help fund programs that provide educational material, tools, and technology to students who otherwise wouldn't have access.",
  },
];

const donationSteps = [
  "Revenue is collected monthly",
  "2% is allocated to our Impact Fund",
  "Approved organizations receive quarterly donations",
  "We publish transparent summaries at the end of each year",
];

export default function ImpactPage() {
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
                Empowering the next generation of learners.
              </h1>
              <p
                className={cn(
                  "text-xl font-light leading-relaxed",
                  isDark ? "text-white/80" : "text-[#333333]"
                )}
              >
                2% of Atom's revenue is dedicated to supporting educational and knowledge-driven
                organizations.
              </p>
            </section>

            {/* Why we give back */}
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
                  <h2
                    className={cn(
                      "text-3xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    Why we give back
                  </h2>
                  <h3
                    className={cn(
                      "text-2xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    Knowledge should be accessible.
                  </h3>
                  <p
                    className={cn(
                      "text-lg font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    Atom exists to help people think clearer and work better. But not everyone has
                    access to the tools, resources, and learning opportunities that unlock their
                    potential. That's why a portion of our revenue supports organizations focused on
                    education, digital literacy, and youth development.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* What we support */}
            <section className="space-y-8 border-t border-[#e5e5e5] dark:border-white/10 pt-16">
              <div className="mx-auto max-w-3xl">
                <h2
                  className={cn(
                    "text-3xl font-semibold mb-12",
                    isDark ? "text-white" : "text-[#000000]"
                  )}
                >
                  What we support
                </h2>
                <div className="grid gap-12 md:grid-cols-3">
                  {supportBlocks.map((block, index) => (
                    <motion.div
                      key={block.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={subtleFade}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="space-y-4"
                    >
                      <h3
                        className={cn(
                          "text-xl font-semibold",
                          isDark ? "text-white" : "text-[#000000]"
                        )}
                      >
                        {block.title}
                      </h3>
                      <p
                        className={cn(
                          "text-base font-light leading-relaxed",
                          isDark ? "text-white/80" : "text-[#333333]"
                        )}
                      >
                        {block.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* How donations work */}
            <section className="space-y-8 border-t border-[#e5e5e5] dark:border-white/10 pt-16">
              <div className="mx-auto max-w-3xl space-y-8">
                <h2
                  className={cn(
                    "text-3xl font-semibold",
                    isDark ? "text-white" : "text-[#000000]"
                  )}
                >
                  How donations work
                </h2>
                <p
                  className={cn(
                    "text-lg font-light leading-relaxed",
                    isDark ? "text-white/80" : "text-[#333333]"
                  )}
                >
                  We believe in clear, transparent processes. Our donation system is simple,
                  structured, and accountable.
                </p>
                <div className="space-y-6 pt-8">
                  {donationSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={subtleFade}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className={cn(
                          "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                          isDark
                            ? "bg-white/10 text-white"
                            : "bg-[rgba(0,0,0,0.05)] text-[#000000]"
                        )}
                      >
                        {index + 1}
                      </div>
                      <p
                        className={cn(
                          "text-base font-light leading-relaxed pt-0.5",
                          isDark ? "text-white/80" : "text-[#333333]"
                        )}
                      >
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Transparency Report */}
            <section className="space-y-8 border-t border-[#e5e5e5] dark:border-white/10 pt-16">
              <div className="mx-auto max-w-3xl space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={subtleFade}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2
                    className={cn(
                      "text-3xl font-semibold",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                  >
                    Annual Transparency Report
                  </h2>
                  <p
                    className={cn(
                      "text-lg font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    We publish a yearly summary detailing how funds were distributed. As Atom grows,
                    our contribution grows with it.
                  </p>
                  <Button
                    disabled
                    className={cn(
                      "rounded-md border px-6 py-2 text-sm font-normal",
                      isDark
                        ? "border-white/20 bg-white/5 text-white/60"
                        : "border-[rgba(0,0,0,0.08)] bg-transparent text-[#666666]"
                    )}
                  >
                    2025 Report — Coming Soon
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Our Commitment */}
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
                    A small contribution. A meaningful impact.
                  </h2>
                  <p
                    className={cn(
                      "text-lg font-light leading-relaxed",
                      isDark ? "text-white/80" : "text-[#333333]"
                    )}
                  >
                    Atom is built for productivity, clarity, and empowerment. Supporting education
                    aligns with our core belief that knowledge improves lives. As you grow with
                    Atom, so does our impact—together.
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

