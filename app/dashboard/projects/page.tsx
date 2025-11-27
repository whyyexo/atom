"use client";

import { useState } from "react";
import { Plus, MoreVertical, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  name: string;
  description: string;
  progress: number;
  color: string;
  members: number;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Q1 Product Launch",
    description: "Launch new product features for Q1",
    progress: 68,
    color: "#0071e3",
    members: 3,
  },
  {
    id: 2,
    name: "Marketing Campaign",
    description: "Spring marketing campaign preparation",
    progress: 42,
    color: "#34c759",
    members: 5,
  },
  {
    id: 3,
    name: "Website Redesign",
    description: "Complete website redesign and rebrand",
    progress: 85,
    color: "#ff9500",
    members: 2,
  },
  {
    id: 4,
    name: "Mobile App Development",
    description: "Build native mobile applications",
    progress: 23,
    color: "#af52de",
    members: 4,
  },
];

export default function ProjectsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [projectList, setProjectList] = useState(projects);

  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">Projects</h1>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">
              Manage and track all your projects
            </p>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-150"
          >
            <Plus className="h-4 w-4" />
            Create Project
          </button>
        </div>

        {/* Projects List */}
        <div className="space-y-1">
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="group flex items-center gap-4 rounded-lg px-6 py-4 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150"
            >
              {/* Color Indicator */}
              <div
                className="w-1 h-12 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.color }}
              />

              {/* Project Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-black dark:text-white mb-1">{project.name}</h3>
                <p className="text-xs text-black/50 dark:text-white/50 mb-3">{project.description}</p>
                
                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="h-1 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%`, backgroundColor: project.color }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-black/50 dark:text-white/50">
                      {project.progress}% complete
                    </span>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-black/40 dark:text-white/40" />
                      <span className="text-xs text-black/50 dark:text-white/50">{project.members}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <button className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150">
                <MoreVertical className="h-4 w-4 text-black/60 dark:text-white/60" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Create Project Modal */}
      <CreateProjectModal open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen} onCreated={(project) => {
        setProjectList([...projectList, project]);
        setIsCreateModalOpen(false);
      }} />
    </div>
  );
}

type CreateProjectModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated: (project: Project) => void;
};

function CreateProjectModal({ open, onOpenChange, onCreated }: CreateProjectModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#0071e3");

  const colors = [
    "#0071e3",
    "#34c759",
    "#ff9500",
    "#af52de",
    "#ff2d55",
    "#5856d6",
    "#ffcc00",
    "#8e8e93",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newProject: Project = {
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
      progress: 0,
      color,
      members: 1,
    };

    onCreated(newProject);
    setName("");
    setDescription("");
    setColor("#0071e3");
  };

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
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-xl p-6">
              <h2 className="text-lg font-semibold text-black dark:text-white mb-4">Create Project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Project name"
                    className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Project description"
                    rows={3}
                    className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
                    Color
                  </label>
                  <div className="flex items-center gap-2">
                    {colors.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setColor(c)}
                        className={cn(
                          "w-8 h-8 rounded-lg border-2 transition-all duration-150",
                          color === c
                            ? "border-black dark:border-white scale-110"
                            : "border-transparent hover:scale-105"
                        )}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    className="px-4 py-2 text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-150"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

