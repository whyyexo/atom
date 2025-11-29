"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor } from "lucide-react";

export function MobileDesktop() {
  return (
    <section className="section-spacing bg-gradient-to-b from-muted/20 to-white dark:from-muted/10 dark:to-black">
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Mobile + Desktop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ATOM works wherever you do.
            <br />
            Your workflow synchronized across devices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-[500px] rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-black border-8 border-gray-800 p-4 shadow-2xl">
              <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                <Smartphone className="w-24 h-24 text-blue-400/30" />
              </div>
            </div>
            <p className="mt-6 text-sm font-medium text-foreground">Mobile App</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-lg h-[400px] rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 shadow-2xl">
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                <Monitor className="w-32 h-32 text-blue-400/30" />
              </div>
            </div>
            <p className="mt-6 text-sm font-medium text-foreground">Web Dashboard</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




