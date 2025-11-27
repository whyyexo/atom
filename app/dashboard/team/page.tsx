"use client";

import { useState } from "react";
import { Plus, Mail, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Member";
  avatar?: string;
};

const teamMembers: TeamMember[] = [
  { id: 1, name: "Alex Johnson", email: "alex@atom.app", role: "Owner" },
  { id: 2, name: "Sarah Chen", email: "sarah@atom.app", role: "Admin" },
  { id: 3, name: "Mike Rodriguez", email: "mike@atom.app", role: "Member" },
  { id: 4, name: "Emma Wilson", email: "emma@atom.app", role: "Member" },
];

const roleColors = {
  Owner: "bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300",
  Admin: "bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300",
  Member: "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300",
};

export default function TeamPage() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [members, setMembers] = useState(teamMembers);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">Team</h1>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">
              Manage your team members and permissions
            </p>
          </div>
          <button
            onClick={() => setIsInviteModalOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-150"
          >
            <Plus className="h-4 w-4" />
            Invite Member
          </button>
        </div>

        {/* Team Members List */}
        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 overflow-hidden">
          <div className="space-y-0">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center gap-4 px-6 py-4 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150"
              >
                {/* Avatar */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 dark:bg-white/10 text-sm font-medium text-black dark:text-white flex-shrink-0">
                  {getInitials(member.name)}
                </div>

                {/* Member Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-semibold text-black dark:text-white">{member.name}</h3>
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded text-xs font-medium",
                        roleColors[member.role]
                      )}
                    >
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-black/50 dark:text-white/50 mt-0.5">{member.email}</p>
                </div>

                {/* Actions */}
                <button className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150">
                  <MoreVertical className="h-4 w-4 text-black/60 dark:text-white/60" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Invite Modal */}
      <InviteModal
        open={isInviteModalOpen}
        onOpenChange={setIsInviteModalOpen}
        onInvite={(member) => {
          setMembers([...members, member]);
          setIsInviteModalOpen(false);
        }}
      />
    </div>
  );
}

type InviteModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onInvite: (member: TeamMember) => void;
};

function InviteModal({ open, onOpenChange, onInvite }: InviteModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<TeamMember["role"]>("Member");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const newMember: TeamMember = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      role,
    };

    onInvite(newMember);
    setName("");
    setEmail("");
    setRole("Member");
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
              <h2 className="text-lg font-semibold text-black dark:text-white mb-4">Invite Team Member</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
                    Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as TeamMember["role"])}
                    className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                  >
                    <option value="Member">Member</option>
                    <option value="Admin">Admin</option>
                    <option value="Owner">Owner</option>
                  </select>
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
                    Send Invite
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

