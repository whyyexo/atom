"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black p-4 sm:p-6">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card container with premium glass effect */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(22,22,23,0.75)] backdrop-blur-xl shadow-2xl">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
          
          {/* Content */}
          <div className="relative p-8 sm:p-10">
            {(title || subtitle) && (
              <div className="mb-8 text-center">
                {title && (
                  <h1 className="mb-2 text-3xl font-semibold tracking-tight text-white">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="text-sm font-light text-white/60">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

