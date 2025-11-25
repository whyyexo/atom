"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/public/public-layout";
import { cn } from "@/lib/utils";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
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
];

const faqs = [
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes unlimited notes, up to 3 projects, basic AI features, and community support. It's perfect for getting started with Atom.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with Atom Pro, contact us for a full refund.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and PayPal. All payments are processed securely.",
  },
  {
    question: "Is there an annual plan?",
    answer:
      "Currently, we only offer monthly billing. We're working on annual plans with discounts and will announce them soon.",
  },
  {
    question: "Can I use Atom for my team?",
    answer:
      "Yes! Atom Pro includes team collaboration features. For enterprise needs, please contact us for custom pricing and features.",
  },
];

export default function PricingPage() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-[1180px] px-6 py-24 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.6 }}
          className="space-y-24"
        >
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-5xl font-semibold text-[#000000] dark:text-white sm:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="text-xl font-light leading-relaxed text-[#333333] dark:text-[#cccccc]">
              Choose the plan that works for you. Start free, upgrade when you're ready.
            </p>
          </div>

          {/* Free Plan */}
          <section className="mx-auto max-w-4xl">
            <div className="rounded-lg border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-white dark:bg-black p-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-semibold text-[#000000] dark:text-white">Atom Free</h2>
                  <p className="mt-2 text-lg font-light text-[#333333] dark:text-[#cccccc]">
                    Everything you need to get started
                  </p>
                </div>
                <div className="text-4xl font-light text-[#000000] dark:text-white">
                  $0<span className="text-xl font-light text-[#333333] dark:text-[#cccccc]">/month</span>
                </div>
                <ul className="space-y-3 pt-6 border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]">
                  <li className="flex items-start gap-3 text-base font-light text-[#333333] dark:text-[#cccccc]">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#000000] dark:text-white mt-0.5" />
                    <span>Unlimited notes and documents</span>
                  </li>
                  <li className="flex items-start gap-3 text-base font-light text-[#333333] dark:text-[#cccccc]">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#000000] dark:text-white mt-0.5" />
                    <span>Up to 3 projects</span>
                  </li>
                  <li className="flex items-start gap-3 text-base font-light text-[#333333] dark:text-[#cccccc]">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#000000] dark:text-white mt-0.5" />
                    <span>Basic AI features</span>
                  </li>
                  <li className="flex items-start gap-3 text-base font-light text-[#333333] dark:text-[#cccccc]">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#000000] dark:text-white mt-0.5" />
                    <span>Community support</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="mt-8 w-full rounded-full border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-transparent px-8 py-3 text-base font-normal text-[#000000] dark:text-white hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.04)]"
                  asChild
                >
                  <Link href="/sign-up">Get Started Free</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Pro Plan */}
          <section className="mx-auto max-w-4xl">
            <div className="rounded-lg border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-white dark:bg-black p-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-semibold text-[#000000] dark:text-white">Atom Pro</h2>
                  <p className="mt-2 text-lg font-light text-[#333333] dark:text-[#cccccc]">
                    Unlock AI actions and unlimited projects
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-light text-[#000000] dark:text-white">
                    $6.99<span className="text-xl font-light text-[#333333] dark:text-[#cccccc]">/month</span>
                  </div>
                  <p className="text-sm font-light text-[#333333] dark:text-[#cccccc]">Billed monthly</p>
                </div>
                <ul className="space-y-3 pt-6 border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base font-light text-[#333333] dark:text-[#cccccc]"
                    >
                      <Check className="h-5 w-5 flex-shrink-0 text-[#000000] dark:text-white mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full rounded-full border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#000000] dark:bg-white px-8 py-3 text-base font-normal text-white dark:text-black hover:bg-[#333333] dark:hover:bg-[#e0e0e0]"
                  asChild
                >
                  <Link href="/sign-up">Get Started</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-semibold text-[#000000] dark:text-white">
              Compare plans
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#000000] dark:text-white">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#000000] dark:text-white">
                      Free
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#000000] dark:text-white">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Notes & Documents", free: "Unlimited", pro: "Unlimited" },
                    { feature: "Projects", free: "Up to 3", pro: "Unlimited" },
                    { feature: "Workspaces", free: "1", pro: "Unlimited" },
                    { feature: "AI Actions", free: "Basic", pro: "Advanced" },
                    { feature: "Collaboration", free: "Limited", pro: "Full" },
                    { feature: "Export Options", free: "Basic", pro: "All formats" },
                    { feature: "Support", free: "Community", pro: "Priority" },
                    { feature: "Integrations", free: "Basic", pro: "Custom" },
                  ].map((row, index) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        "border-b border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]",
                        index % 2 === 0 && "bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)]"
                      )}
                    >
                      <td className="px-6 py-4 text-sm font-light text-[#333333] dark:text-[#cccccc]">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-light text-[#333333] dark:text-[#cccccc]">
                        {row.free}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-light text-[#333333] dark:text-[#cccccc]">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-semibold text-[#000000] dark:text-white">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={subtleFade}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-3 border-b border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] pb-8 last:border-0"
                >
                  <h3 className="text-lg font-semibold text-[#000000] dark:text-white">{faq.question}</h3>
                  <p className="text-base font-light leading-relaxed text-[#333333] dark:text-[#cccccc]">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Enterprise CTA */}
          <section className="mx-auto max-w-3xl text-center space-y-6 border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] pt-16">
            <h2 className="text-3xl font-semibold text-[#000000] dark:text-white">Need something custom?</h2>
            <p className="text-lg font-light text-[#333333] dark:text-[#cccccc]">
              We offer custom solutions for teams and enterprises. Get in touch to discuss your needs.
            </p>
            <Link
              href="mailto:enterprise@atom.com"
              className="inline-block text-base font-normal text-[#000000] dark:text-white underline transition-opacity hover:opacity-60"
            >
              Contact us →
            </Link>
          </section>
        </motion.div>
      </div>
    </PublicLayout>
  );
}
