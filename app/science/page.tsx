"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import { PublicLayout } from "@/components/public/public-layout";

interface HotspotProps {
  position: { top: string; left: string };
  onClick: () => void;
  isActive: boolean;
}

function Hotspot({ position, onClick, isActive }: HotspotProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all hover:scale-110 ${
        isActive ? "ring-2 ring-gray-900 ring-offset-2" : ""
      }`}
      style={position}
    >
      <span className="text-sm font-light text-gray-900">+</span>
    </button>
  );
}

interface HotspotOverlayProps {
  content: string;
  position: { top: string; left: string };
  onClose: () => void;
  studyLink?: string;
}

function HotspotOverlay({ content, position, onClose, studyLink }: HotspotOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="absolute z-20 w-80 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
      style={position}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <p className="flex-1 text-sm font-light leading-relaxed text-gray-900">{content}</p>
          <button
            onClick={onClose}
            className="flex-shrink-0 rounded-full p-1 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        {studyLink && (
          <a
            href={studyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-900 hover:text-gray-700 transition-colors"
          >
            View study
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

interface ScienceSectionProps {
  title: string;
  description: string;
  imageAlt: string;
  hotspotPosition: { top: string; left: string };
  hotspotContent: string;
  overlayPosition: { top: string; left: string };
  studyLink?: string;
  buttonText?: string;
  reverse?: boolean;
}

function ScienceSection({
  title,
  description,
  imageAlt,
  hotspotPosition,
  hotspotContent,
  overlayPosition,
  studyLink,
  buttonText,
  reverse = false,
}: ScienceSectionProps) {
  const [isHotspotActive, setIsHotspotActive] = useState(false);

  return (
    <section className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className={`grid gap-16 lg:grid-cols-2 lg:items-center ${reverse ? "lg:grid-flow-dense" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`space-y-6 ${reverse ? "lg:col-start-2" : ""}`}
          >
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-600">
              {description}
            </p>
            {buttonText && studyLink && (
              <a
                href={studyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                {buttonText}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl border border-[rgba(0,0,0,0.08)] bg-gradient-to-br from-gray-50 to-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
              {/* Placeholder image content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center space-y-3 w-full">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-[rgba(0,0,0,0.05)] shadow-sm" />
                  <p className="text-xs font-light text-gray-400">{imageAlt}</p>
                </div>
              </div>

              {/* Hotspot */}
              <Hotspot
                position={hotspotPosition}
                onClick={() => setIsHotspotActive(!isHotspotActive)}
                isActive={isHotspotActive}
              />

              {/* Overlay */}
              <AnimatePresence>
                {isHotspotActive && (
                  <HotspotOverlay
                    content={hotspotContent}
                    position={overlayPosition}
                    onClose={() => setIsHotspotActive(false)}
                    studyLink={studyLink}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function SciencePage() {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="px-6 py-32 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl text-center space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900">
                Science-Backed Productivity
              </h1>
              <p className="text-xl sm:text-2xl font-light leading-relaxed text-gray-600 max-w-3xl mx-auto">
                Everything in Atom is built on proven cognitive science ensuring clarity, focus, and consistent results.
              </p>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-20 relative"
            >
              <div className="relative aspect-[16/10] w-full max-w-6xl mx-auto rounded-2xl border border-[rgba(0,0,0,0.08)] bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
                {/* Floating atom-like shapes */}
                <div className="absolute inset-0">
                  <motion.div
                    animate={{
                      x: [0, 20, 0],
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-60 blur-2xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, -25, 0],
                      y: [0, 20, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-50 blur-2xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 left-1/2 w-36 h-36 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-40 blur-2xl"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-[rgba(0,0,0,0.08)] shadow-sm" />
                    <p className="text-sm font-light text-gray-400">Atom Interface</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cognitive Load Theory */}
        <ScienceSection
          title="Cognitive Load Theory"
          description="Minimal design reduces distraction, improves working memory and processing speed. By externalizing information and reducing visual noise, Atom helps your brain focus on what matters most."
          imageAlt="Atom UI - Minimal Design"
          hotspotPosition={{ top: "45%", left: "50%" }}
          hotspotContent="Minimal design reduces distraction, improves working memory and processing speed."
          overlayPosition={{ top: "55%", left: "50%" }}
          studyLink="https://example.com/sweller-paas-research"
          buttonText="View study"
        />

        {/* Zeigarnik Effect */}
        <ScienceSection
          title="Zeigarnik Effect"
          description="Humans naturally remember unfinished tasks more than completed ones. Atom's task system encourages quick closure, reducing mental clutter and freeing cognitive resources for deep work."
          imageAlt="Task List Interface"
          hotspotPosition={{ top: "40%", left: "45%" }}
          hotspotContent="Humans naturally remember unfinished tasks → Atom encourages quick closure."
          overlayPosition={{ top: "50%", left: "45%" }}
          reverse
        />

        {/* Flow & Kanban Psychology */}
        <ScienceSection
          title="Flow & Kanban Psychology"
          description="Visual task management reduces cognitive friction and increases flow state. By making progress visible and reducing decision fatigue, Atom helps you enter and maintain deep focus."
          imageAlt="Kanban Board"
          hotspotPosition={{ top: "50%", left: "55%" }}
          hotspotContent="Kanban reduces cognitive friction and increases flow state."
          overlayPosition={{ top: "60%", left: "55%" }}
        />

        {/* Time Blocking & Parkinson's Law */}
        <ScienceSection
          title="Time Blocking & Parkinson's Law"
          description="Work expands to fill the time available. By blocking specific time slots for tasks, Atom helps you work more efficiently and complete more in less time."
          imageAlt="Calendar System"
          hotspotPosition={{ top: "45%", left: "50%" }}
          hotspotContent="Blocking time reduces overwhelm and increases completion rate."
          overlayPosition={{ top: "55%", left: "50%" }}
          reverse
        />

        {/* Habit Formation */}
        <ScienceSection
          title="Habit Formation"
          description="Repetition creates stable long-term habits. Atom's routine system helps you build consistent behaviors through daily practice and visual tracking."
          imageAlt="Routines Page"
          hotspotPosition={{ top: "40%", left: "45%" }}
          hotspotContent="Repetition creates stable long-term habits."
          overlayPosition={{ top: "50%", left: "45%" }}
        />

        {/* Notes & Memory Science */}
        <ScienceSection
          title="Notes & Memory Science"
          description="Short, structured notes improve recall by 23% on average. Atom's note-taking system is designed to enhance memory retention through concise formatting and clear organization."
          imageAlt="Atom Notes"
          hotspotPosition={{ top: "50%", left: "55%" }}
          hotspotContent="Short notes improve recall by 23% on average."
          overlayPosition={{ top: "60%", left: "55%" }}
          reverse
        />

        {/* AI Enhancement */}
        <ScienceSection
          title="AI Enhancement"
          description="Contextual AI accelerates planning, writing and cognitive offloading. By handling routine tasks and providing intelligent suggestions, Atom's AI helps you focus on high-value work."
          imageAlt="Atom AI Interface"
          hotspotPosition={{ top: "45%", left: "50%" }}
          hotspotContent="Contextual AI accelerates planning, writing and cognitive offloading."
          overlayPosition={{ top: "55%", left: "50%" }}
        />

        {/* Footer CTA */}
        <section className="px-6 py-32 lg:px-12 border-t border-[rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-[1180px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                Explore the research behind Atom
              </h2>
              <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
                Built on decades of cognitive science research. Designed for real results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/pricing"
                  className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-3 rounded-full border border-[rgba(0,0,0,0.08)] bg-white text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                >
                  Docs
                </Link>
                <Link
                  href="/dashboard"
                  className="px-8 py-3 rounded-full border border-[rgba(0,0,0,0.08)] bg-white text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                >
                  Dashboard
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
