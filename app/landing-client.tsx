"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronDown, Sparkles, Calendar, FileText, Brain, Layers, Target } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/public/public-layout";
import { Check, Heart } from "lucide-react";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";
import { AppleIcon } from "@/components/auth/social-icons";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { ArrowButton } from "@/components/ui/arrow-button";
import heroIllustration from "@/components/public/1.avif";

const features = [
  {
    title: "Smart Tasks",
    description: "Prioritize work with context-aware lists that adapt as you plan.",
  },
  {
    title: "Notes & Documents",
    description: "Structure research, briefs, and project docs inside a calm canvas.",
  },
  {
    title: "AI Actions",
    description: "Trigger intelligent workflows that clean notes and prep next steps.",
  },
  {
    title: "Workspaces",
    description: "Organize everything in focused spaces designed for clarity.",
  },
];

const subtleFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function LandingPageClient() {
  return (
    <PublicLayout>
      <HeroSection />
      <TextRevealSection />
      <DownloadPromoSection />
      <FeaturesSection />
      <ShowcaseSection />
      <FeatureHighlightsSection />
      <PricingSection />
    </PublicLayout>
  );
}

function HeroSection() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 pt-20 pb-32 text-center lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Work Smarter. Stay Focused. with a{" "}
            <span className="bg-gradient-to-r from-[#0A84FF] to-[#379BFF] bg-clip-text text-transparent">
              science based
            </span>{" "}
            productivity app.
          </h1>
          <p className="mt-8 text-base font-light leading-relaxed text-[#C9C9C9] sm:text-lg">
            <span className="bg-gradient-to-r from-[#0A84FF] to-[#379BFF] bg-clip-text text-transparent">Reclaim hours</span> every week with an <span className="bg-gradient-to-r from-[#0A84FF] to-[#379BFF] bg-clip-text text-transparent">intelligent workspace</span> powered by <span className="bg-gradient-to-r from-[#0A84FF] to-[#379BFF] bg-clip-text text-transparent">science</span> — tasks, notes, and your <span className="bg-gradient-to-r from-[#0A84FF] to-[#379BFF] bg-clip-text text-transparent">AI assistant</span>, all working seamlessly together. Built for builders, operators, and relentless achievers.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="rounded-full bg-[#0A84FF] px-8 py-3 text-base font-normal text-white hover:bg-[#379BFF] border-0"
              asChild
            >
              <Link href="/download">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border border-[#2A2A2E] bg-transparent px-8 py-3 text-base font-normal text-white hover:bg-[#1A1A1D]"
              asChild
            >
              <Link href="#showcase">View Demo</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtleFade}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 w-full"
        >
          <MacMockup />
        </motion.div>
      </div>
    </section>
  );
}

const featureItems = [
  {
    id: "assistant",
    icon: Brain,
    name: "AI Assistant",
    description: "Intelligent help that understands context and adapts to your workflow.",
  },
  {
    id: "planning",
    icon: Calendar,
    name: "Smart Planning",
    description: "Auto-plan your day based on energy levels and priorities.",
  },
  {
    id: "notes",
    icon: FileText,
    name: "Notes & Tasks",
    description: "Structure your thoughts with automatic organization.",
  },
  {
    id: "workspace",
    icon: Layers,
    name: "Workspaces",
    description: "Organize everything in focused spaces for clarity.",
  },
  {
    id: "focus",
    icon: Target,
    name: "Focus Mode",
    description: "Science-backed tools to maintain deep concentration.",
  },
];

