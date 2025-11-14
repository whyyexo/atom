"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "1 workspace",
      "Basic AI co-pilot",
      "Calendar sync",
      "Up to 100 notes",
      "Community support",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For power users",
    features: [
      "Unlimited workspaces",
      "Advanced AI agents",
      "All integrations",
      "Unlimited notes",
      "Priority support",
      "Team collaboration",
    ],
    cta: "Join waitlist",
    popular: true,
  },
  {
    name: "Team",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team workspaces",
      "Admin controls",
      "SSO & security",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 lg:py-32 bg-muted/20 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 [font-family:var(--font-heading)]">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                className={`h-full rounded-2xl border-border/50 bg-card/50 transition-all ${
                  plan.popular
                    ? "border-primary/50 shadow-lg shadow-primary/10 scale-105"
                    : "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Most popular
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground [font-family:var(--font-heading)]">
                    {plan.name}
                  </h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full mt-6 rounded-lg"
                  >
                    <Link href="/sign-up">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

