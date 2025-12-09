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
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                  Performance
                </h3>
                <h4 className="text-2xl font-semibold text-white">
                  Native iOS Experience
                </h4>
              </div>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                Atom takes advantage of Apple's performance frameworks to deliver a smooth, instant, and fluid experience — the way iOS is meant to feel.
              </p>
              <div className="space-y-3">
                <p className="text-[#C9C9C9]">• Metal-accelerated rendering</p>
                <p className="text-[#C9C9C9]">• Instant launch times</p>
                <p className="text-[#C9C9C9]">• Zero-lag animations</p>
                <p className="text-[#C9C9C9]">• Butter-smooth scrolling</p>
                <p className="text-[#C9C9C9]">• Optimized for every Apple chip (A-Series & M-Series)</p>
              </div>
              <ArrowButton href="/download">Learn more</ArrowButton>
            </div>
            <div className="relative h-[400px] rounded-2xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#8A8A8A] text-sm">Image placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section 1 */}
      <Features8 />

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
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#8A8A8A] text-sm">Image placeholder</div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                  Notifications
                </h3>
                <h4 className="text-2xl font-semibold text-white">
                  Smart Reminders
                </h4>
              </div>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                Atom uses the full power of Apple's notification system to remind you at the perfect moment — not a second too late, not a second too early.
              </p>
              <div className="space-y-3">
                <p className="text-[#C9C9C9]">• Smart reminders (based on context & behavior)</p>
                <p className="text-[#C9C9C9]">• Actionable notifications</p>
                <p className="text-[#C9C9C9]">• Lock-screen quick actions</p>
                <p className="text-[#C9C9C9]">• Dynamic alerts based on focus mode</p>
              </div>
              <ArrowButton href="/download">Learn more</ArrowButton>
            </div>
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
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                  Integration
                </h3>
                <h4 className="text-2xl font-semibold text-white">
                  Apple Ecosystem
                </h4>
              </div>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                Atom fits seamlessly into the Apple ecosystem, letting you access everything instantly, wherever you are.
              </p>
              <div className="space-y-3">
                <p className="text-[#C9C9C9]">• Share Sheet integration</p>
                <p className="text-[#C9C9C9]">• Widgets (Home Screen, Lock Screen, StandBy mode)</p>
                <p className="text-[#C9C9C9]">• Siri shortcuts & voice commands</p>
                <p className="text-[#C9C9C9]">• Handoff between iPhone → iPad → Mac</p>
                <p className="text-[#C9C9C9]">• iCloud sync for instant data continuity</p>
              </div>
              <ArrowButton href="/download">Learn more</ArrowButton>
            </div>
            <div className="relative h-[400px] rounded-2xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#8A8A8A] text-sm">Image placeholder</div>
              </div>
            </div>
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
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#8A8A8A] text-sm">Image placeholder</div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                  Voice Control
                </h3>
                <h4 className="text-2xl font-semibold text-white">
                  Siri Integration
                </h4>
              </div>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                Create, manage, and complete items hands-free. Siri knows exactly what you mean.
              </p>
              <div className="space-y-3">
                <p className="text-[#C9C9C9]">• "Add a reminder in Atom"</p>
                <p className="text-[#C9C9C9]">• "What's next on Atom today?"</p>
                <p className="text-[#C9C9C9]">• "Complete my last task"</p>
                <p className="text-[#C9C9C9]">• Custom Siri Shortcuts</p>
              </div>
              <ArrowButton href="/download">Learn more</ArrowButton>
            </div>
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
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                  Interaction
                </h3>
                <h4 className="text-2xl font-semibold text-white">
                  Native Gestures
                </h4>
              </div>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                Every interaction feels alive with iOS-native haptics and fluid gestures designed to make speed feel natural.
              </p>
              <div className="space-y-3">
                <p className="text-[#C9C9C9]">• Haptic feedback on key actions</p>
                <p className="text-[#C9C9C9]">• Edge swipes to navigate</p>
                <p className="text-[#C9C9C9]">• Drag & drop between apps</p>
                <p className="text-[#C9C9C9]">• Long-press menus</p>
              </div>
              <ArrowButton href="/download">Learn more</ArrowButton>
            </div>
            <div className="relative h-[400px] rounded-2xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#8A8A8A] text-sm">Image placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section 2 - Different Layout */}
      <section className="bg-[#121214] py-16 md:py-32">
        <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
          <div className="relative">
            <div className="relative z-10 grid grid-cols-6 gap-3">
              <div className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg">
                <div className="p-6">
                  <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#2A2A2E] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#2A2A2E]">
                    <div className="m-auto h-24 w-24 text-[#0A84FF] flex items-center justify-center text-4xl">⚡</div>
                  </div>
                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <h2 className="text-lg font-medium transition text-white">Fast Performance</h2>
                    <p className="text-[#C9C9C9] text-sm">Optimized for speed and efficiency.</p>
                  </div>
                </div>
              </div>
              <div className="relative col-span-full flex overflow-hidden lg:col-span-2 bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg">
                <div className="relative m-auto size-fit pt-6 p-6">
                  <div className="relative flex h-24 w-56 items-center">
                    <svg className="text-[#C9C9C9] absolute inset-0 size-full" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="mx-auto block w-fit text-5xl font-semibold text-white">100%</span>
                  </div>
                  <h2 className="mt-6 text-center text-3xl font-semibold text-white">Customizable</h2>
                </div>
              </div>
              <div className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-[#1A1A1D] border border-[#2A2A2E] rounded-lg">
                <div className="p-6">
                  <div className="pt-6 lg:px-6">
                    <div className="h-32 w-full bg-[#2A2A2E] rounded-lg flex items-center justify-center">
                      <span className="text-[#8A8A8A] text-sm">Chart</span>
                    </div>
                  </div>
                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <h2 className="text-lg font-medium transition text-white">Analytics</h2>
                    <p className="text-[#C9C9C9] text-sm">Track your productivity metrics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Widgets & StandBy */}
      <section className="py-32 bg-[#0C0C0D]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Widgets & StandBy
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              See your day. Even when you don't open the app.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#8A8A8A] text-sm">Image placeholder</div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                  Widgets
                </h3>
                <h4 className="text-2xl font-semibold text-white">
                  Always Visible
                </h4>
              </div>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                Atom surfaces the right information exactly when you need it — from your Lock Screen to your desk.
              </p>
              <div className="space-y-3">
                <p className="text-[#C9C9C9]">• Lock Screen widgets</p>
                <p className="text-[#C9C9C9]">• StandBy productivity mode</p>
                <p className="text-[#C9C9C9]">• Home Screen progress blocks</p>
                <p className="text-[#C9C9C9]">• Live Activity timers</p>
              </div>
              <ArrowButton href="/download">Learn more</ArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Privacy & Secure Storage */}
      <section className="py-32 bg-[#121214]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider mb-4">
              Privacy & Secure Storage
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              Secure by default.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#8A8A8A] uppercase tracking-wider">
                  Security
                </h3>
                <h4 className="text-2xl font-semibold text-white">
                  Apple Security
                </h4>
              </div>
              <p className="text-lg font-light text-[#C9C9C9] leading-relaxed">
                Atom uses Apple's secure storage, biometric authentication, and on-device processing to protect everything you create.
              </p>
              <div className="space-y-3">
                <p className="text-[#C9C9C9]">• FaceID unlock</p>
                <p className="text-[#C9C9C9]">• Keychain-secured data</p>
                <p className="text-[#C9C9C9]">• On-device intelligence</p>
                <p className="text-[#C9C9C9]">• Zero 3rd-party tracking</p>
              </div>
              <ArrowButton href="/download">Learn more</ArrowButton>
            </div>
            <div className="relative h-[400px] rounded-2xl border border-[#2A2A2E] bg-[#1A1A1D] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#8A8A8A] text-sm">Image placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Atom + macOS */}
      <section className="py-32 bg-[#0C0C0D]">
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
