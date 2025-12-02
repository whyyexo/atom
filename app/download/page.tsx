"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";
import { Button } from "@/components/ui/button";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DownloadPage() {
  return (
    <PublicLayout>
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-32 text-center lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={subtleFade}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#000000] sm:text-6xl lg:text-7xl">
                Download Atom
              </h1>
              <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-[#333333] sm:text-2xl">
                Get the Atom app on your device and start organizing your life with science-based productivity.
              </p>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={subtleFade}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                <div className="mx-auto h-12 w-12 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#000000]">Cross-Platform</h3>
                <p className="text-sm font-light text-[#333333]">
                  Available on iOS and Android. Your data syncs seamlessly across all devices.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={subtleFade}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="mx-auto h-12 w-12 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#000000]">Secure & Private</h3>
                <p className="text-sm font-light text-[#333333]">
                  Your data is encrypted and stored securely. Privacy is our priority.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={subtleFade}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-3"
              >
                <div className="mx-auto h-12 w-12 rounded-lg border border-[rgba(0,0,0,0.08)] bg-white flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#000000]">Always Updated</h3>
                <p className="text-sm font-light text-[#333333]">
                  Regular updates with new features and improvements based on your feedback.
                </p>
              </motion.div>
            </div>

            <div className="mt-12">
              <Button
                variant="outline"
                className="rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent px-8 py-3 text-base font-normal text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
                asChild
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}

