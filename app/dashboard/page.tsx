"use client";

import { Plus, Calendar, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const userName = "User";
  const todayTasksCount = 5;
  const activeProject = "Q1 Product Launch";

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
    <div className="p-8 space-y-8">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Welcome back, {userName}</h1>
        <p className="text-gray-600 dark:text-gray-400">Here's what's happening today</p>
      </div>

      {/* Focus Block */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Focus</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <p className="text-base">{todayTasksCount} tasks due today</p>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <p className="text-base">Active: {activeProject}</p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Link href="/dashboard/tasks">
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              </Link>
              <Link href="/dashboard/projects">
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Overview */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Link href="/dashboard/projects">
            <Button variant="outline" size="sm">View all</Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <CardDescription>{project.members} members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${project.progress}%`,
                        backgroundColor: project.color,
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tasks Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Due Today */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Due Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {tasks.dueToday.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{task.title}</span>
                </div>
              ))}
            {tasks.dueToday.length === 0 && (
              <p className="text-sm text-gray-500">No tasks due today</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {tasks.upcoming.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <Clock className="w-4 h-4 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm">{task.title}</p>
                  <p className="text-xs text-gray-500">{task.dueDate}</p>
                </div>
              </div>
            ))}
            {tasks.upcoming.length === 0 && (
              <p className="text-sm text-gray-500">No upcoming tasks</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Overdue */}
      {tasks.overdue.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertCircle className="w-5 h-5" />
              Overdue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {tasks.overdue.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                >
                  <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
