"use client";

import { Command } from "cmdk";
import { Search, Home, FolderKanban, CheckSquare, Calendar, FileText, Users, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const commands = [
  { id: "home", label: "Go to Home", icon: Home, href: "/dashboard" },
  { id: "projects", label: "Go to Projects", icon: FolderKanban, href: "/dashboard/projects" },
  { id: "tasks", label: "Go to Tasks", icon: CheckSquare, href: "/dashboard/tasks" },
  { id: "calendar", label: "Go to Calendar", icon: Calendar, href: "/dashboard/calendar" },
  { id: "notes", label: "Go to Notes", icon: FileText, href: "/dashboard/notes" },
  { id: "team", label: "Go to Team", icon: Users, href: "/dashboard/team" },
  { id: "settings", label: "Go to Settings", icon: Settings, href: "/dashboard/settings" },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) {
      setSearch("");
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/20 dark:bg-black/60 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 top-1/4 z-50 w-full max-w-lg -translate-x-1/2"
          >
            <Command className="rounded-xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 border-b border-black/5 dark:border-white/5 px-4 py-3">
                <Search className="h-4 w-4 text-black/40 dark:text-white/40" />
                <Command.Input
                  placeholder="Search or run a command..."
                  value={search}
                  onValueChange={setSearch}
                  className="flex-1 bg-transparent text-sm text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 outline-none"
                />
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-1.5 font-mono text-[10px] font-medium text-black/50 dark:text-white/50">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-black/50 dark:text-white/50">
                  No results found.
                </Command.Empty>
                <Command.Group heading="Navigation">
                  {commands.map((cmd) => {
                    const Icon = cmd.icon;
                    return (
                      <Command.Item
                        key={cmd.id}
                        onSelect={() => {
                          router.push(cmd.href);
                          onOpenChange(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer",
                          "text-black/70 dark:text-white/70 data-[selected]:bg-black/5 dark:data-[selected]:bg-white/8",
                          "data-[selected]:text-black dark:data-[selected]:text-white"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {cmd.label}
                      </Command.Item>
                    );
                  })}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

