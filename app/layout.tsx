import type { Metadata } from "next";
import { Geist_Sans } from "geist/font/sans";
import { Geist_Mono } from "geist/font/mono";

import "./globals.css";
import { MotionConfig } from "framer-motion";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Atom OS – Your AI-driven life, organized.",
  description:
    "Atom OS centralizes your calendar, goals, notes and habits — and actually helps you move forward. Personal AI co-pilot that learns from you and acts for you.",
  keywords: ["AI", "productivity", "personal assistant", "automation", "life organization"],
  authors: [{ name: "Atom Labs" }],
  openGraph: {
    title: "Atom OS – Your AI-driven life, organized.",
    description: "Atom OS centralizes your calendar, goals, notes and habits — and actually helps you move forward.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atom OS – Your AI-driven life, organized.",
    description: "Atom OS centralizes your calendar, goals, notes and habits — and actually helps you move forward.",
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Atom OS",
              applicationCategory: "ProductivityApplication",
              description: "Your AI-driven life, organized.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${Geist_Sans.variable} ${Geist_Mono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
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
