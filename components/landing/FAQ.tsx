"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What makes ATOM different from other productivity apps?",
    answer:
      "ATOM combines minimalism with behavioral science. It's not just a todo app—it's a complete productivity system built around atomic principles, flow cycles, and science-backed focus tools.",
  },
  {
    question: "Is ATOM available on mobile?",
    answer:
      "Yes. ATOM works seamlessly across mobile and desktop. Your data syncs automatically, so you can access your workflow anywhere.",
  },
  {
    question: "Can I try ATOM before subscribing?",
    answer:
      "Absolutely. Start with our free plan to explore core features. Upgrade to Atom Pro anytime for the full experience.",
  },
  {
    question: "What is the Weekly Review system?",
    answer:
      "A built-in reflection cycle that helps you review your progress, adjust priorities, and continuously improve your workflow. Based on proven productivity research.",
  },
  {
    question: "How does the Attention Score work?",
    answer:
      "The Attention Score measures your consistency and focus patterns over time. It helps you understand when you're most productive and suggests optimal work times.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing bg-white dark:bg-black">
      <div className="container-padding max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}







