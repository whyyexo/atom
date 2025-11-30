"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Lightbulb,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  const [userName, setUserName] = useState("User");
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Good morning");
    else if (hour < 18) setTimeOfDay("Good afternoon");
    else setTimeOfDay("Good evening");

    // Simulate user data
    setUserName("Alex");
  }, []);

  const importantTasks = [
    { id: 1, title: "Review Q4 strategy document", priority: "high", time: "2h" },
    { id: 2, title: "Team standup meeting", priority: "medium", time: "30min" },
    { id: 3, title: "Prepare client presentation", priority: "high", time: "1h" },
  ];

  const todayEvents = [
    { id: 1, title: "Team Sync", time: "10:00 AM", type: "meeting" },
    { id: 2, title: "Deep Work Block", time: "2:00 PM", type: "focus" },
    { id: 3, title: "Client Call", time: "4:30 PM", type: "meeting" },
  ];

  const aiSuggestions = [
    "Schedule 2h deep work block for strategy review",
    "Move team standup to 11 AM for better focus",
    "Batch email responses during low-energy hours",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-black dark:to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-semibold tracking-tight">
            {timeOfDay}, {userName}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's what matters today
          </p>
        </motion.div>

        {/* AI Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg">AI Summary</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    You have 3 high-priority tasks today. Your focus score is 78/100. 
                    Schedule a 2-hour deep work block this afternoon for optimal productivity. 
                    You've completed 60% of your weekly goals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Important Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Important Tasks</h2>
            <Link href="/dashboard/tasks">
              <Button variant="ghost" size="sm" className="text-[#007AFF]">
                View all
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="space-y-2">
            {importantTasks.map((task, idx) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <Card className="rounded-2xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="h-5 w-5 text-gray-300 dark:text-gray-700 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{task.title}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              task.priority === "high"
                                ? "bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400"
                                : "bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400"
                            }`}
                          >
                            {task.priority}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {task.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Today's Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Today's Events</h2>
            <Link href="/dashboard/calendar">
              <Button variant="ghost" size="sm" className="text-[#007AFF]">
                View calendar
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="space-y-2">
            {todayEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
              >
                <Card className="rounded-2xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          event.type === "meeting"
                            ? "bg-[#007AFF]"
                            : "bg-[#34C759]"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{event.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="rounded-3xl border-0 bg-gradient-to-br from-[#007AFF]/10 to-[#5856D6]/10 dark:from-[#007AFF]/20 dark:to-[#5856D6]/20 backdrop-blur-xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1 space-y-3">
                  <h3 className="font-semibold text-lg">AI Suggestions</h3>
                  <div className="space-y-2">
                    {aiSuggestions.map((suggestion, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#007AFF] mt-2 flex-shrink-0" />
                        <p>{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Open Atom AI Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/dashboard/ai-assistant">
            <Button
              className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#007AFF] to-[#5856D6] hover:from-[#0051D5] hover:to-[#4A47C4] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Open Atom AI
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
