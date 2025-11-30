"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  CheckCircle2,
  Circle,
  Brain,
  Sparkles,
  Clock,
  AlertCircle,
  List,
  LayoutGrid,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type Task = {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  status: "todo" | "in-progress" | "done";
  dueDate?: string;
  estimatedTime?: string;
  aiReason?: string;
};

export default function TasksPage() {
  const [view, setView] = useState<"todo" | "kanban">("todo");
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Review Q4 strategy document",
      priority: "high",
      status: "todo",
      dueDate: "Today",
      estimatedTime: "2h",
      aiReason: "Pareto: 80% impact",
    },
    {
      id: 2,
      title: "Team standup meeting",
      priority: "medium",
      status: "in-progress",
      dueDate: "Today",
      estimatedTime: "30min",
      aiReason: "Parkinson's Law",
    },
    {
      id: 3,
      title: "Update documentation",
      priority: "low",
      status: "todo",
      dueDate: "Tomorrow",
      estimatedTime: "1h",
      aiReason: "Low switching cost",
    },
    {
      id: 4,
      title: "Prepare client presentation",
      priority: "high",
      status: "todo",
      dueDate: "Tomorrow",
      estimatedTime: "3h",
      aiReason: "High cognitive load",
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "done" ? "todo" : "done" }
          : task
      )
    );
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          priority: "medium",
          status: "todo",
          aiReason: "AI will analyze",
        },
      ]);
      setNewTask("");
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400";
      case "medium":
        return "bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400";
    }
  };

  const todoTasks = tasks.filter((t) => t.status !== "done");
  const doneTasks = tasks.filter((t) => t.status === "done");
  const kanbanColumns = {
    todo: tasks.filter((t) => t.status === "todo"),
    "in-progress": tasks.filter((t) => t.status === "in-progress"),
    done: tasks.filter((t) => t.status === "done"),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-black dark:to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Tasks</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Your productivity hub
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant={view === "todo" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("todo")}
              className="rounded-xl"
            >
              <List className="h-4 w-4 mr-2" />
              Todo
            </Button>
            <Button
              variant={view === "kanban" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("kanban")}
              className="rounded-xl"
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              Kanban
            </Button>
          </div>
        </div>

        {/* AI Priority Engine */}
        <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-[#007AFF]" />
                <CardTitle>AI Priority Engine</CardTitle>
              </div>
              <Badge className="bg-[#007AFF]">Scientific Triage</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {tasks
                .filter((t) => t.status !== "done")
                .slice(0, 3)
                .map((task) => (
                  <div
                    key={task.id}
                    className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-black/60 dark:to-gray-900/60 border border-black/5 dark:border-white/5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{task.title}</span>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {task.aiReason}
                    </p>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Add Task */}
        <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <Input
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTask()}
                className="flex-1 rounded-2xl border-black/10 dark:border-white/10"
              />
              <Button
                onClick={addTask}
                className="rounded-2xl bg-[#007AFF] hover:bg-[#0051D5]"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-2xl"
                onClick={() => {
                  // AI task generation
                  setNewTask("AI will generate task...");
                }}
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tasks View */}
        {view === "todo" ? (
          <div className="grid gap-6 md:grid-cols-2">
            {/* Todo Tasks */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">To Do</h2>
              <div className="space-y-2">
                {todoTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Card className="rounded-2xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-sm hover:shadow-md transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className="flex-shrink-0 mt-0.5"
                          >
                            <Circle className="h-5 w-5 text-gray-300 dark:text-gray-700" />
                          </button>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">{task.title}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge className={getPriorityColor(task.priority)}>
                                {task.priority}
                              </Badge>
                              {task.dueDate && (
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {task.dueDate}
                                </span>
                              )}
                              {task.estimatedTime && (
                                <span className="text-xs text-gray-500">
                                  {task.estimatedTime}
                                </span>
                              )}
                            </div>
                            {task.aiReason && (
                              <p className="text-xs text-[#007AFF] mt-2 flex items-center gap-1">
                                <Target className="h-3 w-3" />
                                {task.aiReason}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Done Tasks */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Completed</h2>
              <div className="space-y-2">
                {doneTasks.map((task) => (
                  <Card
                    key={task.id}
                    className="rounded-2xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-sm opacity-60"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-5 w-5 text-[#34C759] flex-shrink-0 mt-0.5" />
                        <p className="font-medium text-sm line-through text-gray-500">
                          {task.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Kanban View */
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(kanbanColumns).map(([status, columnTasks]) => (
              <div key={status} className="space-y-4">
                <h2 className="text-xl font-semibold capitalize">
                  {status.replace("-", " ")}
                </h2>
                <div className="space-y-2">
                  {columnTasks.map((task) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      drag
                      className="cursor-move"
                    >
                      <Card className="rounded-2xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-4">
                          <p className="font-medium text-sm mb-2">{task.title}</p>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority}
                            </Badge>
                            {task.aiReason && (
                              <span className="text-xs text-[#007AFF]">
                                {task.aiReason}
                              </span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Smart Reminders */}
        <Card className="rounded-3xl border-0 bg-gradient-to-br from-[#007AFF]/10 to-[#5856D6]/10 dark:from-[#007AFF]/20 dark:to-[#5856D6]/20 backdrop-blur-xl shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-[#007AFF]" />
              <CardTitle>Smart Reminders</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>• "Review Q4 strategy" due in 2 hours</p>
              <p>• Schedule deep work block for "Client presentation"</p>
              <p>• Break down "Update documentation" into smaller tasks</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
