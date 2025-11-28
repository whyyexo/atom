"use client";

import { Plus, Calendar, CheckCircle2, Clock, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Database } from "@/lib/supabase/types";
import { formatDistanceToNow } from "date-fns";

type Workspace = Database["public"]["Tables"]["workspaces"]["Row"];
type Project = Database["public"]["Tables"]["projects"]["Row"];
type Task = Database["public"]["Tables"]["tasks"]["Row"];

type DashboardHomeProps = {
  workspace: Workspace;
  projects: Project[];
  tasksDueToday: Task[];
  tasksUpcoming: Task[];
  tasksOverdue: Task[];
  userName: string;
};

export function DashboardHome({
  workspace,
  projects,
  tasksDueToday,
  tasksUpcoming,
  tasksOverdue,
  userName,
}: DashboardHomeProps) {
  const activeProject = projects[0]?.title || "No active project";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <div className="space-y-12 p-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Welcome Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
              Welcome back, {userName}
            </h1>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">Here's what's happening today</p>
          </motion.div>

          {/* Focus Block */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-8 mb-8"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-base font-semibold text-black dark:text-white mb-4">Today's Focus</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-black/60 dark:text-white/60" />
                      <span className="text-sm font-medium text-black/70 dark:text-white/70">
                        {tasksDueToday.length} tasks due today
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-black/60 dark:text-white/60" />
                      <span className="text-sm font-medium text-black/70 dark:text-white/70">
                        Active: {activeProject}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Link
                      href={`/workspace/${workspace.slug}/tasks`}
                      className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 text-sm font-medium text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-150"
                    >
                      <Plus className="h-4 w-4" />
                      Add Task
                    </Link>
                    <Link
                      href={`/workspace/${workspace.slug}/projects`}
                      className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 text-sm font-medium text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-150"
                    >
                      <Plus className="h-4 w-4" />
                      Add Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Overview */}
          {projects.length > 0 && (
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold tracking-tight text-black dark:text-white">Projects</h2>
                <Link
                  href={`/workspace/${workspace.slug}/projects`}
                  className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  View all <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.slice(0, 3).map((project) => (
                  <Link
                    key={project.id}
                    href={`/workspace/${workspace.slug}/projects/${project.id}`}
                  >
                    <motion.div
                      whileHover={{ scale: 0.98 }}
                      className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-6 hover:border-black/10 dark:hover:border-white/10 transition-all duration-150 cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-sm font-semibold text-black dark:text-white">{project.title}</h3>
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="h-1 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%`, backgroundColor: project.color }}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-black/50 dark:text-white/50">{project.progress}% complete</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tasks Overview */}
            <motion.div variants={itemVariants}>
              <h2 className="text-lg font-semibold tracking-tight text-black dark:text-white mb-6">Tasks</h2>
              <div className="space-y-6">
                {/* Due Today */}
                {tasksDueToday.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-4 w-4 text-black/60 dark:text-white/60" />
                      <h3 className="text-sm font-semibold text-black/70 dark:text-white/70">Due Today</h3>
                    </div>
                    <div className="space-y-2">
                      {tasksDueToday.map((task) => (
                        <Link
                          key={task.id}
                          href={`/workspace/${workspace.slug}/tasks`}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                          <div
                            className={cn(
                              "w-1.5 h-1.5 rounded-full",
                              task.priority === "high" ? "bg-red-500" : task.priority === "medium" ? "bg-yellow-500" : "bg-blue-500"
                            )}
                          />
                          <span className="text-sm text-black/70 dark:text-white/70 flex-1">{task.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Upcoming */}
                {tasksUpcoming.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-black/60 dark:text-white/60" />
                      <h3 className="text-sm font-semibold text-black/70 dark:text-white/70">Upcoming</h3>
                    </div>
                    <div className="space-y-2">
                      {tasksUpcoming.map((task) => (
                        <Link
                          key={task.id}
                          href={`/workspace/${workspace.slug}/tasks`}
                          className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                          <span className="text-sm text-black/70 dark:text-white/70">{task.title}</span>
                          {task.due_date && (
                            <span className="text-xs text-black/50 dark:text-white/50">
                              {formatDistanceToNow(new Date(task.due_date), { addSuffix: true })}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Overdue */}
                {tasksOverdue.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <h3 className="text-sm font-semibold text-red-600 dark:text-red-400">Overdue</h3>
                    </div>
                    <div className="space-y-2">
                      {tasksOverdue.map((task) => (
                        <Link
                          key={task.id}
                          href={`/workspace/${workspace.slug}/tasks`}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-red-50/50 dark:hover:bg-red-950/20 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span className="text-sm text-red-600 dark:text-red-400 flex-1">{task.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Calendar Snapshot */}
            <motion.div variants={itemVariants}>
              <h2 className="text-lg font-semibold tracking-tight text-black dark:text-white mb-6">Calendar</h2>
              <div className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-6">
                <CalendarSnapshot />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CalendarSnapshot() {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long", year: "numeric" });
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-black dark:text-white">{currentMonth}</h3>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div key={day} className="text-center text-xs font-medium text-black/40 dark:text-white/40 py-1">
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
                "text-center text-xs py-1 rounded transition-colors",
                isToday
                  ? "bg-black/10 dark:bg-white/10 text-black dark:text-white font-semibold"
                  : "text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"
              )}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

