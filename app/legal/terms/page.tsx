"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TermsPage() {
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
                Terms of Service
              </h1>
              <p className="text-sm font-light text-[#666666]">Last updated: January 2025</p>
            </div>

            <div className="space-y-8 border-t border-[rgba(0,0,0,0.08)] pt-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">1. Acceptance of Terms</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  By accessing and using Atom, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">2. Use License</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  Permission is granted to temporarily use Atom for personal, non-commercial
                  transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">3. User Account</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  You are responsible for maintaining the confidentiality of your account and
                  password. You agree to accept responsibility for all activities that occur under
                  your account.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">4. Restrictions</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  You may not use Atom in any way that causes, or may cause, damage to the service
                  or impairment of the availability or accessibility of Atom.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">5. Disclaimer</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  The materials on Atom are provided on an 'as is' basis. Atom makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">6. Contact</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  If you have any questions about these Terms, please contact us at{" "}
                  <a
                    href="mailto:legal@atom.app"
                    className="text-[#0071e3] underline decoration-[#0071e3] underline-offset-2 hover:text-[#0077ed] transition-colors"
                  >
                    legal@atom.app
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

