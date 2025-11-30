"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Sparkles,
  Plus,
  Brain,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Team Sync",
      time: "10:00 AM",
      type: "meeting",
      duration: "30min",
    },
    {
      id: 2,
      title: "Deep Work Block",
      time: "2:00 PM",
      type: "focus",
      duration: "2h",
    },
    {
      id: 3,
      title: "Client Call",
      time: "4:30 PM",
      type: "meeting",
      duration: "1h",
    },
  ];

  const aiSuggestions = [
    "Schedule 2h deep work for strategy review at 2 PM",
    "Move team sync to 11 AM for better focus",
    "Add buffer time after client call",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-black dark:to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Calendar</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Your schedule, optimized
            </p>
          </div>
          <Button className="rounded-2xl bg-[#007AFF] hover:bg-[#0051D5]">
            <Plus className="h-4 w-4 mr-2" />
            New Event
          </Button>
        </div>

        {/* Calendar Grid */}
        <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's Schedule</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Google Calendar</Badge>
                <Badge variant="outline">Apple Calendar</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {events.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="rounded-2xl border-0 bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            event.type === "meeting"
                              ? "bg-[#007AFF]"
                              : "bg-[#34C759]"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{event.title}</h3>
                            <Badge
                              className={
                                event.type === "focus"
                                  ? "bg-[#34C759]/20 text-[#34C759]"
                                  : "bg-[#007AFF]/20 text-[#007AFF]"
                              }
                            >
                              {event.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {event.time}
                            </span>
                            <span className="text-sm text-gray-500">
                              {event.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Deep Work Blocks */}
        <Card className="rounded-3xl border-0 bg-gradient-to-br from-[#34C759]/10 to-[#30D158]/10 dark:from-[#34C759]/20 dark:to-[#30D158]/20 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-[#34C759]" />
              <CardTitle>Deep Work Blocks</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-black/60">
                <h4 className="font-semibold mb-2">Today</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  2:00 PM - 4:00 PM (2h)
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-black/60">
                <h4 className="font-semibold mb-2">Tomorrow</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  9:00 AM - 11:00 AM (2h)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Suggestions */}
        <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#007AFF]" />
              <CardTitle>AI Suggestions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {aiSuggestions.map((suggestion, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-black/60 dark:to-gray-900/60 border border-black/5 dark:border-white/5"
                >
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {suggestion}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-3 rounded-xl"
                  >
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
