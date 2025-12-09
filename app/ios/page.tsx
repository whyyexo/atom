"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "@/components/public/public-layout";
import { ArrowButton } from "@/components/ui/arrow-button";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import iosHeadImage from "@/components/public/IOS_HEAD.webp";
import phoneMakeupImage from "@/components/public/PHONE-MAKEUP-main.svg";
import activityViewImage from "@/components/public/Activity View (1).svg";
import { Lightbulb, Sparkles, Tag, Target, Calendar, Zap } from 'lucide-react';

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
        <div className="relative w-full max-w-7xl mx-auto px-6 py-8">
          {/* Main centered image container */}
          <div className="relative flex justify-center items-center">
            {/* Background images - Left and Right - positioned to overlap 5% behind center image */}
            <div className="absolute left-0 opacity-30 pointer-events-none z-0" style={{ top: '50%', transform: 'translateY(calc(-50% + 5%))' }}>
              <Image
                src={activityViewImage}
                alt="Activity View Left"
                width={200}
                height={437}
                className="object-contain"
              />
            </div>
            <div className="absolute right-0 opacity-30 pointer-events-none z-0" style={{ top: '50%', transform: 'translateY(calc(-50% + 5%))' }}>
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
                width={450}
                height={920}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Quick Entry (Text left + Image right) */}
      <section className="py-32 bg-[#0C0C0D]">
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
      <NotesFeaturesGrid />

      {/* SECTION 4 — Tasks (Full-width centered) */}
      <section className="relative py-32 bg-[#0C0C0D] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={iosHeadImage}
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
      <TasksFeaturesGrid />
    </PublicLayout>
  );
}
