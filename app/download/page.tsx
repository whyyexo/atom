"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";
import { Button } from "@/components/ui/button";

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
              <a
                href="https://apps.apple.com/app/atom"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0071e3] px-8 py-4 text-base font-normal text-white transition-all hover:bg-[#0077ed] hover:shadow-lg"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.23 7.59 9.2 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs leading-tight">Download on the</span>
                  <span className="text-lg font-semibold leading-tight">App Store</span>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.atom.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0071e3] px-8 py-4 text-base font-normal text-white transition-all hover:bg-[#0077ed] hover:shadow-lg"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs leading-tight">Get it on</span>
                  <span className="text-lg font-semibold leading-tight">Google Play</span>
                </div>
              </a>
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

