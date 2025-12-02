"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/public/public-layout";
import { Check, Heart } from "lucide-react";


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
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#000000] sm:text-6xl lg:text-7xl">
            Work Smarter. Stay Focused. with a{" "}
            <span className="bg-gradient-to-r from-[#0071e3] to-[#0077ed] bg-clip-text text-transparent">
              science based
            </span>{" "}
            productivity app.
          </h1>
          <p className="mt-8 text-xl font-light leading-relaxed text-[#333333] sm:text-2xl">
            Built on cognitive science and behavioral research. A workspace that adapts to how your
            mind actually works—not how productivity apps think it should.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="rounded-full bg-[#0071e3] px-8 py-3 text-base font-normal text-white hover:bg-[#0077ed] border-0"
              asChild
            >
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent px-8 py-3 text-base font-normal text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
              asChild
            >
              <Link href="#showcase">View Demo</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://apps.apple.com/app/atom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white px-5 py-3 text-sm font-normal text-[#000000] transition-all hover:bg-[rgba(0,0,0,0.04)] hover:shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.23 7.59 9.2 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>Download on App Store</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.atom.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white px-5 py-3 text-sm font-normal text-[#000000] transition-all hover:bg-[rgba(0,0,0,0.04)] hover:shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>Get it on Google Play</span>
            </a>
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
                  <Link href="/signup">Get Started</Link>
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
                    <Link href="/signup">Get Started</Link>
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
