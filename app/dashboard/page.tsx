"use client";

import { Plus, Calendar, CheckCircle2, Clock, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Card,
  PageContainer,
  Section,
  TitleM,
  Body,
  Caption,
  SmoothFadeSlide,
  PrimaryButton,
} from "@/guide";
import { useTheme } from "@/components/providers/theme-provider";
import { getColor } from "@/guide/styles";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const userName = "User";
  const todayTasksCount = 5;
  const activeProject = "Q1 Product Launch";
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  const projects = [
    { id: 1, name: "Q1 Product Launch", progress: 68, color: "#007AFF", members: 3 },
    { id: 2, name: "Marketing Campaign", progress: 42, color: "#34C759", members: 5 },
    { id: 3, name: "Website Redesign", progress: 85, color: "#FF9500", members: 2 },
  ];

  const tasks = {
    dueToday: [
      { id: 1, title: "Review design mockups", priority: "high" },
      { id: 2, title: "Team standup meeting", priority: "medium" },
    ],
    upcoming: [
      { id: 3, title: "Prepare quarterly report", dueDate: "Tomorrow" },
      { id: 4, title: "Client presentation", dueDate: "In 2 days" },
    ],
    overdue: [{ id: 5, title: "Update project documentation", priority: "high" }],
  };

  return (
    <PageContainer>
      <Section spacing="lg">
        <div className="space-y-8">
          {/* Welcome Header */}
          <SmoothFadeSlide direction="up" delay={0}>
            <div className="space-y-2">
              <TitleM>Welcome back, {userName}</TitleM>
              <Caption>Here's what's happening today</Caption>
            </div>
          </SmoothFadeSlide>

          {/* Focus Block */}
          <SmoothFadeSlide direction="up" delay={0.1}>
            <Card className="p-8">
              <div className="space-y-6">
                <TitleM>Today's Focus</TitleM>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: getColor("text.secondary", mode) }}
                    />
                    <Body>{todayTasksCount} tasks due today</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar
                      className="w-5 h-5"
                      style={{ color: getColor("text.secondary", mode) }}
                    />
                    <Body>Active: {activeProject}</Body>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Link href="/dashboard/tasks">
                      <PrimaryButton size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Task
                      </PrimaryButton>
                    </Link>
                    <Link href="/dashboard/projects">
                      <PrimaryButton size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Project
                      </PrimaryButton>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </SmoothFadeSlide>

          {/* Projects Overview */}
          <SmoothFadeSlide direction="up" delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <TitleM>Projects</TitleM>
                <Link
                  href="/dashboard/projects"
                  className="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: getColor("text.secondary", mode) }}
                >
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <SmoothFadeSlide key={project.id} direction="up" delay={0.3 + index * 0.05}>
                    <Card hoverable className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <TitleM className="text-base">{project.name}</TitleM>
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: project.color }}
                          />
                        </div>
                        <div className="space-y-2">
                          <div
                            className="h-1 rounded-full overflow-hidden"
                            style={{ backgroundColor: getColor("fill.tertiary", mode) }}
                          >
                            <div
                              className="h-full rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%`, backgroundColor: project.color }}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Caption>{project.progress}% complete</Caption>
                            <div className="flex -space-x-2">
                              {Array.from({ length: project.members }).map((_, i) => (
                                <div
                                  key={i}
                                  className="w-6 h-6 rounded-full border-2"
                                  style={{
                                    backgroundColor: getColor("fill.secondary", mode),
                                    borderColor: getColor("background.primary", mode),
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </SmoothFadeSlide>
                ))}
              </div>
            </div>
          </SmoothFadeSlide>

          {/* Tasks and Calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SmoothFadeSlide direction="up" delay={0.4}>
              <div className="space-y-6">
                <TitleM>Tasks</TitleM>
                <div className="space-y-6">
                  {/* Due Today */}
                  {tasks.dueToday.length > 0 && (
                    <Card className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" style={{ color: getColor("text.secondary", mode) }} />
                          <Body className="font-semibold">Due Today</Body>
                        </div>
                        <div className="space-y-2">
                          {tasks.dueToday.map((task) => (
                            <div
                              key={task.id}
                              className="flex items-center gap-3 rounded-xl px-3 py-2 hover:opacity-70 transition-opacity cursor-pointer"
                              style={{ backgroundColor: getColor("fill.tertiary", mode) }}
                            >
                              <div
                                className={cn("w-1.5 h-1.5 rounded-full")}
                                style={{
                                  backgroundColor:
                                    task.priority === "high"
                                      ? getColor("systemRed", mode)
                                      : getColor("systemOrange", mode),
                                }}
                              />
                              <Body className="text-sm">{task.title}</Body>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Upcoming */}
                  {tasks.upcoming.length > 0 && (
                    <Card className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" style={{ color: getColor("text.secondary", mode) }} />
                          <Body className="font-semibold">Upcoming</Body>
                        </div>
                        <div className="space-y-2">
                          {tasks.upcoming.map((task) => (
                            <div
                              key={task.id}
                              className="flex items-center justify-between rounded-xl px-3 py-2 hover:opacity-70 transition-opacity cursor-pointer"
                              style={{ backgroundColor: getColor("fill.tertiary", mode) }}
                            >
                              <Body className="text-sm">{task.title}</Body>
                              <Caption>{task.dueDate}</Caption>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Overdue */}
                  {tasks.overdue.length > 0 && (
                    <Card className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <AlertCircle
                            className="w-4 h-4"
                            style={{ color: getColor("systemRed", mode) }}
                          />
                          <Body className="font-semibold" style={{ color: getColor("systemRed", mode) }}>
                            Overdue
                          </Body>
                        </div>
                        <div className="space-y-2">
                          {tasks.overdue.map((task) => (
                            <div
                              key={task.id}
                              className="flex items-center gap-3 rounded-xl px-3 py-2 hover:opacity-70 transition-opacity cursor-pointer"
                              style={{
                                backgroundColor: getColor("systemRed", mode) + "15",
                              }}
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: getColor("systemRed", mode) }}
                              />
                              <Body className="text-sm" style={{ color: getColor("systemRed", mode) }}>
                                {task.title}
                              </Body>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              </div>
            </SmoothFadeSlide>

            {/* Calendar Snapshot */}
            <SmoothFadeSlide direction="up" delay={0.5}>
              <Card className="p-6">
                <TitleM className="mb-6">Calendar</TitleM>
                <CalendarSnapshot />
              </Card>
            </SmoothFadeSlide>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}

function CalendarSnapshot() {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long", year: "numeric" });
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Body className="font-semibold">{currentMonth}</Body>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium py-1"
            style={{ color: getColor("text.tertiary", mode) }}
          >
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map((day) => {
          const isToday = day === today.getDate();
          return (
            <div
              key={day}
              className={cn(
                "text-center text-xs py-1 rounded transition-colors cursor-pointer",
                isToday && "font-semibold"
              )}
              style={{
                backgroundColor: isToday ? getColor("systemBlue", mode) + "20" : "transparent",
                color: isToday ? getColor("systemBlue", mode) : getColor("text.secondary", mode),
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
