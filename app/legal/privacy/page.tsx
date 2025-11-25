"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-sm font-light text-[#666666]">Last updated: January 2025</p>
            </div>

            <div className="space-y-8 border-t border-[rgba(0,0,0,0.08)] pt-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">1. Information We Collect</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  We collect information that you provide directly to us, such as when you create an
                  account, use our services, or contact us for support.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">2. How We Use Your Information</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  We use the information we collect to provide, maintain, and improve our services,
                  process transactions, and communicate with you.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">3. Information Sharing</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  We do not sell, trade, or otherwise transfer your personal information to third
                  parties without your consent, except as described in this policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">4. Data Security</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">5. Your Rights</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  You have the right to access, update, or delete your personal information at any
                  time through your account settings.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">6. Contact</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
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

