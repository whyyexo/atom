"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/public/public-layout";


const features = [
  {
    title: "Smart Tasks",
    description: "Prioritize work with context-aware lists that adapt as you plan.",
  },
  {
    title: "Notes & Documents",
    description: "Structure research, briefs, and project docs inside a calm canvas.",
  },
  {
    title: "AI Actions",
    description: "Trigger intelligent workflows that clean notes and prep next steps.",
  },
  {
    title: "Workspaces",
    description: "Organize everything in focused spaces designed for clarity.",
  },
];

const subtleFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function LandingPage() {
  return (
    <PublicLayout>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <FeatureHighlightsSection />
      <PricingSection />
    </PublicLayout>
  );
}

function HeroSection() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 py-32 text-center lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-5xl font-light leading-tight tracking-tight text-[#000000] sm:text-6xl lg:text-7xl">
            Work Smarter. Stay Focused.
          </h1>
          <p className="mt-8 text-xl font-light leading-relaxed text-[#333333] sm:text-2xl">
            Atom is a new kind of productivity workspace—simple, calm and powerful.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="rounded-full bg-[#0071e3] px-8 py-3 text-base font-normal text-white hover:bg-[#0077ed] border-0"
              asChild
            >
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent px-8 py-3 text-base font-normal text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
              asChild
            >
              <Link href="#showcase">View Demo</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 w-full"
        >
          <div className="mx-auto aspect-video w-full max-w-5xl rounded-lg bg-[#f5f5f5] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="flex h-full items-center justify-center text-[#999999]">
              Product Mockup
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="mb-6 h-12 w-12 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white"></div>
              <h3 className="text-2xl font-semibold text-[#000000]">{feature.title}</h3>
              <p className="text-base font-light leading-relaxed text-[#333333]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureHighlightsSection() {
  return (
    <section className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="space-y-32">
          {[
            {
              title: "Organize your thoughts",
              text: "Capture ideas, structure projects, and keep everything in one place. Atom helps you think clearly by removing distractions and focusing on what matters.",
            },
            {
              title: "Automate your workflow",
              text: "Let AI handle the repetitive tasks. From cleaning notes to generating summaries, Atom works in the background so you can focus on creating.",
            },
            {
              title: "Collaborate seamlessly",
              text: "Share workspaces with your team. Real-time updates keep everyone aligned without the noise of traditional collaboration tools.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="max-w-2xl space-y-6"
            >
              <h3 className="text-4xl font-semibold text-[#000000]">{item.title}</h3>
              <p className="text-lg font-light leading-relaxed text-[#333333]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section id="showcase" className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={subtleFade}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="mx-auto w-full max-w-6xl rounded-lg bg-[#f5f5f5] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="aspect-video flex items-center justify-center text-[#999999]">
              Product Screenshot
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={subtleFade}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md rounded-lg border border-[rgba(0,0,0,0.08)] bg-white p-12 text-center"
        >
          <h3 className="text-3xl font-semibold text-[#000000]">Pro</h3>
          <div className="mt-6 text-5xl font-light text-[#000000]">
            $6.99<span className="text-xl font-light text-[#333333]">/month</span>
          </div>
          <p className="mt-6 text-base font-light leading-relaxed text-[#333333]">
            Unlock AI actions and unlimited projects
          </p>
          <Button
            className="mt-10 w-full rounded-full bg-[#0071e3] px-8 py-3 text-base font-normal text-white hover:bg-[#0077ed] border-0"
            asChild
          >
            <Link href="/sign-up">Upgrade</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
