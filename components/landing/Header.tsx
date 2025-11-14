"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1c1c1c] bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/ATOM_blanc.png" alt="Atom logo" width={90} height={26} priority />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#showcase" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Demo
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="https://docs.atom.app" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Docs
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="hidden sm:flex text-sm font-medium text-gray-400 hover:text-white border-0">
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild className="rounded-xl h-9 px-4 text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/sign-up">Get started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