function MacMockup() {
  const [selectedFeature, setSelectedFeature] = useState(featureItems[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuBarImageError, setMenuBarImageError] = useState(false);

  // Handle menu selection change
  const handleMenuChange = (index: number) => {
    if (index >= 0 && index < featureItems.length) {
      setActiveIndex(index);
      setSelectedFeature(featureItems[index]);
    }
  };

  return (
    <div className="mx-auto w-full">
      {/* Title Section */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white">Engineered for clarity</h2>
        <p className="mt-2 text-base font-light text-[#8A8A8A]">One system, designed for deeper focus.</p>
      </div>

      {/* Mac Screen - Just the rectangle, larger, no support - 140% width centered */}
      <div className="relative w-[140%] max-w-none left-1/2 -translate-x-1/2">
        {/* Screen with blurred logo background - Larger with original aspect ratio */}
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] shadow-2xl select-none">
          {/* macOS Menu Bar - From Figma CSS */}
          <div className="absolute top-0 left-0 right-0 z-20 h-[34px] select-none overflow-hidden">
            {/* Background with blur and gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)' }}></div>
            <div className="absolute inset-0 bg-black/12 backdrop-blur-md"></div>
            
            <div className="absolute inset-0 flex flex-row justify-between items-center px-[10px] py-[5px] gap-[98px] isolate w-full h-[34px] relative z-10">
              {/* Leading Group - Left side */}
              <div className="flex flex-row items-center p-0 w-[464px] h-6 flex-none order-0 flex-grow-0 z-0">
                {/* Apple Logo */}
                <div className="w-[33px] h-6 rounded-[4px] flex-none order-0 flex-grow-0 relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-5 text-center text-white" style={{ fontFamily: 'SF Pro', fontWeight: 400, fontSize: '16.3px', lineHeight: '20px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    <AppleIcon className="w-[15px] h-5 text-white" />
                  </div>
                </div>
                
                {/* App Name */}
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[57px] h-6 rounded-[4px] flex-none order-1 flex-grow-0">
                  <div className="w-[35px] h-4 text-white flex items-center text-center flex-none order-0 flex-grow-0" style={{ fontFamily: 'SF Pro', fontWeight: 700, fontSize: '13px', lineHeight: '16px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    Atom
                  </div>
                </div>
                
                {/* Menu Items */}
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[63px] h-6 rounded-[4px] flex-none order-2 flex-grow-0">
                  <div className="w-[41px] h-4 text-white flex items-center text-center flex-none order-0 flex-grow-0" style={{ fontFamily: 'SF Pro', fontWeight: 590, fontSize: '13px', lineHeight: '16px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    Finder
                  </div>
                </div>
                
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[45px] h-6 rounded-[4px] flex-none order-3 flex-grow-0">
                  <div className="w-[23px] h-4 text-white flex items-center text-center flex-none order-0 flex-grow-0" style={{ fontFamily: 'SF Pro', fontWeight: 590, fontSize: '13px', lineHeight: '16px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    File
                  </div>
                </div>
                
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[47px] h-6 rounded-[4px] flex-none order-4 flex-grow-0">
                  <div className="w-[25px] h-4 text-white flex items-center text-center flex-none order-0 flex-grow-0" style={{ fontFamily: 'SF Pro', fontWeight: 590, fontSize: '13px', lineHeight: '16px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    Edit
                  </div>
                </div>
                
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[53px] h-6 rounded-[4px] flex-none order-5 flex-grow-0">
                  <div className="w-[31px] h-4 text-white flex items-center text-center flex-none order-0 flex-grow-0" style={{ fontFamily: 'SF Pro', fontWeight: 590, fontSize: '13px', lineHeight: '16px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    View
                  </div>
                </div>
                
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[40px] h-6 rounded-[4px] flex-none order-6 flex-grow-0">
                  <div className="w-[18px] h-4 text-white flex items-center text-center flex-none order-0 flex-grow-0" style={{ fontFamily: 'SF Pro', fontWeight: 590, fontSize: '13px', lineHeight: '16px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    Go
                  </div>
                </div>
                
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[74px] h-6 rounded-[4px] flex-none order-7 flex-grow-0">
                  <div className="w-[52px] h-4 text-white flex items-center text-center flex-none order-0 flex-grow-0" style={{ fontFamily: 'SF Pro', fontWeight: 590, fontSize: '13px', lineHeight: '16px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    Window
                  </div>
                </div>
                
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[52px] h-6 rounded-[4px] flex-none order-8 flex-grow-0">
                  <div className="w-[30px] h-4 text-white flex items-center text-center flex-none order-0 flex-grow-0" style={{ fontFamily: 'SF Pro', fontWeight: 590, fontSize: '13px', lineHeight: '16px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    Help
                  </div>
                </div>
              </div>
              
              {/* Trailing Group - Right side */}
              <div className="flex flex-row justify-end items-center p-0 w-[309px] h-6 flex-none order-1 flex-grow-0 z-[1]">
                {/* Wi-Fi Icon */}
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[40px] h-6 rounded-[4px] flex-none order-0 flex-grow-0">
                  <svg className="w-[18px] h-4 text-white/85" fill="none" stroke="currentColor" viewBox="0 0 16 12" strokeWidth="1.2" strokeLinecap="round">
                    <path d="M2 8.5c2-2 4-2.5 6-2.5s4 .5 6 2.5"/>
                    <path d="M3.5 10c1.5-1.5 2.5-2 4.5-2s3 .5 4.5 2"/>
                    <path d="M5.5 11.5c1-1 1.5-1.5 2.5-1.5s1.5 .5 2.5 1.5"/>
                    <circle cx="8" cy="8.5" r="0.6" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Search/Spotlight Icon */}
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[38px] h-6 rounded-[4px] flex-none order-1 flex-grow-0">
                  <svg className="w-[16px] h-4 text-white/85" fill="none" stroke="currentColor" viewBox="0 0 16 16" strokeWidth="1.5">
                    <circle cx="7" cy="7" r="4"/>
                    <path d="m11 11 3 3" strokeLinecap="round"/>
                  </svg>
                </div>
                
                {/* Control Center Icon */}
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[38px] h-6 rounded-[4px] flex-none order-2 flex-grow-0">
                  <svg className="w-[16px] h-4 text-white/85" fill="none" stroke="currentColor" viewBox="0 0 16 12" strokeWidth="1.2">
                    <rect x="2" y="4" width="12" height="1.5" rx="0.75"/>
                    <rect x="2" y="6.25" width="12" height="1.5" rx="0.75"/>
                  </svg>
                </div>
                
                {/* Battery Icon */}
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[38px] h-6 rounded-[4px] flex-none order-3 flex-grow-0">
                  <svg className="w-[16px] h-4 text-white/85" viewBox="0 0 22 12">
                    <rect x="1" y="3.5" width="18" height="5" rx="0.8" fill="none" stroke="currentColor" strokeWidth="1.2"/>
                    <rect x="19.5" y="5.5" width="1.5" height="1" rx="0.2" fill="currentColor"/>
                    <rect x="2.5" y="4.5" width="13.5" height="3" rx="0.3" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Date and Time */}
                <div className="flex flex-row items-start px-[11px] py-1 gap-[10px] w-[155px] h-6 rounded-[4px] flex-none order-4 flex-grow-0">
                  <div className="w-[133px] h-4 text-white flex items-center text-center flex-none order-0 flex-grow-0" style={{ fontFamily: 'SF Pro', fontWeight: 590, fontSize: '13px', lineHeight: '16px', textShadow: '0px 1px 6px #CCCCCC' }}>
                    Mon Jun 10 9:41 AM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blurred Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Image
              src="/ATOM_blanc.png"
              alt="Atom Logo"
              width={400}
              height={112}
              className="h-auto w-[400px] blur-[2px] invert"
            />
          </div>

          {/* Product Mockup Center */}
          <div className="absolute inset-4 top-16 flex items-center justify-center select-none">
            <div className="h-full w-full max-w-2xl rounded-xl bg-[#1A1A1D]/90 shadow-xl backdrop-blur-sm border border-[#2A2A2E]">
              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center">
                  {(() => {
                    const Icon = selectedFeature.icon;
                    return <Icon className="mx-auto h-16 w-16 text-[#0A84FF]" />;
                  })()}
                  <h3 className="mt-4 text-xl font-semibold text-white select-none">{selectedFeature.name}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* macOS Sequoia Dock - More discrete and modern */}
          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
            <div className="relative flex items-center gap-1.5 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-2xl px-2.5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/10 dark:border-white/5">
              {featureItems.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={feature.id}
                    onClick={() => handleMenuChange(index)}
                    className="relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        y: isActive ? -3 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="relative z-10"
                    >
                      <Icon
                        className={`w-4 h-4 transition-all duration-200 ${
                          isActive 
                            ? "text-[#0A84FF] drop-shadow-sm" 
                            : "text-[#8A8A8A]/70"
                        }`}
                      />
                    </motion.div>
                    {/* Active background indicator - more subtle */}
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute inset-0 rounded-lg bg-[#a8d5ff]/15 dark:bg-[#a8d5ff]/20"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Description - No line above */}
      <motion.div
        key={selectedFeature.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 text-center"
      >
        <p className="text-lg leading-relaxed">
          <span className="font-semibold text-white">{selectedFeature.name}.</span>{" "}
          <span className="font-light text-[#8A8A8A]">{selectedFeature.description}</span>
        </p>
      </motion.div>
    </div>
  );
}

function TextRevealSection() {
  return (
    <section className="relative w-full bg-[#0C0C0D] py-32" id="text-reveal-section">
      <div className="relative min-h-[120vh]">
        <div className="sticky top-0 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center">
              {/* First phrase - always visible, bigger, single line */}
              <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white text-center whitespace-nowrap mb-0">
                It's not about working faster.
              </p>
              
              {/* Second phrase - revealed on scroll, centered, directly below */}
              <div className="w-full flex justify-center mt-6">
                <TextRevealByWord text="It's about finally feeling in control of your time." />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[120vh]" aria-hidden="true" />
      </div>
    </section>
  );
}

function DownloadPromoSection() {
  return (
    <section className="relative py-24 bg-[#0C0C0D] overflow-hidden">
      <div className="absolute -left-20 top-12 w-96 h-96 rounded-full bg-[#0A84FF]/8 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-2 relative z-10 text-left">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Made for iOS
          </h3>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: '#B5B9C0', opacity: 0.7 }}>
            Made to feel right.
          </h3>
          <div className="flex items-center gap-3 pt-2">
            <AppStoreBadge className="px-5 py-3" />
            <ArrowButton href="/about">Learn more</ArrowButton>
          </div>
        </div>

        {/* Outer container with gradient border effect - creates the light border */}
        <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl"
          style={{
            background: 'radial-gradient(circle 230px at 0% 0%, rgba(255,255,255,0.4), transparent)',
            padding: '1px',
          }}
        >
          {/* Inner card with actual border */}
          <div className="relative w-full h-full rounded-[15px] border border-[#2A2A2E] bg-transparent overflow-hidden">
            {/* Light effect on border corner - white glow on the border itself */}
            <div 
              className="absolute -top-[1px] -left-[1px] w-48 h-48 pointer-events-none z-10"
              style={{
                background: 'radial-gradient(circle 100px at 0% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 15%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                borderRadius: '15px 0 0 0',
              }}
            />
            <Image
              src={heroIllustration}
              alt="Atom interface illustration"
              fill
              className="object-cover rounded-[15px]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="bg-[#0C0C0D] px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="mb-6 h-12 w-12 rounded-lg border border-[#2A2A2E] bg-[#1A1A1D]"></div>
              <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="text-base font-light leading-relaxed text-[#C9C9C9]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureHighlightsSection() {
  return (
    <section className="bg-[#0C0C0D] px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="space-y-32">
          {[
            {
              title: "Organize your thoughts",
              text: "Capture ideas, structure projects, and keep everything in one place. Atom helps you think clearly by removing distractions and focusing on what matters.",
            },
            {
              title: "Automate your workflow",
              text: "Let AI handle the repetitive tasks. From cleaning notes to generating summaries, Atom works in the background so you can focus on creating.",
            },
            {
              title: "Collaborate seamlessly",
              text: "Share workspaces with your team. Real-time updates keep everyone aligned without the noise of traditional collaboration tools.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={subtleFade}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="max-w-2xl space-y-6"
            >
              <h3 className="text-4xl font-semibold text-white">{item.title}</h3>
              <p className="text-lg font-light leading-relaxed text-[#C9C9C9]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section id="showcase" className="bg-[#0C0C0D] px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={subtleFade}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="mx-auto w-full max-w-6xl rounded-lg bg-[#1A1A1D] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-[#2A2A2E]">
            <div className="aspect-video flex items-center justify-center text-[#8A8A8A]">
              Product Screenshot
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const freePlanFeatures = [
  "Atom Assistant (Lite) — quick answers, basic help, simple summaries",
  "Smart Workspace access — notes, tasks & calendar in one place",
  "Unlimited notes",
  "Up to 3 projects",
  "Daily smart suggestions (Lite)",
  "Basic planning assistance",
  "Cross-device sync (Web + Mobile)",
  "Community support",
];

const proCategories = [
  {
    title: "Atom Assistant (Pro)",
    features: [
      "Deep reasoning",
      "Advanced summaries & rewrites",
      "Context-aware help (school, work, personal)",
      "Memory-based suggestions",
      "Proactive recommendations",
    ],
    href: "/features/atom-assistant",
  },
  {
    title: "Smart Planning OS",
    features: [
      "Auto-plan your day, week, and priorities",
      "Dynamic scheduling based on your energy & free time",
      "Personalized focus windows",
    ],
    href: "/features/planning",
  },
  {
    title: "Intelligent Notes & Tasks",
    features: [
      "Automatic structuring of your notes",
      "Task prioritization that adapts to your day",
      "Instant study sheets creating (science-based)",
    ],
    href: "/features/notes-tasks",
  },
  {
    title: "Unlimited Workspace",
    features: [
      "Unlimited projects",
      "Unlimited workspaces",
    ],
    href: "/features/workspace",
  },
  {
    title: "Real-time collaboration",
    features: [
      "Share docs, notes, and tasks",
      "Collaborative editing",
    ],
    href: "/features/collaboration",
  },
  {
    title: "Export & Data Freedom",
    features: [
      "Export to Markdown, PDF, and more",
      "Cloud backup options",
    ],
    href: "/features/export",
  },
  {
    title: "Full Integrations",
    features: [
      "Google Calendar",
      "Notion Calendar",
    ],
    href: "/features/integrations",
  },
  {
    title: "Advanced Analytics",
    features: [
      "Productivity metrics",
      "Focus time tracking",
      "Weekly insights",
    ],
    href: "/features/analytics",
  },
  {
    title: "Priority Support",
    features: [
      "Faster response",
      "Priority beta access",
      "Early feature unlocks",
    ],
    href: "/features/support",
  },
];

function PricingSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setShowScrollIndicator(!isAtBottom);
      setIsScrolling(scrollTop > 0);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="pricing" className="bg-[#0C0C0D] px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={subtleFade}
          transition={{ duration: 0.6 }}
          className="rounded-xl flex flex-col justify-between border border-[#2A2A2E] p-1 bg-[#121214]"
        >
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Free Plan */}
            <div className="flex flex-col justify-between p-6 space-y-4 flex-1 bg-[#1A1A1D] rounded-xl border border-[#2A2A2E]">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium text-white">Free</h2>
                  <span className="my-3 block text-2xl font-semibold text-white">$0 / mo</span>
                  <p className="text-sm font-light text-[#C9C9C9]">Everything you need to experience the Atom ecosystem.</p>
                </div>
                <Button
                  asChild
                  className="w-full rounded-full border border-[#2A2A2E] bg-transparent text-white hover:bg-[#1A1A1D]"
                  variant="outline"
                >
                  <Link href="/download">Get Started</Link>
                </Button>
              </div>
              <ul className="border-t border-[#2A2A2E] pt-4 list-outside space-y-3 text-sm">
                {freePlanFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#C9C9C9]">
                    <Check className="size-3 text-[#0A84FF] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col justify-between p-6 space-y-4 w-full md:w-1/2 bg-[#1A1A1D] rounded-xl border border-[#2A2A2E]">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h2 className="font-medium text-white">Pro</h2>
                    <span className="my-3 block text-2xl font-semibold text-white">$7 / mo</span>
                    <p className="text-sm font-light text-[#C9C9C9]">Unlock the full power of Atom.</p>
                  </div>
                  <Button
                    asChild
                    className="w-full rounded-full bg-[#0A84FF] text-white hover:bg-[#379BFF] border-0"
                    variant="default"
                  >
                    <Link href="/download">Upgrade to Pro</Link>
                  </Button>
                </div>
              </div>
              <div className="relative mt-4">
                <p className="text-sm font-semibold text-white text-center relative z-10">
                  Includes everything in Free, plus:
                </p>
                {isScrolling && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 backdrop-blur-sm bg-white/20 rounded-xl -z-0"
                    style={{ 
                      left: '-1.5rem',
                      right: '-1.5rem',
                      top: '-100%',
                      bottom: '-100%',
                      height: 'calc(100% + 200%)'
                    }}
                  />
                )}
              </div>
              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="space-y-3 max-h-[500px] overflow-y-auto scrollbar-hide mt-4"
                >
                  {proCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={subtleFade}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group rounded-lg p-3 border border-[#2A2A2E] bg-[#121214] hover:border-[#2A2A2E]/80 transition-all relative"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xs font-semibold text-white">
                          {category.title}
                        </h4>
                        <Link 
                          href={category.href}
                          className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8A8A] hover:text-white transition-colors" />
                        </Link>
                      </div>
                      <ul className="space-y-1.5">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-xs text-[#C9C9C9]">
                            <Check className="size-3 flex-shrink-0 mt-0.5 text-[#0A84FF]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Scroll Indicator Bubble */}
                {showScrollIndicator && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[80%]"
                  >
                    <div className="relative w-full h-10 rounded-full backdrop-blur-sm bg-[#1A1A1D]/50 border border-[#2A2A2E] flex items-center justify-center shadow-lg">
                      <motion.div
                        animate={{
                          y: [0, 6, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ChevronDown className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Donation Section */}
        <div className="mt-12 flex items-center justify-center gap-3 border-t border-[#2A2A2E] pt-6">
          <Heart className="h-4 w-4 text-white" />
          <p className="text-sm font-light text-white">
            <span className="text-[#0A84FF]">2%</span> of all revenue is donated to{" "}
            <Link
              href="/impact"
              className="text-[#0A84FF] underline decoration-[#0A84FF] underline-offset-2 hover:text-[#379BFF] transition-colors"
            >
              social and educational organizations
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

