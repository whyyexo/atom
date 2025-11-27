"use client";

import { useState, useMemo } from "react";
import {
  Bell,
  Check,
  CheckCheck,
  X,
  Settings,
  Zap,
  Box,
  CreditCard,
  Filter,
  Trash2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type NotificationCategory = "all" | "system" | "automations" | "apps" | "billing";

type Notification = {
  id: number;
  category: Exclude<NotificationCategory, "all">;
  icon: React.ElementType;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    category: "system",
    icon: Settings,
    title: "System update available",
    description: "A new version of Atom is available. Update now to get the latest features.",
    timestamp: "2 minutes ago",
    read: false,
  },
  {
    id: 2,
    category: "automations",
    icon: Zap,
    title: "Automation completed",
    description: "Your daily task sync automation ran successfully and updated 12 tasks.",
    timestamp: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    category: "apps",
    icon: Box,
    title: "New app integration",
    description: "Slack integration is now available. Connect your workspace to get started.",
    timestamp: "3 hours ago",
    read: true,
  },
  {
    id: 4,
    category: "billing",
    icon: CreditCard,
    title: "Payment processed",
    description: "Your subscription payment for $29 has been processed successfully.",
    timestamp: "1 day ago",
    read: true,
  },
  {
    id: 5,
    category: "automations",
    icon: Zap,
    title: "Automation failed",
    description: "Your email automation failed to run. Check your configuration.",
    timestamp: "2 days ago",
    read: false,
  },
  {
    id: 6,
    category: "system",
    icon: Settings,
    title: "Maintenance scheduled",
    description: "System maintenance is scheduled for tonight at 2 AM EST. Expect brief downtime.",
    timestamp: "3 days ago",
    read: true,
  },
];

const categoryIcons: Record<Exclude<NotificationCategory, "all">, React.ElementType> = {
  system: Settings,
  automations: Zap,
  apps: Box,
  billing: CreditCard,
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [filter, setFilter] = useState<NotificationCategory>("all");

  const filteredNotifications = useMemo(() => {
    if (filter === "all") return notifications;
    return notifications.filter((n) => n.category === filter);
  }, [notifications, filter]);

  const unreadCount = useMemo(() => {
    return notifications.filter((n) => !n.read).length;
  }, [notifications]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const categories: { id: NotificationCategory; label: string }[] = [
    { id: "all", label: "All" },
    { id: "system", label: "System" },
    { id: "automations", label: "Automations" },
    { id: "apps", label: "Apps" },
    { id: "billing", label: "Billing" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
              Notifications
            </h1>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">
              Manage your notifications and stay updated
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 text-sm font-medium text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-150"
            >
              <CheckCheck className="h-4 w-4" />
              Mark all as read
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => {
            const Icon = category.id === "all" ? Filter : categoryIcons[category.id];
            const count =
              category.id === "all"
                ? unreadCount
                : notifications.filter((n) => n.category === category.id && !n.read).length;

            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-150 whitespace-nowrap",
                  filter === category.id
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10"
                )}
              >
                <Icon className="h-4 w-4" />
                {category.label}
                {count > 0 && (
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded-full text-xs font-medium",
                      filter === category.id
                        ? "bg-white/20 dark:bg-black/20"
                        : "bg-black/10 dark:bg-white/10"
                    )}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Notifications List */}
        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {filteredNotifications.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-12 text-center"
              >
                <Bell className="h-12 w-12 text-black/20 dark:text-white/20 mx-auto mb-4" />
                <p className="text-sm text-black/50 dark:text-white/50">
                  No notifications found
                </p>
              </motion.div>
            ) : (
              filteredNotifications.map((notification, index) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  index={index}
                  onMarkAsRead={() => markAsRead(notification.id)}
                  onDelete={() => deleteNotification(notification.id)}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

type NotificationItemProps = {
  notification: Notification;
  index: number;
  onMarkAsRead: () => void;
  onDelete: () => void;
};

function NotificationItem({
  notification,
  index,
  onMarkAsRead,
  onDelete,
}: NotificationItemProps) {
  const Icon = notification.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "group flex items-start gap-4 px-6 py-4 border-b border-black/5 dark:border-white/5 last:border-0 transition-all duration-150",
        !notification.read && "bg-black/5 dark:bg-white/5"
      )}
    >
      <div className="flex-shrink-0 p-2 rounded-lg bg-black/5 dark:bg-white/5">
        <Icon className="h-5 w-5 text-black/70 dark:text-white/70" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3
            className={cn(
              "text-sm font-semibold",
              notification.read
                ? "text-black/70 dark:text-white/70"
                : "text-black dark:text-white"
            )}
          >
            {notification.title}
          </h3>
          {!notification.read && (
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-black dark:bg-white" />
          )}
        </div>
        <p className="text-sm text-black/60 dark:text-white/60 mb-2">
          {notification.description}
        </p>
        <p className="text-xs text-black/40 dark:text-white/40">{notification.timestamp}</p>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {!notification.read && (
          <button
            onClick={onMarkAsRead}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Mark as read"
          >
            <Check className="h-4 w-4 text-black/60 dark:text-white/60" />
          </button>
        )}
        <button
          onClick={onDelete}
          className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
          aria-label="Delete notification"
        >
          <Trash2 className="h-4 w-4 text-red-600 dark:text-red-400" />
        </button>
      </div>
    </motion.div>
  );
}

