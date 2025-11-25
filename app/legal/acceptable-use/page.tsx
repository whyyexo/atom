"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AcceptableUsePage() {
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
                Acceptable Use Policy
              </h1>
              <p className="text-sm font-light text-[#666666]">Last updated: January 2025</p>
            </div>

            <div className="space-y-8 border-t border-[rgba(0,0,0,0.08)] pt-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">1. Prohibited Activities</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  You may not use Atom to engage in any illegal activities, violate any laws, or
                  infringe upon the rights of others.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">2. Content Restrictions</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  You may not upload, post, or transmit any content that is harmful, offensive,
                  defamatory, or violates intellectual property rights.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">3. System Abuse</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  You may not attempt to gain unauthorized access to our systems, interfere with
                  the operation of our services, or use automated systems to access our services
                  without permission.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">4. Enforcement</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  Violations of this policy may result in immediate termination of your account
                  and legal action where appropriate.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#000000]">5. Contact</h2>
                <p className="text-base font-light leading-relaxed text-[#333333]">
                  If you have any questions about this Acceptable Use Policy, please contact us at{" "}
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

