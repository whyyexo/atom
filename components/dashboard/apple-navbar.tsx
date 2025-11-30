"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  CheckSquare,
  Calendar,
  Sparkles,
  FlaskConical,
  Settings,
} from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import type { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  href: string;
}

const tabs: Tab[] = [
  { title: "Dashboard", icon: Home, href: "/dashboard" },
  { title: "Tasks", icon: CheckSquare, href: "/dashboard/tasks" },
  { title: "Calendar", icon: Calendar, href: "/dashboard/calendar" },
  { title: "Intelligence", icon: Sparkles, href: "/dashboard/ai-assistant" },
  { title: "Science", icon: FlaskConical, href: "/science" },
  { title: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function AppleNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  // Find active tab based on current pathname
  useEffect(() => {
    const activeIndex = tabs.findIndex(
      (tab) => pathname === tab.href || pathname.startsWith(tab.href + "/")
    );
    setActiveTab(activeIndex >= 0 ? activeIndex : null);
  }, [pathname]);

  // Handle scroll to hide/show navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleTabChange = (index: number | null) => {
    if (index !== null && tabs[index]) {
      router.push(tabs[index].href);
    }
    setActiveTab(index);
  };

  const isVisible = !isScrolled || isHovered;

  return (
    <motion.nav
      initial={false}
      animate={{
        y: isVisible ? 0 : "calc(100% - 4px)",
        opacity: isVisible ? 1 : 0.4,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 0.8,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Apple liquid blur background */}
          <motion.div
            className="absolute inset-0 rounded-3xl backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-2xl bg-white/70 dark:bg-black/70"
            animate={{
              opacity: isVisible ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Content */}
          <div className="relative px-4 py-3 min-h-[60px] flex items-center">
            <AnimatePresence mode="wait">
              {isVisible ? (
                <motion.div
                  key="full"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ 
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="w-full"
                >
                  <ExpandableTabs
                    tabs={tabs.map((tab) => ({
                      title: tab.title,
                      icon: tab.icon,
                    }))}
                    activeColor="text-[#007AFF]"
                    onChange={handleTabChange}
                    className="border-0 bg-transparent shadow-none"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="minimal"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-full h-8"
                >
                  <div className="w-32 h-0.5 bg-gray-400/60 dark:bg-gray-500/60 rounded-full" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

