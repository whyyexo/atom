"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PublicLayout } from "@/components/public/public-layout";
import { ArrowButton } from "@/components/ui/arrow-button";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import heroPhoneImage from "@/components/public/3D_phone.png";
import phoneMakeupImage from "@/components/public/PHONE-MAKEUP-main.png";
import activityViewImage from "@/components/public/Activity View (1).svg";
import { Lightbulb, Sparkles, Tag, Target, Calendar, Zap, BookOpen, Library, FileText, PenTool, ClipboardList, Layers } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

// Interactive Image Selector Section
function InteractiveImageSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const items = [
    {
      id: 1,
      title: "Smart Capture",
      description: "Instantly capture thoughts and ideas with intelligent categorization.",
      icon: PenTool,
      image: phoneMakeupImage,
    },
    {
      id: 2,
      title: "Organized Views",
      description: "Access your content through beautifully organized views and filters.",
      icon: ClipboardList,
      image: activityViewImage,
    },
    {
      id: 3,
      title: "Seamless Workflow",
      description: "Everything flows together in a unified, intuitive interface.",
      icon: Layers,
      image: heroPhoneImage,
    },
  ];

  return (
    <section className="py-20 bg-[#0C0C0D]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Large Image */}
        <div className="mb-12 relative h-[600px] rounded-3xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={items[selectedIndex].image}
                alt={items[selectedIndex].title}
                fill
                className="object-contain p-8"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Selection Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isSelected = index === selectedIndex;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className={`relative p-6 rounded-2xl transition-all text-left ${
                  isSelected
                    ? "bg-[#0A84FF]/10"
                    : "bg-[#1A1A1D] border border-transparent hover:border-[#2A2A2E]/30"
                }`}
                style={{
                  boxShadow: isSelected ? '0 10px 25px -5px rgba(10, 132, 255, 0.15)' : 'none',
                }}
              >
                <Icon
                  className="h-8 w-8 mb-4 text-[#8A8A8A]"
                />
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isSelected ? "text-white" : "text-[#C9C9C9]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm font-light text-[#8A8A8A] leading-relaxed">
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// iOS Download Bar Component
function IOSDownloadBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're at the bottom of the page (within 50px)
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 50;
      
      // Hide if at bottom, at top, or scrolling up
      if (isAtBottom || currentScrollY < 100 || currentScrollY < lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        // Show when scrolling down past 300px
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#0C0C0D] border-t border-[#2A2A2E] px-6 py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-white">
                <h3 className="text-lg font-semibold">Get Atom for iOS</h3>
                <p className="text-sm text-[#8A8A8A]">Download on the App Store</p>
              </div>
            </div>
            <a
              href="https://apps.apple.com/app/atom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-2 bg-[#0A84FF] hover:bg-[#379BFF] transition-colors text-white font-semibold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.23 7.59 9.2 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>Download</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Grid component for Section 3 - Notes features
function NotesFeaturesGrid() {
  return (
    <section className="bg-[#0C0C0D] py-16 md:py-32">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-[#1A1A1D] border-[#2A2A2E]">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#2A2A2E] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#2A2A2E]">
                  <Lightbulb className="m-auto h-24 w-24 text-[#0A84FF]" strokeWidth={1} />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition text-white">Smart Suggestions</h2>
                  <p className="text-[#C9C9C9]">Atom automatically suggests actions based on your context.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-[#1A1A1D] border-[#2A2A2E]">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#2A2A2E] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#2A2A2E]">
                  <Sparkles className="m-auto h-24 w-24 text-[#0A84FF]" strokeWidth={1} />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition text-white">Natural Sorting</h2>
                  <p className="text-[#C9C9C9]">Your notes sort themselves by importance and usage.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-[#1A1A1D] border-[#2A2A2E]">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#2A2A2E] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#2A2A2E]">
                  <Tag className="m-auto h-24 w-24 text-[#0A84FF]" strokeWidth={1} />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition text-white">Instant Tags</h2>
                  <p className="text-[#C9C9C9]">Keywords are created in a second, without a complicated interface.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Grid component for Section 6 - Tasks features
function TasksFeaturesGrid() {
  return (
    <section className="bg-[#0C0C0D] py-16 md:py-32">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-[#1A1A1D] border-[#2A2A2E]">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#2A2A2E] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#2A2A2E]">
                  <Target className="m-auto h-24 w-24 text-[#0A84FF]" strokeWidth={1} />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition text-white">Context Tasks</h2>
                  <p className="text-[#C9C9C9]">Tasks appear only when you can actually do them.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-[#1A1A1D] border-[#2A2A2E]">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#2A2A2E] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#2A2A2E]">
                  <Calendar className="m-auto h-24 w-24 text-[#0A84FF]" strokeWidth={1} />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition text-white">Auto-Reschedule</h2>
                  <p className="text-[#C9C9C9]">Reminders move intelligently, without creating overload.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-[#1A1A1D] border-[#2A2A2E]">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#2A2A2E] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#2A2A2E]">
                  <Zap className="m-auto h-24 w-24 text-[#0A84FF]" strokeWidth={1} />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition text-white">Focus Triggers</h2>
                  <p className="text-[#C9C9C9]">Atom activates focus mode based on your key moments.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IOSPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0C0C0D]">
        <div className="absolute inset-0 z-0">
          {/* Large abstract shape behind */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 5 }}>
            <svg width="1200" height="1200" viewBox="0 0 1200 1200" className="opacity-50">
              <defs>
                <linearGradient id="blueGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#0A84FF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0A84FF" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glowFilter">
                  <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Abstract lines and geometric shapes */}
              <path d="M100,300 L500,100 L900,300 L1100,200" stroke="url(#blueGlowGradient)" strokeWidth="3" fill="none" filter="url(#glowFilter)" />
              <path d="M200,600 L400,200 L800,500 L1000,400" stroke="url(#blueGlowGradient)" strokeWidth="3" fill="none" filter="url(#glowFilter)" />
              <path d="M300,900 L600,300 L900,700 L1100,600" stroke="url(#blueGlowGradient)" strokeWidth="3" fill="none" filter="url(#glowFilter)" />
              <path d="M50,500 L350,150 L750,450 L1050,350" stroke="url(#blueGlowGradient)" strokeWidth="2" fill="none" filter="url(#glowFilter)" opacity="0.7" />
              <path d="M150,800 L450,250 L850,650 L1150,550" stroke="url(#blueGlowGradient)" strokeWidth="2" fill="none" filter="url(#glowFilter)" opacity="0.7" />
              
              {/* Diagonal lines crossing */}
              <line x1="0" y1="400" x2="1200" y2="800" stroke="url(#blueGlowGradient)" strokeWidth="2" filter="url(#glowFilter)" opacity="0.6" />
              <line x1="0" y1="800" x2="1200" y2="400" stroke="url(#blueGlowGradient)" strokeWidth="2" filter="url(#glowFilter)" opacity="0.6" />
              <line x1="200" y1="0" x2="1000" y2="1200" stroke="url(#blueGlowGradient)" strokeWidth="2" filter="url(#glowFilter)" opacity="0.5" />
              <line x1="1000" y1="0" x2="200" y2="1200" stroke="url(#blueGlowGradient)" strokeWidth="2" filter="url(#glowFilter)" opacity="0.5" />
              
              {/* Angular shapes */}
              <polygon points="300,200 700,150 800,450 400,500" fill="url(#blueGlowGradient)" filter="url(#glowFilter)" opacity="0.4" />
              <polygon points="500,600 900,550 1000,850 600,900" fill="url(#blueGlowGradient)" filter="url(#glowFilter)" opacity="0.3" />
              <polygon points="200,700 600,650 700,950 300,1000" fill="url(#blueGlowGradient)" filter="url(#glowFilter)" opacity="0.35" />
              
              {/* Zigzag patterns */}
              <path d="M100,400 L300,300 L500,400 L700,300 L900,400 L1100,300" stroke="url(#blueGlowGradient)" strokeWidth="2" fill="none" filter="url(#glowFilter)" opacity="0.6" />
              <path d="M200,700 L400,600 L600,700 L800,600 L1000,700" stroke="url(#blueGlowGradient)" strokeWidth="2" fill="none" filter="url(#glowFilter)" opacity="0.6" />
            </svg>
          </div>
          
          {/* Powerful blue glow behind the phone - above abstract shape, below phone */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 12 }}>
            <div className="relative w-[500px] h-[500px]">
              <div className="absolute inset-0 bg-[#0A84FF] rounded-full blur-[80px] opacity-60" />
              <div className="absolute inset-0 bg-[#0A84FF] rounded-full blur-[60px] opacity-50" />
              <div className="absolute inset-0 bg-[#0A84FF] rounded-full blur-[40px] opacity-40" />
            </div>
          </div>
          
          <Image
            src={heroPhoneImage}
            alt="Atom iOS"
            fill
            className="object-contain object-center"
            style={{ objectPosition: "center center", zIndex: 15 }}
            priority
          />
          
          {/* Gradients to partially hide the phone edges - above the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0D] via-transparent to-[#0C0C0D] z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D] via-transparent to-[#0C0C0D] z-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0D]/40 via-transparent to-[#0C0C0D]/40 z-20" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-48">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
            Atom. Built for iOS
          </h1>
          <p className="text-lg font-light text-[#B5B9C0] leading-relaxed max-w-2xl mx-auto mb-8">
            Experience productivity that feels native, fast, and effortless.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppStoreBadge className="px-8 py-3" />
            <Button
              variant="outline"
              className="rounded-full border border-[#2A2A2E] bg-transparent px-8 py-3 text-base font-normal text-white hover:bg-[#1A1A1D]"
              asChild
            >
              <Link href="#demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 1 — Notes (Full-width centered) */}
      <section className="relative py-32 bg-[#0C0C0D] overflow-hidden">
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mb-16">
          <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
            Atom AI
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
            Intelligence that feels native.
          </h2>
          <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
            Optimized for iOS, Atom AI understands your habits, anticipates your needs, and organizes your ideas before you even think of them.
          </p>
        </div>
        
        {/* Images section */}
        <div className="relative w-full max-w-7xl mx-auto px-6 py-4">
          {/* Main centered image container */}
          <div className="relative flex justify-center items-center">
            {/* Background images - Left and Right - positioned next to center image with more overlap behind */}
            {/* Left image: positioned at left edge of center image (50% - 190px) minus its width (200px) */}
            <div className="absolute opacity-30 pointer-events-none z-0" style={{ left: 'calc(50% - 190px - 200px)', top: '50%', transform: 'translateY(calc(-50% + 10%))' }}>
              <Image
                src={activityViewImage}
                alt="Activity View Left"
                width={200}
                height={437}
                className="object-contain"
              />
            </div>
            {/* Right image: positioned at right edge of center image (50% + 190px) */}
            <div className="absolute opacity-30 pointer-events-none z-0" style={{ left: 'calc(50% + 190px)', top: '50%', transform: 'translateY(calc(-50% + 10%))' }}>
              <Image
                src={activityViewImage}
                alt="Activity View Right"
                width={200}
                height={437}
                className="object-contain"
              />
            </div>
            
            {/* Main centered image - higher z-index */}
            <div className="relative z-20">
              {/* Reflection effect line on top */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent z-30" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-30" />
              <Image
                src={phoneMakeupImage}
                alt="Phone Makeup"
                width={380}
                height={780}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Quick Entry (Text left + Image right) */}
      <section className="py-20 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#0A84FF]" />
                  <h3 className="text-sm font-medium text-[#0A84FF] uppercase tracking-wider">
                    Quick Entry
                  </h3>
                </div>
                <h4 className="text-2xl font-semibold text-white">
                  Capture anything in a heartbeat.
                </h4>
              </div>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                An idea, a task, a thought: Atom on iOS opens an instant input field, optimized for the screen and Apple gestures.
              </p>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                No friction. Just your thoughts, directly recorded.
              </p>
              <ArrowButton href="/download">Discover Quick Entry</ArrowButton>
            </div>
            <div className="relative h-[400px] rounded-2xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#8A8A8A] text-sm">Image placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Image Section */}
      <InteractiveImageSection />

      {/* SECTION 3 — Grid of 3 blocks */}
      <NotesFeaturesGrid />

      {/* SECTION 4 — Tasks (Full-width centered) */}
      <section className="relative py-32 bg-[#0C0C0D] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroPhoneImage}
            alt="Tasks background"
            fill
            className="object-cover object-center opacity-20"
            style={{ objectPosition: "center 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C0D]/80 to-[#0C0C0D] z-10" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
            Tasks
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
            Tasks that follow your rhythm.
          </h2>
          <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
            On iOS, Atom adjusts your tasks based on your availability, habits, and real priorities.
          </p>
        </div>
      </section>

      {/* SECTION 5 — Flow Engine (Text left + Image right) */}
      <section className="py-32 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Library className="h-4 w-4 text-[#0A84FF]" />
                  <h3 className="text-sm font-medium text-[#0A84FF] uppercase tracking-wider">
                    Flow Engine
                  </h3>
                </div>
                <h4 className="text-2xl font-semibold text-white">
                  Your day organizes itself.
                </h4>
              </div>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                Atom on iOS analyzes your habits to anticipate the right moment for each task.
              </p>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                Your day structures itself automatically — without any effort on your part.
              </p>
              <ArrowButton href="/download">Discover Flow Engine</ArrowButton>
            </div>
            <div className="relative h-[400px] rounded-2xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#8A8A8A] text-sm">Image placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Grid of 3 blocks */}
      <TasksFeaturesGrid />

      {/* iOS Download Bar */}
      <IOSDownloadBar />
    </PublicLayout>
  );
}
