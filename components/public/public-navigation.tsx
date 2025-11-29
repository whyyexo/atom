"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Login", href: "/login" },
];

export function PublicNavigation() {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-white border-b border-[rgba(0,0,0,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-5 lg:px-12">
        <Link href="/" className="text-lg font-bold uppercase tracking-[0.5px] text-[#000000]">
          ATOM
        </Link>
        <div className="hidden items-center gap-10 text-sm font-normal text-[#333333] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent px-6 py-2 text-sm font-normal text-[#000000] hover:bg-[rgba(0,0,0,0.04)] md:flex"
            asChild
          >
            <Link href="/signup">Get Atom</Link>
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#000000]"
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
      {isMobileMenuOpen && (
        <div className="border-t border-[rgba(0,0,0,0.08)] bg-white md:hidden">
          <div className="mx-auto max-w-[1180px] px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm font-normal text-[#333333] transition-opacity hover:opacity-60"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="w-full rounded-full border border-[rgba(0,0,0,0.08)] bg-transparent px-6 py-2 text-sm font-normal text-[#000000] hover:bg-[rgba(0,0,0,0.04)]"
              asChild
            >
              <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                Get Atom
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

