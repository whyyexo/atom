"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Product", href: "#features" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Login", href: "/sign-in" },
];

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
    <div className="min-h-screen bg-white text-[#000000] font-[var(--font-inter)]">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link href="/" className="text-lg font-bold uppercase tracking-[0.5px] text-[#000000]">
          ATOM
        </Link>
        <div className="hidden items-center gap-10 text-sm font-normal text-[#333333] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button
          variant="outline"
          className="rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent px-6 py-2 text-sm font-normal text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
          asChild
        >
          <Link href="/sign-up">Get Atom</Link>
        </Button>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-24 text-center lg:px-12">
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
            className="rounded-full border border-[rgba(0,0,0,0.08)] bg-[#000000] px-8 py-3 text-base font-normal text-white hover:bg-[#333333]"
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
        className="mt-24 w-full max-w-6xl"
      >
        <div className="mx-auto aspect-video w-full max-w-5xl rounded-lg bg-[#f5f5f5] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="flex h-full items-center justify-center text-[#999999]">
            Product Mockup
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
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

function ShowcaseSection() {
  return (
    <section id="showcase" className="bg-white px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
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
      <div className="mx-auto max-w-4xl">
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
            className="mt-10 w-full rounded-full border border-[rgba(0,0,0,0.08)] bg-[#000000] px-8 py-3 text-base font-normal text-white hover:bg-[#333333]"
            asChild
          >
            <Link href="/sign-up">Upgrade</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-white px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm font-light text-[#333333] sm:flex-row">
        <span className="font-semibold text-[#000000]">ATOM</span>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Link href="#features" className="transition-opacity hover:opacity-60">
            Product
          </Link>
          <Link href="#pricing" className="transition-opacity hover:opacity-60">
            Pricing
          </Link>
          <Link href="/docs" className="transition-opacity hover:opacity-60">
            Docs
          </Link>
          <Link href="/support" className="transition-opacity hover:opacity-60">
            Support
          </Link>
        </div>
        <span>© 2025 Atom</span>
      </div>
    </footer>
  );
}
