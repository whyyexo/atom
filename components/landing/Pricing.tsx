"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with essential features",
    features: [
      "Basic task management",
      "Up to 3 projects",
      "Mobile app access",
      "Community support",
    ],
    cta: "Get Started",
    href: "/signup",
    featured: false,
  },
  {
    name: "Atom Pro",
    price: "$12",
    period: "/month",
    description: "Full productivity system",
    features: [
      "Unlimited tasks & projects",
      "Advanced notes & documents",
      "Science-backed focus tools",
      "Habit tracking & routines",
      "Weekly review system",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-spacing bg-gradient-to-b from-white to-muted/20 dark:from-black dark:to-muted/10">
      <div className="container-padding max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Simple Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.featured
                  ? "border-blue-500/50 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 shadow-lg shadow-blue-500/10"
                  : "border-border bg-white dark:bg-black"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-semibold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                size="lg"
                className={`w-full h-12 ${
                  plan.featured
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    : ""
                }`}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

