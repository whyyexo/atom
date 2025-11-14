"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Atom has completely transformed how I organize my life. The AI co-pilot actually understands my goals and helps me stay on track.",
    author: "Sarah Chen",
    role: "Product Designer",
    avatar: "SC",
  },
  {
    quote: "Finally, a tool that brings all my calendars, notes, and goals together. The automation features save me hours every week.",
    author: "Marcus Rodriguez",
    role: "Engineering Manager",
    avatar: "MR",
  },
  {
    quote: "The privacy-first approach and powerful AI features make Atom the perfect productivity companion. Highly recommend!",
    author: "Emily Watson",
    role: "Founder & CEO",
    avatar: "EW",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 [font-family:var(--font-heading)]">
            Loved by early users
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what people are saying about Atom OS
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="h-full rounded-2xl border border-border/50 bg-card/50 p-6 lg:p-8">
                <Quote className="h-8 w-8 text-primary/50 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

