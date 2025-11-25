"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function PricingPage() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-[1180px] px-6 py-24 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-5xl font-semibold text-[#000000] sm:text-6xl">Pricing</h1>
            <p className="text-xl font-light leading-relaxed text-[#333333]">
              Simple, transparent pricing. One plan, everything included.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg border border-[rgba(0,0,0,0.08)] bg-white p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-semibold text-[#000000]">Pro</h2>
                  <p className="mt-2 text-base font-light text-[#333333]">
                    Unlock AI actions and unlimited projects
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-5xl font-light text-[#000000]">
                    $6.99<span className="text-xl font-light text-[#333333]">/month</span>
                  </div>
                  <p className="text-sm font-light text-[#333333]">Billed monthly</p>
                </div>

                <div className="space-y-4 pt-8 border-t border-[rgba(0,0,0,0.08)]">
                  <h3 className="text-lg font-semibold text-[#000000]">Everything in Pro:</h3>
                  <ul className="space-y-3 text-base font-light text-[#333333]">
                    <li>• Unlimited notes and documents</li>
                    <li>• Advanced AI automation</li>
                    <li>• Unlimited projects and workspaces</li>
                    <li>• Real-time collaboration</li>
                    <li>• Priority support</li>
                    <li>• Export to markdown, PDF, and more</li>
                  </ul>
                </div>

                <Button
                  className="mt-8 w-full rounded-full border border-[rgba(0,0,0,0.08)] bg-[#000000] px-8 py-3 text-base font-normal text-white hover:bg-[#333333]"
                  asChild
                >
                  <Link href="/sign-up">Get Started</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 text-center space-y-4">
              <h3 className="text-xl font-semibold text-[#000000]">Free Plan</h3>
              <p className="text-base font-light text-[#333333]">
                Start with our free plan. Everything you need to get organized, no credit card required.
              </p>
              <ul className="space-y-2 text-sm font-light text-[#333333] pt-4">
                <li>• Up to 3 projects</li>
                <li>• Unlimited notes</li>
                <li>• Basic AI features</li>
                <li>• Community support</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </PublicLayout>
  );
}

