"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Science", href: "/science" },
  { label: "Blog", href: "/blog" },
];

export function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
            : "bg-transparent"
        )}
        style={{
          height: "64px",
        }}
      >
        <nav className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-6 lg:px-12">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ATOM_noir.png"
              alt="Atom"
              width={60}
              height={16}
              className="h-5 w-auto"
              priority
            />
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden items-center justify-center gap-8 text-sm font-normal md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#000000]/80 hover:text-[#000000] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* Sign In Button */}
            <Link
              href="/login"
              className="hidden rounded-full bg-[#0071e3] px-6 py-2 text-sm font-normal text-white hover:bg-[#0077ed] transition-all duration-200 md:block"
            >
              Sign in
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#000000]/80 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.95)] backdrop-blur-xl md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-[rgba(0,0,0,0.95)] backdrop-blur-xl p-8 md:hidden"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between mb-12">
                  <Image
                    src="/ATOM_blanc.png"
                    alt="Atom"
                    width={60}
                    height={16}
                    className="h-4 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-normal text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 rounded-full bg-[#0071e3] px-6 py-3 text-base font-normal text-white hover:bg-[#0077ed] transition-colors text-center"
                  >
                    Sign in
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
