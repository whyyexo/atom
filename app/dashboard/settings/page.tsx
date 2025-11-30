"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Shield,
  CreditCard,
  Bell,
  Palette,
  Moon,
  Sun,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/components/providers/theme-provider";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [name, setName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex@atom.app");
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-black dark:to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-[#007AFF]" />
                <CardTitle>Profile</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-2xl border-black/10 dark:border-white/10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-2xl border-black/10 dark:border-white/10"
                />
              </div>
              <Button className="rounded-2xl bg-[#007AFF] hover:bg-[#0051D5]">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#007AFF]" />
                <CardTitle>Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full rounded-2xl justify-start"
              >
                Change Password
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-2xl justify-start"
              >
                Manage Connected Devices
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Billing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-[#007AFF]" />
                <CardTitle>Billing</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-black/60 dark:to-gray-900/60 border border-black/5 dark:border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Free Plan</p>
                    <p className="text-sm text-gray-500">Current plan</p>
                  </div>
                  <Button className="rounded-xl bg-[#007AFF] hover:bg-[#0051D5]">
                    Upgrade
                  </Button>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full rounded-2xl justify-start"
              >
                View Billing History
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-[#007AFF]" />
                <CardTitle>Notifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, email: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-gray-500">Browser notifications</p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, push: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Appearance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-[#007AFF]" />
                <CardTitle>Appearance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  onClick={() => setTheme("light")}
                  className="flex-1 rounded-2xl h-20 flex-col gap-2"
                >
                  <Sun className="h-6 w-6" />
                  Light
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  onClick={() => setTheme("dark")}
                  className="flex-1 rounded-2xl h-20 flex-col gap-2"
                >
                  <Moon className="h-6 w-6" />
                  Dark
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
