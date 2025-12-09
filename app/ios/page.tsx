"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "@/components/public/public-layout";
import { ArrowButton } from "@/components/ui/arrow-button";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { Button } from "@/components/ui/button";
import iosHeadImage from "@/components/public/IOS_HEAD.webp";

export default function IOSPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0C0C0D]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C0D]/60 to-[#0C0C0D] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D] via-transparent to-transparent z-10" />
          <Image
            src={iosHeadImage}
            alt="Atom iOS"
            fill
            className="object-cover object-center"
            style={{ objectPosition: "center 60%" }}
            priority
          />
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

      {/* Section 2 — Native Performance */}
      <section className="py-32 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Native Performance
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              Powered by the core of iOS.
            </h2>
            <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
              Atom takes advantage of Apple's performance frameworks to deliver a smooth, instant, and fluid experience — the way iOS is meant to feel.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Metal-accelerated rendering",
              "Instant launch times",
              "Zero-lag animations",
              "Butter-smooth scrolling",
              "Optimized for every Apple chip (A-Series & M-Series)",
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Intelligent Notifications */}
      <section className="py-32 bg-[#121214]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Intelligent Notifications
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              Notifications that work with you.
            </h2>
            <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
              Atom uses the full power of Apple's notification system to remind you at the perfect moment — not a second too late, not a second too early.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Smart reminders (based on context & behavior)",
              "Actionable notifications",
              "Lock-screen quick actions",
              "Dynamic alerts based on focus mode",
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Deep System Integration */}
      <section className="py-32 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Deep System Integration
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              Feels like part of your iPhone.
            </h2>
            <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
              Atom fits seamlessly into the Apple ecosystem, letting you access everything instantly, wherever you are.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Share Sheet integration",
              "Widgets (Home Screen, Lock Screen, StandBy mode)",
              "Siri shortcuts & voice commands",
              "Handoff between iPhone → iPad → Mac",
              "iCloud sync for instant data continuity",
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Siri & Voice Intelligence */}
      <section className="py-32 bg-[#121214]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Siri & Voice Intelligence
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              Your tasks. One sentence away.
            </h2>
            <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
              Create, manage, and complete items hands-free. Siri knows exactly what you mean.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '"Add a reminder in Atom"',
              '"What\'s next on Atom today?"',
              '"Complete my last task"',
              "Custom Siri Shortcuts",
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Gestures & Haptics */}
      <section className="py-32 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Gestures & Haptics
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              Gesture-perfect. Haptic-deep.
            </h2>
            <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
              Every interaction feels alive with iOS-native haptics and fluid gestures designed to make speed feel natural.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Haptic feedback on key actions",
              "Edge swipes to navigate",
              "Drag & drop between apps",
              "Long-press menus",
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Widgets & StandBy */}
      <section className="py-32 bg-[#121214]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Widgets & StandBy
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              See your day. Even when you don't open the app.
            </h2>
            <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
              Atom surfaces the right information exactly when you need it — from your Lock Screen to your desk.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Lock Screen widgets",
              "StandBy productivity mode",
              "Home Screen progress blocks",
              "Live Activity timers",
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Privacy & Secure Storage */}
      <section className="py-32 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Privacy & Secure Storage
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              Secure by default.
            </h2>
            <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
              Atom uses Apple's secure storage, biometric authentication, and on-device processing to protect everything you create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "FaceID unlock",
              "Keychain-secured data",
              "On-device intelligence",
              "Zero 3rd-party tracking",
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 — Atom + macOS */}
      <section className="py-32 bg-[#121214]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Atom + macOS
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              Built for your whole ecosystem.
            </h2>
            <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
              Thanks to Apple's unified codebase, Atom expands seamlessly to your Mac — with the same speed, the same interface, and the same experience.
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
