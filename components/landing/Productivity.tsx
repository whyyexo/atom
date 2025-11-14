"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Productivity() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 [font-family:var(--font-heading)] leading-[1.1]">
            Build, iterate, and execute faster than ever.
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Atom keeps your projects clean, organized, and intelligently automated.
          </p>

          <div className="pt-4">
            <Button asChild size="lg" className="rounded-xl h-12 px-8 text-[15px] font-medium">
              <Link href="/sign-up">
                Start now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

