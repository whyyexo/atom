"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "@/components/public/public-layout";
import { ArrowButton } from "@/components/ui/arrow-button";
import { Features8 } from "@/components/ui/features-8";
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
            style={{ objectPosition: "center 70%" }}
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
            <a
              href="https://apps.apple.com/app/atom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-base font-semibold transition-colors hover:bg-gray-50"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.23 7.59 9.2 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span style={{ color: '#000000' }}>Download on the App Store</span>
            </a>
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
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C0D]/80 to-[#0C0C0D] z-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-[#8A8A8A] text-sm">Background image placeholder</div>
          </div>
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
            Notes
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
            Notes that think with you.
          </h2>
          <p className="text-lg font-light text-[#C9C9C9] leading-relaxed max-w-2xl mx-auto">
            Atom Notes on iOS combines speed, structure, and clarity so every idea becomes action, naturally.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Quick Entry (Text left + Image right) */}
      <section className="py-32 bg-[#121214]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                  Quick Entry
                </h3>
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

      {/* SECTION 3 — Grid of 3 blocks */}
      <section className="py-32 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Smart Suggestions</h3>
              <p className="text-[#C9C9C9] text-sm">
                Atom automatically suggests actions based on your context.
              </p>
            </div>
            <div className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Natural Sorting</h3>
              <p className="text-[#C9C9C9] text-sm">
                Your notes sort themselves by importance and usage.
              </p>
            </div>
            <div className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Instant Tags</h3>
              <p className="text-[#C9C9C9] text-sm">
                Keywords are created in a second, without a complicated interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Tasks (Full-width centered) */}
      <section className="relative py-32 bg-[#121214] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121214]/80 to-[#121214] z-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-[#8A8A8A] text-sm">Background image placeholder</div>
          </div>
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
                <h3 className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                  Flow Engine
                </h3>
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
      <section className="py-32 bg-[#121214]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Context Tasks</h3>
              <p className="text-[#C9C9C9] text-sm">
                Tasks appear only when you can actually do them.
              </p>
            </div>
            <div className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Auto-Reschedule</h3>
              <p className="text-[#C9C9C9] text-sm">
                Reminders move intelligently, without creating overload.
              </p>
            </div>
            <div className="bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Focus Triggers</h3>
              <p className="text-[#C9C9C9] text-sm">
                Atom activates focus mode based on your key moments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
