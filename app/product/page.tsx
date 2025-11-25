"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ProductPage() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-[1180px] px-6 py-24 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl font-semibold leading-tight text-[#000000] sm:text-6xl">
              A workspace designed for clarity.
            </h1>
            <p className="text-xl font-light leading-relaxed text-[#333333]">
              Atom brings together tasks, notes, and AI-powered workflows in a single, minimal interface.
            </p>
          </div>

          <section className="space-y-12 pt-16">
            <div className="grid gap-16 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-[#000000]">Smart Organization</h2>
                <p className="text-lg font-light leading-relaxed text-[#333333]">
                  Organize your work in focused workspaces. Each space is designed to help you think clearly and move forward.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-[#000000]">AI-Powered Automation</h2>
                <p className="text-lg font-light leading-relaxed text-[#333333]">
                  Let AI handle repetitive tasks. Clean notes, generate summaries, and automate workflows without leaving your workspace.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="mx-auto w-full max-w-5xl rounded-lg bg-[#f5f5f5] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="aspect-video flex items-center justify-center text-[#999999]">
                Product Screenshot
              </div>
            </div>
          </section>

          <section className="space-y-12 py-16">
            <h2 className="text-4xl font-semibold text-[#000000]">Why choose Atom?</h2>
            <div className="grid gap-12 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#000000]">Minimal Interface</h3>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  No clutter, no distractions. Just the tools you need to get work done.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#000000]">Fast & Reliable</h3>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  Built for speed. Everything loads instantly, works offline, and syncs seamlessly.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#000000]">Privacy First</h3>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  Your data stays yours. End-to-end encryption and no tracking.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-[rgba(0,0,0,0.08)] pt-16">
            <div className="mx-auto max-w-2xl text-center space-y-8">
              <h2 className="text-4xl font-semibold text-[#000000]">Ready to get started?</h2>
              <p className="text-lg font-light text-[#333333]">
                Join thousands of users who are already using Atom to organize their work.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                  <Link href="/features">View Features</Link>
                </Button>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </PublicLayout>
  );
}

