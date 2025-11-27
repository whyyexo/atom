"use client";

import { useState } from "react";
import { CheckSquare2, List, LayoutGrid, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Task = {
  id: number;
  title: string;
  priority: "low" | "medium" | "high";
  dueDate?: string;
  status: "todo" | "in-progress" | "review" | "done";
};

const initialTasks: Task[] = [
  { id: 1, title: "Review design mockups", priority: "high", dueDate: "Today", status: "todo" },
  { id: 2, title: "Team standup meeting", priority: "medium", dueDate: "Today", status: "in-progress" },
  { id: 3, title: "Prepare quarterly report", priority: "medium", dueDate: "Tomorrow", status: "todo" },
  { id: 4, title: "Client presentation", priority: "high", dueDate: "In 2 days", status: "review" },
  { id: 5, title: "Update project documentation", priority: "low", status: "done" },
];

const columns = [
  { id: "todo", label: "To Do" },
  { id: "in-progress", label: "In Progress" },
  { id: "review", label: "Review" },
  { id: "done", label: "Done" },
] as const;

export default function TasksPage() {
  const [view, setView] = useState<"list" | "kanban">("list");
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const priorityColors = {
    low: "bg-blue-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">Tasks</h1>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">
              Manage your tasks and stay productive
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-1">
              <button
                onClick={() => setView("list")}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-150",
                  view === "list"
                    ? "bg-white dark:bg-black text-black dark:text-white"
                    : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                )}
              >
                <List className="h-4 w-4" />
                List
              </button>
              <button
                onClick={() => setView("kanban")}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-150",
                  view === "kanban"
                    ? "bg-white dark:bg-black text-black dark:text-white"
                    : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                )}
              >
                <LayoutGrid className="h-4 w-4" />
                Kanban
              </button>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-150">
              <Plus className="h-4 w-4" />
              Add Task
            </button>
          </div>
        </div>

        {view === "list" ? (
          <ListView tasks={tasks} priorityColors={priorityColors} />
        ) : (
          <KanbanView tasks={tasks} setTasks={setTasks} priorityColors={priorityColors} />
        )}
      </div>
    </div>
  );
}

function ListView({ tasks, priorityColors }: { tasks: Task[]; priorityColors: Record<string, string> }) {
  return (
    <div className="space-y-1">
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="group flex items-center gap-4 rounded-lg px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150"
        >
          <div className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", priorityColors[task.priority])} />
          <CheckSquare2 className="h-4 w-4 text-black/40 dark:text-white/40 flex-shrink-0" />
          <span className="text-sm font-medium text-black dark:text-white flex-1">{task.title}</span>
          {task.dueDate && (
            <span className="text-xs text-black/50 dark:text-white/50">{task.dueDate}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function KanbanView({
  tasks,
  setTasks,
  priorityColors,
}: {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  priorityColors: Record<string, string>;
}) {
  const handleDragStart = (e: React.DragEvent, taskId: number) => {
    e.dataTransfer.setData("taskId", taskId.toString());
  };

  const handleDrop = (e: React.DragEvent, status: Task["status"]) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData("taskId"));
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status } : task)));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {columns.map((column) => {
        const columnTasks = tasks.filter((task) => task.status === column.id);
        return (
          <div
            key={column.id}
            className="flex flex-col"
            onDrop={(e) => handleDrop(e, column.id)}
            onDragOver={handleDragOver}
          >
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-black/70 dark:text-white/70 mb-1">
                {column.label}
              </h3>
              <span className="text-xs text-black/50 dark:text-white/50">{columnTasks.length} tasks</span>
            </div>
            <div className="space-y-2 flex-1">
              {columnTasks.map((task) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  className="rounded-lg border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-3 shadow-sm hover:shadow-md transition-all duration-150 cursor-move"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div
                      className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5", priorityColors[task.priority])}
                    />
                    <p className="text-sm font-medium text-black dark:text-white flex-1">{task.title}</p>
                  </div>
                  {task.dueDate && (
                    <p className="text-xs text-black/50 dark:text-white/50">{task.dueDate}</p>
                  )}
                </motion.div>
              ))}
              {columnTasks.length === 0 && (
                <div className="rounded-lg border border-dashed border-black/10 dark:border-white/10 p-8 text-center">
                  <p className="text-xs text-black/40 dark:text-white/40">No tasks</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
