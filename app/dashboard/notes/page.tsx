"use client";

import { useState } from "react";
import { Plus, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Note = {
  id: number;
  title: string;
  content: string;
  updatedAt: string;
};

const notes: Note[] = [
  {
    id: 1,
    title: "Product Strategy Meeting",
    content: "Key points from today's product strategy discussion...",
    updatedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Q1 Goals",
    content: "Main objectives and milestones for Q1...",
    updatedAt: "Yesterday",
  },
  {
    id: 3,
    title: "Design System Notes",
    content: "Updates to the design system and component library...",
    updatedAt: "3 days ago",
  },
  {
    id: 4,
    title: "Team Retrospective",
    content: "Key takeaways from the team retrospective...",
    updatedAt: "1 week ago",
  },
  {
    id: 5,
    title: "Research Findings",
    content: "User research insights and patterns identified...",
    updatedAt: "2 weeks ago",
  },
  {
    id: 6,
    title: "Technical Architecture",
    content: "System architecture decisions and trade-offs...",
    updatedAt: "3 weeks ago",
  },
];

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">Notes</h1>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">
              Capture and organize your thoughts
            </p>
          </div>
          <button
            onClick={() => {
              // TODO: Open create note modal
              console.log("Create note clicked");
            }}
            className="flex items-center gap-2 rounded-lg bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-150"
          >
            <Plus className="h-4 w-4" />
            New Note
          </button>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 0.98 }}
              className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-6 hover:border-black/10 dark:hover:border-white/10 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-3">
                <FileText className="h-5 w-5 text-black/40 dark:text-white/40 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-black dark:text-white mb-1 line-clamp-1">
                    {note.title}
                  </h3>
                  <p className="text-xs text-black/50 dark:text-white/50">{note.updatedAt}</p>
                </div>
              </div>
              <p className="text-sm text-black/60 dark:text-white/60 line-clamp-3">{note.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
