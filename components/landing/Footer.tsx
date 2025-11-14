"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.atom.app" },
  { label: "Blog", href: "/blog" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1c1c1c] bg-[#0a0a0a]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/A_blanc.png" alt="Atom icon" width={20} height={20} />
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Atom Labs
            </p>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
