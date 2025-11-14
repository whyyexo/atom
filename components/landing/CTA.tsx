"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-[#0a0a0a] border-t border-[#1c1c1c]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white [font-family:var(--font-heading)] leading-[1.1]">
            Start building with Atom today.
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Clean. Fast. Intelligent.
          </p>

          <div className="pt-4">
            <Button asChild size="lg" className="rounded-xl h-12 px-8 text-[15px] font-medium bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/sign-up">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

