"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const productLinks = [
  { label: "Landing", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Docs", href: "/docs" },
];

export function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 lg:px-12">
        <Link href="/" className="text-lg font-bold uppercase tracking-[0.5px] text-[#000000] dark:text-white">
          ATOM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm font-normal text-[#333333] dark:text-[#cccccc] md:flex">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-60"
            >
              Products
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  isProductsOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-lg p-2"
                >
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.04)]"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/pricing" className="transition-opacity hover:opacity-60">
            Pricing
          </Link>
          <Link href="/sign-in" className="transition-opacity hover:opacity-60">
            Login
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="hidden items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-white/50 dark:bg-black/50 backdrop-blur-sm p-2 transition-all hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.04)] md:flex"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-[#000000] dark:text-white" />
                ) : (
                  <Moon className="h-4 w-4 text-[#000000] dark:text-white" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>

          <Button
            className="hidden rounded-full border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#000000] dark:bg-white px-6 py-2 text-sm font-normal text-white dark:text-black hover:bg-[#333333] dark:hover:bg-[#e0e0e0] md:flex"
            asChild
          >
            <Link href="/sign-up">Get Started</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#000000] dark:text-white"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-white/95 dark:bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-[1180px] px-6 py-4 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#999999]">
                  Products
                </p>
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-normal text-[#333333] dark:text-[#cccccc] transition-opacity hover:opacity-60"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/pricing"
                className="block text-sm font-normal text-[#333333] dark:text-[#cccccc] transition-opacity hover:opacity-60"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/sign-in"
                className="block text-sm font-normal text-[#333333] dark:text-[#cccccc] transition-opacity hover:opacity-60"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-sm font-normal text-[#333333] dark:text-[#cccccc]"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      Dark Mode
                    </>
                  )}
                </button>
                <Button
                  className="rounded-full border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#000000] dark:bg-white px-6 py-2 text-sm font-normal text-white dark:text-black hover:bg-[#333333] dark:hover:bg-[#e0e0e0]"
                  asChild
                >
                  <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

