"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  // Events for demonstration (in a real app, this would come from data)
  const events: Record<number, { count: number; color: string }> = {
    5: { count: 2, color: "#0071e3" },
    12: { count: 1, color: "#34c759" },
    18: { count: 3, color: "#ff9500" },
    25: { count: 1, color: "#af52de" },
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">Calendar</h1>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">
              View and manage your schedule
            </p>
          </div>
          <button
            onClick={goToToday}
            className="px-4 py-2 text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
          >
            Today
          </button>
        </div>

        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-8 max-w-4xl">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={goToPreviousMonth}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-black/60 dark:text-white/60" />
            </button>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <button
              onClick={goToNextMonth}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-black/60 dark:text-white/60" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Weekday Headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-black/40 dark:text-white/40 py-2"
              >
                {day}
              </div>
            ))}

            {/* Empty cells for days before month starts */}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {/* Days of the month */}
            {days.map((day) => {
              const dayEvents = events[day];
              const isTodayDay = isToday(day);

              return (
                <motion.div
                  key={day}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "aspect-square rounded-lg p-2 cursor-pointer transition-all duration-150",
                    isTodayDay
                      ? "bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20"
                      : "hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  <div
                    className={cn(
                      "text-sm font-medium mb-1",
                      isTodayDay
                        ? "text-black dark:text-white"
                        : "text-black/70 dark:text-white/70"
                    )}
                  >
                    {day}
                  </div>
                  {dayEvents && (
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.min(dayEvents.count, 3) }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: dayEvents.color }}
                        />
                      ))}
                      {dayEvents.count > 3 && (
                        <span className="text-[10px] text-black/50 dark:text-white/50">
                          +{dayEvents.count - 3}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

