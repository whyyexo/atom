import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

import "./globals.css";
import { MotionConfig } from "framer-motion";

import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atom – Build AI workspaces faster",
  description:
    "Atom is the operating system for AI-driven teams. Spin up agents, iterate on prompts, and collaborate with ease.",
  icons: {
    icon: "/Favicon_noir.png",
    shortcut: "/Favicon_noir.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <div className="relative min-h-screen">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.08),_transparent_55%)]" />
              <div className="absolute left-4 top-4 flex items-center gap-3 text-sm font-semibold text-muted-foreground md:left-8 md:top-6">
                <Image
                  src="/ATOM_SECURE_blanc.png"
                  alt="Atom Secure badge"
                  width={120}
                  height={32}
                  className="brightness-110 saturate-150"
                  priority
                />
              </div>
              {children}
            </div>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
