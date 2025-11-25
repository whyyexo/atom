"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "Updates", href: "#updates" },
  { label: "Login", href: "/app" },
  { label: "Get Started", href: "#get-started" },
];

const featureBlocks = [
  {
    title: "Smart Tasks",
    description: "Prioritize work with context-aware lists that adapt as you plan.",
    label: "Tasks · Planning",
  },
  {
    title: "Notes & Documents",
    description: "Structure research, briefs, and project docs inside a calm canvas.",
    label: "Docs · Knowledge",
  },
  {
    title: "AI Actions",
    description: "Trigger intelligent workflows that clean notes and prep next steps.",
    label: "Automation · AI",
  },
];

const fadeConfig = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-slate-100">
      <div className="relative">
        <SiteNav />
        <main className="mx-auto flex max-w-6xl flex-col gap-32 px-6 pb-24 pt-24 sm:px-10 lg:px-12">
          <HeroSection />
          <FeatureSection />
          <ProductOverview />
          <AISection />
          <PricingSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent/0 bg-white/80 backdrop-blur-md transition dark:bg-black/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10 lg:px-12">
        <span className="text-lg font-semibold tracking-tight">Atom</span>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-slate-900 dark:hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium text-slate-700 dark:text-slate-200" asChild>
            <Link href="#get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="get-started" className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <motion.div variants={fadeConfig} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.1 }}>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Atom</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Atom — Your Personal Productivity System.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Structure your tasks, notes, ideas, and workflows in a single, fast and ultra-minimal workspace.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button className="px-8 py-5 text-base font-semibold" asChild>
            <Link href="/onboarding">Get Started</Link>
          </Button>
          <Button variant="outline" className="border-slate-300 px-8 py-5 text-base font-semibold dark:border-slate-700" asChild>
            <Link href="#product">View Dashboard Demo</Link>
          </Button>
        </div>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Free forever • No credit card
        </p>
      </motion.div>
      <motion.div
        variants={fadeConfig}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.2 }}
        className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-neutral-900 dark:shadow-[0_40px_80px_rgba(0,0,0,0.65)]"
      >
        <HeroPreview />
      </motion.div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-black dark:text-slate-200">
        <span>Today</span>
        <span className="text-slate-500 dark:text-slate-400">5 sessions</span>
      </div>
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-black">
        {[1, 2, 3].map((item) => (
          <div key={item} className="space-y-2 rounded-xl border border-slate-100 p-4 dark:border-slate-800">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Workspace</p>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Launch Review {item}</h3>
              <span className="text-xs text-slate-500">Due 4pm</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full rounded-full bg-slate-900 dark:bg-white" style={{ width: `${40 + item * 18}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureSection() {
  return (
    <section id="product" className="space-y-10">
      <motion.p
        variants={fadeConfig}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
      >
        Designed for clarity
      </motion.p>
      <div className="grid gap-8 lg:grid-cols-3">
        {featureBlocks.map((feature, index) => (
          <motion.article
            key={feature.title}
            variants={fadeConfig}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-black"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">{feature.label}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-neutral-900">
              <div className="h-28 rounded-xl border border-dashed border-slate-300 bg-white dark:border-slate-700 dark:bg-black" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ProductOverview() {
  return (
    <section className="space-y-8">
      <motion.h2
        variants={fadeConfig}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl"
      >
        A workspace designed to help you think clearly.
      </motion.h2>
      <motion.div
        variants={fadeConfig}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[32px] border border-slate-200 bg-slate-50 p-2 shadow-[0_40px_120px_rgba(15,23,42,0.18)] dark:border-slate-800 dark:bg-neutral-900 dark:shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
      >
        <div className="h-[420px] rounded-[24px] border border-slate-100 bg-white dark:border-slate-800 dark:bg-black">
          <div className="flex h-full flex-col gap-6 p-10">
            <div className="flex items-center gap-6">
              <div className="h-12 w-12 rounded-full border border-slate-200 dark:border-slate-700" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Workspace Overview</p>
                <p className="text-lg font-medium text-slate-900 dark:text-white">Product Strategy</p>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-neutral-900">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Focus Column</p>
                <div className="mt-4 space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">Deliverable {item}</p>
                      <p className="text-xs text-slate-500">Notes, attachments, and next steps.</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 dark:border-slate-800 dark:bg-black">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Outline</p>
                <div className="mt-4 h-full rounded-2xl border border-dashed border-slate-200 dark:border-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <p className="text-center text-xs text-slate-500 dark:text-slate-400">Everything organized, nothing noisy.</p>
    </section>
  );
}

function AISection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1fr,0.8fr]">
      <motion.div
        variants={fadeConfig}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Your AI partner, built-in.</p>
        <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
          Atom helps you generate ideas, organize your work, clean your notes, and create workflows automatically.
        </h3>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Automate planning rituals, transform unstructured notes into action, and keep every project moving without the mess.
        </p>
      </motion.div>
      <motion.div
        variants={fadeConfig}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-black"
      >
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-slate-800 dark:bg-neutral-900">
          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>AI Assistant</span>
            <span>Ready</span>
          </div>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Prompt</p>
              <p className="mt-2 text-base font-medium text-slate-900 dark:text-white">
                “Summarize user interviews and propose three next steps.”
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-700 dark:border-slate-700 dark:bg-black dark:text-slate-200">
              <p>1. Align product themes by Monday.</p>
              <p className="mt-3">2. Outline launch backlog in Smart Tasks.</p>
              <p className="mt-3">3. Draft customer update and sync with ops.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="space-y-10">
      <span id="updates" aria-hidden="true" className="sr-only">
        Updates
      </span>
      <motion.div
        variants={fadeConfig}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Pricing</p>
        <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Minimal plans, maximum focus.</h3>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeConfig}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-black"
        >
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Free</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Everything you need to stay organized</p>
          </div>
          <div className="mt-8 text-4xl font-semibold">$0</div>
          <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>Unlimited notes & docs</li>
            <li>Task planning & timelines</li>
            <li>Shared workspaces</li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeConfig}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-black"
        >
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Pro</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Unlock AI actions and unlimited projects</p>
          </div>
          <div className="mt-8 text-4xl font-semibold">
            $6.99 <span className="text-base font-medium text-slate-500 dark:text-slate-400">/ month</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>Advanced AI automation</li>
            <li>Unlimited projects & agents</li>
            <li>Priority support</li>
          </ul>
          <Button className="mt-8 w-full py-5 font-semibold">Upgrade</Button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 py-10 dark:border-slate-800 dark:bg-black/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span className="font-semibold text-slate-900 dark:text-white">Atom</span>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="#product">Product</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#updates">Changelog</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/support">Support</Link>
        </div>
        <span>© 2025 Atom</span>
      </div>
    </footer>
  );
}
