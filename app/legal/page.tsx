"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const legalPages = [
  {
    title: "Terms of Service",
    href: "/legal/terms",
    description: "The terms and conditions governing your use of Atom.",
  },
  {
    title: "Privacy Policy",
    href: "/legal/privacy",
    description: "How we collect, use, and protect your personal information.",
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookies",
    description: "Information about how we use cookies and similar technologies.",
  },
  {
    title: "Acceptable Use Policy",
    href: "/legal/acceptable-use",
    description: "Guidelines for acceptable use of Atom's services.",
  },
];

export default function LegalPage() {
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
              <h1 className="text-5xl font-light text-[#000000] sm:text-6xl lg:text-7xl">
                Legal
              </h1>
              <p className="text-xl font-light leading-relaxed text-[#333333]">
                Important legal documents and policies for Atom.
              </p>
            </div>

            <div className="space-y-6 border-t border-[rgba(0,0,0,0.08)] pt-12">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial="hidden"
                  animate="visible"
                  variants={subtleFade}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    href={page.href}
                    className="block space-y-2 border-b border-[rgba(0,0,0,0.08)] pb-6 transition-opacity hover:opacity-60"
                  >
                    <h2 className="text-2xl font-semibold text-[#000000]">{page.title}</h2>
                    <p className="text-base font-light text-[#333333]">{page.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}

