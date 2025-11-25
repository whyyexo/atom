"use client";

import { motion } from "framer-motion";

import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-[1180px] px-6 py-24 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.6 }}
          className="space-y-32"
        >
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h1 className="text-5xl font-semibold text-[#000000] sm:text-6xl">About Atom</h1>
            <p className="text-xl font-light leading-relaxed text-[#333333]">
              We're building the future of productivity.
            </p>
          </div>

          <section className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[#000000]">Mission</h2>
              <p className="text-lg font-light leading-relaxed text-[#333333]">
                Our mission is to help people think clearly and work efficiently. We believe that
                productivity tools should be simple, beautiful, and powerful—not overwhelming or
                distracting.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[#000000]">Vision</h2>
              <p className="text-lg font-light leading-relaxed text-[#333333]">
                We envision a world where everyone has access to tools that help them organize their
                thoughts, manage their work, and achieve their goals. Atom is our contribution to
                that vision.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[#000000]">Why Atom Exists</h2>
              <p className="text-lg font-light leading-relaxed text-[#333333]">
                Traditional productivity tools are cluttered, complex, and often get in the way of
                actual work. Atom was born from a simple idea: what if a productivity tool was
                actually pleasant to use? What if it helped you focus instead of distracting you?
              </p>
              <p className="text-lg font-light leading-relaxed text-[#333333]">
                We built Atom to be different. Clean, minimal, and designed with intention. Every
                feature serves a purpose. Every interaction feels natural. Every detail matters.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[#000000]">The Future of Productivity</h2>
              <p className="text-lg font-light leading-relaxed text-[#333333]">
                We're just getting started. As AI becomes more capable, we're exploring new ways to
                help you work smarter. But we'll never lose sight of what makes Atom special: its
                simplicity, its clarity, and its focus on what truly matters.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-4xl pt-16">
            <div className="rounded-lg bg-[#f5f5f5] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="aspect-video flex items-center justify-center text-[#999999]">
                Product Mockup
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </PublicLayout>
  );
}

