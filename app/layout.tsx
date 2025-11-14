import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Geist_Mono } from "next/font/google";

import "./globals.css";
import { MotionConfig } from "framer-motion";

import { ThemeProvider } from "@/components/providers/theme-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${manrope.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <MotionConfig reducedMotion="user" transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}>
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
