"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
];

export function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

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
          isDark
            ? "bg-[rgba(22,22,23,0.8)]"
            : "bg-[rgba(255,255,255,0.8)]",
          isScrolled && "backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.25)]"
        )}
        style={{
          height: isScrolled ? "44px" : "52px",
        }}
      >
        <nav className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-6 lg:px-12">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              animate={{ scale: isScrolled ? 1.05 : 1.0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={isDark ? "/ATOM_blanc.png" : "/ATOM_noir.png"}
                alt="Atom"
                width={80}
                height={21}
                className="h-5 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden items-center justify-center gap-8 text-sm font-normal md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors duration-200",
                  isDark
                    ? "text-white/80 hover:text-white"
                    : "text-black/80 hover:text-black"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className={cn(
                "flex items-center justify-center rounded-md p-1.5 transition-colors",
                isDark
                  ? "text-white/80 hover:text-white hover:bg-white/5"
                  : "text-black/80 hover:text-black hover:bg-black/5"
              )}
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
                  {isDark ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Login */}
            <Link
              href="/sign-in"
              className={cn(
                "hidden text-sm font-normal transition-colors duration-200 md:block",
                isDark
                  ? "text-white/80 hover:text-white"
                  : "text-black/80 hover:text-black"
              )}
            >
              Login
            </Link>

            {/* Get Started CTA */}
            <Button
              className={cn(
                "hidden rounded-md border px-4 py-1.5 text-sm font-normal transition-all duration-200 md:flex",
                isDark
                  ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
                  : "border-black/10 bg-black/5 text-black hover:bg-black/10"
              )}
              asChild
            >
              <Link href="/sign-up">Get Started</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden",
                isDark ? "text-white/80" : "text-black/80"
              )}
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
              className="fixed inset-0 z-40 bg-[rgba(22,22,23,0.8)] backdrop-blur-xl md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-[rgba(22,22,23,0.95)] backdrop-blur-xl p-8 md:hidden",
                !isDark && "bg-[rgba(255,255,255,0.95)]"
              )}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between mb-12">
                  <Image
                    src={isDark ? "/ATOM_blanc.png" : "/ATOM_noir.png"}
                    alt="Atom"
                    width={80}
                    height={21}
                    className="h-5 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "rounded-md p-2 transition-colors",
                      isDark
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-black/80 hover:text-black hover:bg-black/10"
                    )}
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
                      className={cn(
                        "text-lg font-normal transition-colors",
                        isDark
                          ? "text-white/80 hover:text-white"
                          : "text-black/80 hover:text-black"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/sign-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-normal transition-colors",
                      isDark
                        ? "text-white/80 hover:text-white"
                        : "text-black/80 hover:text-black"
                    )}
                  >
                    Login
                  </Link>
                </nav>

                <div className="mt-auto space-y-4">
                  <Button
                    className={cn(
                      "w-full rounded-md border px-4 py-2 text-sm font-normal",
                      isDark
                        ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
                        : "border-black/10 bg-black/5 text-black hover:bg-black/10"
                    )}
                    asChild
                  >
                    <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
