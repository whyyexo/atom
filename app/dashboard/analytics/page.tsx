"use client";

import { TrendingUp, Zap, Clock, Target } from "lucide-react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@/components/providers/theme-provider";

const weeklyData = [
  { day: "Mon", productivity: 72 },
  { day: "Tue", productivity: 85 },
  { day: "Wed", productivity: 68 },
  { day: "Thu", productivity: 91 },
  { day: "Fri", productivity: 78 },
  { day: "Sat", productivity: 65 },
  { day: "Sun", productivity: 58 },
];

const categoryData = [
  { category: "Design", tasks: 24 },
  { category: "Development", tasks: 32 },
  { category: "Marketing", tasks: 18 },
  { category: "Sales", tasks: 15 },
  { category: "Support", tasks: 12 },
];

export default function AnalyticsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const gridColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const axisColor = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  const lineColor = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)";
  const barColor = isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)";
  const tooltipBg = isDark ? "rgba(10,10,10,0.95)" : "rgba(255,255,255,0.95)";
  const tooltipBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const tooltipText = isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.9)";

  return (
    <div className="min-h-screen bg-[#fdfdfd] dark:bg-[#0a0a0a]">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">Analytics</h1>
          <p className="mt-1 text-sm text-black/50 dark:text-white/50">
            Track your productivity and performance metrics
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <SummaryCard
            icon={Target}
            label="Tasks Completed"
            value="1,247"
            change="+12%"
            changeType="positive"
          />
          <SummaryCard
            icon={Zap}
            label="Automations Active"
            value="28"
            change="+3"
            changeType="positive"
          />
          <SummaryCard
            icon={Clock}
            label="Time Saved"
            value="42h"
            change="+8h"
            changeType="positive"
          />
          <SummaryCard
            icon={TrendingUp}
            label="Productivity Score"
            value="87"
            change="+5"
            changeType="positive"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Productivity Trend */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-6"
          >
            <h2 className="text-base font-semibold text-black dark:text-white mb-6">
              Weekly Productivity Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis
                  dataKey="day"
                  stroke={axisColor}
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: axisColor }}
                />
                <YAxis
                  stroke={axisColor}
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: axisColor }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: tooltipBg,
                    border: `1px solid ${tooltipBorder}`,
                    borderRadius: "8px",
                    padding: "8px 12px",
                    color: tooltipText,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="productivity"
                  stroke={lineColor}
                  strokeWidth={2}
                  dot={{ fill: lineColor, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Tasks per Category */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-6"
          >
            <h2 className="text-base font-semibold text-black dark:text-white mb-6">
              Tasks per Category
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis
                  dataKey="category"
                  stroke={axisColor}
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: axisColor }}
                />
                <YAxis
                  stroke={axisColor}
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: axisColor }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: tooltipBg,
                    border: `1px solid ${tooltipBorder}`,
                    borderRadius: "8px",
                    padding: "8px 12px",
                    color: tooltipText,
                  }}
                />
                <Bar dataKey="tasks" fill={barColor} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

type SummaryCardProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
};

function SummaryCard({ icon: Icon, label, value, change, changeType }: SummaryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/50 p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5">
          <Icon className="h-5 w-5 text-black/70 dark:text-white/70" />
        </div>
        <span
          className={`text-xs font-medium ${
            changeType === "positive"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {change}
        </span>
      </div>
      <div>
        <p className="text-2xl font-semibold text-black dark:text-white mb-1">{value}</p>
        <p className="text-sm text-black/50 dark:text-white/50">{label}</p>
      </div>
    </motion.div>
  );
}

