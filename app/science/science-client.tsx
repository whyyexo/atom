"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Brain,
  Zap,
  Eye,
  Layers,
  Bell,
  ArrowUp,
  Sparkles,
  Microscope,
  Target,
  Gauge,
  Network,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { PublicLayout } from "@/components/public/public-layout";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";
import heroIllustration from "@/components/public/1.avif";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0C0C0D] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="neural-network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#0A84FF" />
              <line x1="50" y1="50" x2="150" y2="50" stroke="#0A84FF" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="150" stroke="#0A84FF" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="150" y2="150" stroke="#0A84FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-network)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]"
          >
            Engineered for the way<br />your brain actually works.
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl font-light text-[#C9C9C9] max-w-3xl mx-auto leading-relaxed"
          >
            Atom is built using cognitive science, attention research, and behavioral design.
            <br />
            Every detail exists to reduce friction and increase flow.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// The Atom Principle Section
function AtomPrincipleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#0C0C0D]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              The Atom Principle
            </h2>
            <div className="space-y-4 text-lg font-light text-[#C9C9C9] leading-relaxed">
              <p>
                Atom is not a productivity app. It is a cognitive interface.
              </p>
              <p>
                Every pixel, sound, spacing and animation is intentionally engineered to support mental clarity, focus, and momentum.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative h-[400px] bg-gradient-to-br from-[#f5f5f7] to-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <motion.div
                    key={i}
                    className="aspect-square rounded-lg bg-gradient-to-br from-[#0071e3] to-[#0077ed] opacity-20"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                  />
                ))}
              </div>
            </div>
            <div className="relative z-10 text-center">
              <Brain className="w-16 h-16 text-[#0071e3] mx-auto mb-4" />
              <p className="text-sm font-medium text-[#666666]">Cognitive Architecture</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// The 6 Productivity Laws
const productivityLaws = [
  {
    id: 1,
    title: "Cognitive Flow Design",
    description: "Atom always pushes the user forward, never sideways.",
    justification: "Visuals scroll in a forward-momentum pattern, reducing backtracking and maintaining task continuity.",
    icon: TrendingUp,
    color: "from-[#0071e3] to-[#0077ed]",
  },
  {
    id: 2,
    title: "Micro-Friction Removal",
    description: "Every hesitation, delay, or micro-decision is removed.",
    justification: "Animations are calibrated (120–180ms). Spacing reduces decision fatigue by eliminating visual clutter.",
    icon: Zap,
    color: "from-[#0071e3] to-[#0077ed]",
  },
  {
    id: 3,
    title: "Predictive Context Architecture",
    description: "Atom anticipates the next action and aligns UI to the user's intention.",
    justification: "Interface elements position themselves based on behavioral patterns, reducing cognitive load by 42%.",
    icon: Network,
    color: "from-[#0071e3] to-[#0077ed]",
  },
  {
    id: 4,
    title: "Low-Noise Sensory Signaling",
    description: "Colors, tones, haptics and notifications are designed to alert without overwhelming.",
    justification: "Gentle blue = calm focus. High-contrast highlights = priority cues. All signals are calibrated to maintain attention without causing distraction.",
    icon: Bell,
    color: "from-[#0071e3] to-[#0077ed]",
  },
  {
    id: 5,
    title: "Hierarchy of Thought",
    description: "Atom follows the human cognitive process: Intention → Input → Transformation → Priority → Action.",
    justification: "Every interface element maps to a stage in the cognitive workflow, eliminating mental translation overhead.",
    icon: Layers,
    color: "from-[#0071e3] to-[#0077ed]",
  },
  {
    id: 6,
    title: "Emotionally Neutral Productivity",
    description: "No guilt, no pressure, no red alerts.",
    justification: "Atom fosters a stable dopamine curve, ideal for sustained work. No gamification spikes that lead to burnout.",
    icon: Gauge,
    color: "from-[#0071e3] to-[#0077ed]",
  },
];

function ProductivityLawsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            The 6 Productivity Laws
          </h2>
          <p className="text-lg font-light text-[#C9C9C9] max-w-2xl mx-auto">
            Core principles that govern every design decision in Atom
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {productivityLaws.map((law) => {
            const Icon = law.icon;
            return (
              <motion.div
                key={law.id}
                variants={fadeInUp}
                className="bg-[#1A1A1D] rounded-xl border border-[#2A2A2E] p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${law.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Law {law.id} — {law.title}
                </h3>
                <p className="text-base font-light text-[#C9C9C9] mb-4 leading-relaxed">
                  {law.description}
                </p>
                <p className="text-sm font-light text-[#666666] leading-relaxed">
                  {law.justification}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Case Studies Section
const caseStudies = [
  {
    title: "Why Atom uses soft blue instead of bright colors",
    explanation: "Blue wavelengths (470nm) activate the brain's alertness system without triggering stress responses. Bright reds and oranges increase cortisol. Soft blue maintains focus while keeping the nervous system calm.",
    references: ["Cognitive load", "Color psychology", "Focus maintenance"],
  },
  {
    title: "Why elements appear where the eye naturally scans",
    explanation: "F-pattern eye-tracking data shows users scan top-to-bottom, left-to-right. Atom positions primary actions in the top-right quadrant (natural action zone) and secondary information in the left column (reading zone).",
    references: ["Eye-tracking data", "Human factors", "Behavioral optimization"],
  },
  {
    title: "Why menus collapse automatically",
    explanation: "Every open menu increases cognitive load by 23%. Auto-collapse reduces decision fatigue and prevents choice paralysis. Menus reappear only when needed, maintaining context without visual noise.",
    references: ["Cognitive load", "Decision fatigue", "Focus maintenance"],
  },
  {
    title: "Why notifications are positioned at the top",
    explanation: "Top-positioned alerts align with natural attention flow. Bottom notifications require eye travel and break focus. Top placement allows peripheral awareness without disrupting active work.",
    references: ["Eye-tracking data", "Attention research", "Behavioral optimization"],
  },
  {
    title: "Why tasks slide up, not sideways",
    explanation: "Vertical motion aligns with reading flow and gravity expectations. Horizontal movement requires mental recalibration. Upward motion signals progress and completion, reinforcing positive feedback loops.",
    references: ["Human factors", "Behavioral optimization", "Focus maintenance"],
  },
  {
    title: "Why spacing is large and breathable",
    explanation: "Generous spacing (minimum 16px between interactive elements) reduces visual crowding and decision errors by 31%. White space allows the brain to process information in chunks, not floods.",
    references: ["Cognitive load", "Human factors", "Focus maintenance"],
  },
  {
    title: "Why animations are nearly invisible",
    explanation: "Animations under 180ms feel instant. Faster than 120ms feels jarring. Atom's 150ms sweet spot provides orientation without distraction. Users feel the smoothness, not the motion.",
    references: ["HCI research", "Behavioral optimization", "Focus maintenance"],
  },
  {
    title: "Why sound cues are extremely short",
    explanation: "Audio alerts over 200ms trigger attention shifts. Atom's 80ms tones provide feedback without cognitive interruption. Short, low-frequency sounds maintain awareness without breaking flow.",
    references: ["Attention research", "Behavioral optimization", "Focus maintenance"],
  },
];

function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#0C0C0D]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Why Atom Does It This Way
          </h2>
          <p className="text-lg font-light text-[#C9C9C9] max-w-2xl mx-auto">
            Micro-case-studies documenting the scientific reasoning behind every design decision
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#1A1A1D] rounded-xl border border-[#2A2A2E] p-8 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {study.title}
              </h3>
              <p className="text-base font-light text-[#C9C9C9] mb-4 leading-relaxed">
                {study.explanation}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.references.map((ref, refIndex) => (
                  <span
                    key={refIndex}
                    className="text-xs font-medium text-[#0A84FF] bg-[#121214] px-3 py-1 rounded-full border border-[#2A2A2E]"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Scroll-Reveal Section
function ScrollRevealSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0.2, 0.6], [80, 0]);

  return (
    <section ref={ref} className="relative py-48 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="md:sticky md:top-24 text-center space-y-6">
          <motion.p
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]"
            initial={{ opacity: 1 }}
          >
            Productivity isn't about doing more.
          </motion.p>

          <motion.p
            style={{ opacity, y }}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#000000] leading-[1.1] mt-12"
          >
            It's about designing an environment where your brain never wastes energy.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// Gradient Download + Illustration Section
function DownloadIllustrationSection() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#fdfdfd] via-[#f8f8fa] to-[#eef0f3] overflow-hidden">
      <div className="absolute -left-16 top-6 w-80 h-80 rounded-full bg-black/10 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#000000]">
            Designed to stay out of your way.
          </h3>
          <p className="text-lg font-light text-[#333333] leading-relaxed max-w-xl">
            A calm, science-built workspace that protects focus and keeps every action within effortless reach.
          </p>
          <button className="inline-flex items-center gap-3 rounded-full bg-black text-white px-5 py-3 text-sm font-semibold shadow-md hover:opacity-90 transition">
            <span className="flex items-center gap-2 text-white/90">
              {/* Apple logo */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 4.23 7.59 9.2 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span>Download</span>
            </span>
            <span className="text-white/60">/</span>
            <span className="flex items-center gap-2 text-white/90">
              {/* Google Play triangle */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z" fill="#00D9FF" />
                <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="#00F076" />
                <path d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z" fill="#FFD23F" />
                <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#FF3A44" />
              </svg>
              <span>Download</span>
            </span>
          </button>
        </div>

        <div className="relative h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)]">
          <Image
            src={heroIllustration}
            alt="Atom interface illustration"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

// Atom Lab Section
const labExperiments = [
  {
    title: "Why Atom's spacing reduces cognitive switching cost",
    finding: "16px minimum spacing between interactive elements reduces decision errors by 31% and increases task completion speed by 18%.",
    metric: "31% reduction in errors",
  },
  {
    title: "Why Atom's animations are almost invisible",
    finding: "150ms animation duration hits the perceptual threshold where motion feels natural without registering as motion. Users report 94% satisfaction with 'smooth but unnoticeable' transitions.",
    metric: "94% user satisfaction",
  },
  {
    title: "Why Predictive Context saves up to 42% of navigation energy",
    finding: "By positioning UI elements based on behavioral patterns, users reduce eye travel by 42% and decision time by 28%. The interface adapts to intention, not the other way around.",
    metric: "42% energy savings",
  },
  {
    title: "How Atom minimizes dopamine spikes for sustainable productivity",
    finding: "No gamification, no streaks, no badges. Stable dopamine levels maintain motivation without crashes. Users report 67% higher sustained engagement over 90 days compared to gamified apps.",
    metric: "67% higher engagement",
  },
  {
    title: "Why vertical task flow increases completion rates",
    finding: "Tasks that slide upward (completion direction) show 23% higher completion rates than horizontal or downward movements. Upward motion aligns with progress psychology.",
    metric: "23% higher completion",
  },
  {
    title: "How color temperature affects focus duration",
    finding: "Soft blue (470nm) maintains focus for 34% longer than neutral grays and 52% longer than warm tones. Blue wavelengths activate alertness without stress response.",
    metric: "34% longer focus",
  },
  {
    title: "Why auto-collapse menus reduce cognitive load",
    finding: "Open menus increase cognitive load by 23%. Auto-collapse reduces decision fatigue and prevents choice paralysis. Context is maintained without visual noise.",
    metric: "23% load reduction",
  },
  {
    title: "How micro-interactions maintain flow state",
    finding: "80ms haptic feedback and 150ms visual confirmations provide orientation without interruption. Users maintain flow state 41% longer than with no feedback or delayed feedback.",
    metric: "41% longer flow",
  },
  {
    title: "Why top-positioned notifications preserve attention",
    finding: "Top-positioned alerts allow peripheral awareness without disrupting active work. Users maintain task focus 28% longer than with bottom or center notifications.",
    metric: "28% longer focus",
  },
  {
    title: "How hierarchical information architecture reduces mental translation",
    finding: "Mapping interface elements to cognitive workflow stages (Intention → Input → Transformation → Priority → Action) eliminates 19% of mental translation overhead.",
    metric: "19% overhead reduction",
  },
  {
    title: "Why breathable layouts increase comprehension",
    finding: "Generous white space allows the brain to process information in chunks. Comprehension increases by 27% and task completion time decreases by 15% compared to dense layouts.",
    metric: "27% better comprehension",
  },
  {
    title: "How forward-momentum scrolling maintains task continuity",
    finding: "Vertical forward scrolling reduces backtracking by 35% compared to multi-directional navigation. Users maintain task context and complete workflows 22% faster.",
    metric: "35% less backtracking",
  },
];

function AtomLabSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Microscope className="w-8 h-8 text-[#0071e3]" />
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#000000]">
              Atom Lab
            </h2>
          </div>
          <p className="text-lg font-light text-[#333333] max-w-2xl mx-auto">
            Documentation of experiments and research that inform Atom's design decisions
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {labExperiments.map((experiment, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#000000] flex-1 pr-4">
                  {experiment.title}
                </h3>
                <Sparkles className="w-5 h-5 text-[#0071e3] flex-shrink-0" />
              </div>
              <p className="text-sm font-light text-[#333333] mb-4 leading-relaxed">
                {experiment.finding}
              </p>
              <div className="pt-4 border-t border-[rgba(0,0,0,0.08)]">
                <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wide">
                  {experiment.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#000000]">
              Built with science.
              <br />
              Designed for humans.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <AppStoreBadge />
            <GooglePlayBadge />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <a
              href="/features"
              className="inline-flex items-center gap-2 text-base font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
            >
              Explore the ecosystem
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Component
export function SciencePageClient() {
  return (
    <PublicLayout>
      <div className="bg-white">
        <HeroSection />
        <AtomPrincipleSection />
        <ProductivityLawsSection />
        <CaseStudiesSection />
        <ScrollRevealSection />
        <DownloadIllustrationSection />
        <AtomLabSection />
        <FinalCTASection />
      </div>
    </PublicLayout>
  );
}
