"use client";

import { useState } from "react";
import { User, Settings as SettingsIcon, CreditCard, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TabId = "account" | "app" | "billing" | "workspace";

const tabs = [
  { id: "account" as TabId, label: "Account", icon: User },
  { id: "app" as TabId, label: "App", icon: SettingsIcon },
  { id: "billing" as TabId, label: "Billing", icon: CreditCard },
  { id: "workspace" as TabId, label: "Workspace", icon: Building2 },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("account");

  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">Settings</h1>
          <p className="mt-1 text-sm text-black/50 dark:text-white/50">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="flex gap-8 max-w-6xl">
          {/* Tabs Sidebar */}
          <div className="w-48 flex-shrink-0">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                      isActive
                        ? "bg-black/5 dark:bg-white/8 text-black dark:text-white"
                        : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-8"
            >
              {activeTab === "account" && <AccountSettings />}
              {activeTab === "app" && <AppSettings />}
              {activeTab === "billing" && <BillingSettings />}
              {activeTab === "workspace" && <WorkspaceSettings />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccountSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-black dark:text-white mb-1">Account</h2>
        <p className="text-sm text-black/50 dark:text-white/50">
          Manage your account information and preferences
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
            Email
          </label>
          <input
            type="email"
            defaultValue="john@atom.app"
            className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
          />
          <p className="mt-1 text-xs text-black/50 dark:text-white/50">
            Leave blank to keep your current password
          </p>
        </div>

        <div className="flex items-center justify-end pt-4">
          <button className="px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-150">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function AppSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-black dark:text-white mb-1">App</h2>
        <p className="text-sm text-black/50 dark:text-white/50">
          Customize your application preferences
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-sm font-medium text-black dark:text-white">Notifications</p>
            <p className="text-xs text-black/50 dark:text-white/50 mt-0.5">
              Receive notifications for important updates
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-black/20 dark:bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black dark:peer-checked:bg-white"></div>
          </label>
        </div>

        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-sm font-medium text-black dark:text-white">Email Digest</p>
            <p className="text-xs text-black/50 dark:text-white/50 mt-0.5">
              Receive daily email summaries
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-black/20 dark:bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black dark:peer-checked:bg-white"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

function BillingSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-black dark:text-white mb-1">Billing</h2>
        <p className="text-sm text-black/50 dark:text-white/50">
          Manage your subscription and payment methods
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-black dark:text-white">Pro Plan</p>
              <p className="text-xs text-black/50 dark:text-white/50 mt-0.5">$29/month</p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
              Manage
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
            Payment Method
          </label>
          <div className="rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4">
            <p className="text-sm text-black/60 dark:text-white/60">•••• •••• •••• 4242</p>
            <p className="text-xs text-black/50 dark:text-white/50 mt-1">Expires 12/25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkspaceSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-black dark:text-white mb-1">Workspace</h2>
        <p className="text-sm text-black/50 dark:text-white/50">
          Configure your workspace settings
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
            Workspace Name
          </label>
          <input
            type="text"
            defaultValue="My Workspace"
            className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">
            Description
          </label>
          <textarea
            rows={3}
            placeholder="Workspace description"
            className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 resize-none"
          />
        </div>

        <div className="flex items-center justify-end pt-4">
          <button className="px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-150">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
