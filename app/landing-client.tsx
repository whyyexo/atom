"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/public/public-layout";
import { Check, Heart } from "lucide-react";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";

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

export function LandingPageClient() {
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
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 pt-20 pb-32 text-center lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#000000] sm:text-6xl lg:text-7xl">
            Work Smarter. Stay Focused. with a{" "}
            <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">
              science based
            </span>{" "}
            productivity app.
          </h1>
          <p className="mt-8 text-base font-light leading-relaxed text-[#333333] sm:text-lg">
            <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">Reclaim hours</span> every week with an <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">intelligent workspace</span> powered by <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">science</span> — tasks, notes, and your <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">AI assistant</span>, all working seamlessly together. Built for builders, operators, and relentless achievers.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="rounded-full bg-[#0071e3] px-8 py-3 text-base font-normal text-white hover:bg-[#0077ed] border-0"
              asChild
            >
              <Link href="/download">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent px-8 py-3 text-base font-normal text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
              asChild
            >
              <Link href="#showcase">View Demo</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AppStoreBadge />
            <GooglePlayBadge />
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
          className="rounded-xl flex flex-col justify-between border border-[rgba(0,0,0,0.08)] p-1 bg-white"
        >
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Free Plan */}
            <div className="flex flex-col justify-between p-6 space-y-4 flex-1 bg-white rounded-xl border border-[rgba(0,0,0,0.08)]">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium text-[#000000]">Free</h2>
                  <span className="my-3 block text-2xl font-semibold text-[#000000]">$0 / mo</span>
                  <p className="text-sm font-light text-[#000000]">Everything you need to get started</p>
                </div>
                <Button
                  asChild
                  className="w-full rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
                  variant="outline"
                >
                  <Link href="/download">Get Started</Link>
                </Button>
              </div>
              <ul className="border-t border-[rgba(0,0,0,0.08)] pt-4 list-outside space-y-3 text-sm">
                {[
                  "Unlimited notes and documents",
                  "Up to 3 projects",
                  "Basic AI features",
                  "Community support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#000000]">
                    <Check className="size-3 text-[#000000]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col justify-between p-6 space-y-4 w-full md:w-1/2 bg-white rounded-xl border border-[rgba(0,0,0,0.08)]">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h2 className="font-medium text-[#000000]">Pro</h2>
                    <span className="my-3 block text-2xl font-semibold text-[#000000]">$6.99 / mo</span>
                    <p className="text-sm font-light text-[#000000]">Unlock AI actions and unlimited projects</p>
                  </div>
                  <Button
                    asChild
                    className="w-full rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] border-0"
                    variant="default"
                  >
                    <Link href="/download">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-[#000000]">Everything in Free, plus:</div>
              </div>
              <ul className="mt-4 list-outside space-y-3 text-sm">
                {[
                  "Unlimited notes and documents",
                  "Unlimited projects and workspaces",
                  "Real-time collaboration",
                  "Export to markdown, PDF, and more",
                  "Priority support",
                  "Advanced AI automation",
                  "Unlimited AI actions",
                  "Custom integrations",
                  "Advanced analytics",
                  "Team management",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#000000]">
                    <Check className="size-3 text-[#000000]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Donation Section */}
        <div className="mt-12 flex items-center justify-center gap-3 border-t border-[#e5e5e5] pt-6">
          <Heart className="h-4 w-4 text-[#000000]" />
          <p className="text-sm font-light text-[#000000]">
            <span className="text-[#0071e3]">2%</span> of all revenue is donated to{" "}
            <Link
              href="/impact"
              className="text-[#0071e3] underline decoration-[#0071e3] underline-offset-2 hover:text-[#0077ed] transition-colors"
            >
              social and educational organizations
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

