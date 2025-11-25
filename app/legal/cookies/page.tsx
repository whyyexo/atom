"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CookiesPage() {
  return (
    <PublicLayout>
      <section className="bg-white px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={subtleFade}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl space-y-12"
          >
            <div className="space-y-4">
              <Link
                href="/legal"
                className="text-sm font-light text-[#333333] hover:text-[#000000] transition-colors"
              >
                ← Back to Legal
              </Link>
              <h1 className="text-5xl font-light text-[#000000] sm:text-6xl lg:text-7xl">
                Cookie Policy
              </h1>
              <p className="text-sm font-light text-[#666666]">Last updated: January 2025</p>
            </div>

            <div className="space-y-8 border-t border-[rgba(0,0,0,0.08)] pt-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">What Are Cookies</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  Cookies are small text files that are placed on your device when you visit our
                  website. They help us provide you with a better experience by remembering your
                  preferences and settings.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">How We Use Cookies</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  We use cookies to authenticate you, remember your preferences, analyze how you
                  use our services, and improve your experience.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">Managing Cookies</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  You can control and manage cookies through your browser settings. However, please
                  note that disabling cookies may affect the functionality of our services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">Contact</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  If you have any questions about our use of cookies, please contact us at{" "}
                  <a
                    href="mailto:privacy@atom.app"
                    className="text-[#0071e3] underline decoration-[#0071e3] underline-offset-2 hover:text-[#0077ed] transition-colors"
                  >
                    privacy@atom.app
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}

