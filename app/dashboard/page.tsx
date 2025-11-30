"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Bell,
  Sparkles,
  Brain,
  Target,
  TrendingUp,
  Mail,
  Moon,
  CheckCircle2,
  Plus,
  X,
  Info,
  Zap,
  BarChart3,
  Sparkle,
  Mic,
  Send,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Header Component
function DashboardHeader({ userName }: { userName: string }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 dark:border-white/5 bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 rounded-2xl border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 hover:bg-black/5 dark:hover:bg-white/10"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
            {userName.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </header>
  );
}

// Cognitive Load Monitor Widget
function CognitiveLoadWidget({ isPro }: { isPro: boolean }) {
  const [load, setLoad] = useState<"low" | "medium" | "high">("medium");
  const [showTooltip, setShowTooltip] = useState(false);

  const loadData = {
    low: { color: "#34C759", label: "Low", value: 32, description: "Optimal cognitive capacity" },
    medium: { color: "#FF9500", label: "Medium", value: 65, description: "Moderate mental load" },
    high: { color: "#FF3B30", label: "High", value: 87, description: "Cognitive overload risk" },
  };

  const current = loadData[load];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-[#007AFF]" />
              <CardTitle className="text-base font-semibold">Cognitive Load</CardTitle>
            </div>
            <div className="relative">
              <Info
                className="h-4 w-4 text-gray-400 cursor-help"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              {showTooltip && (
                <div className="absolute right-0 top-6 w-64 p-3 rounded-2xl bg-black/90 dark:bg-white/90 text-white dark:text-black text-xs z-50 shadow-xl">
                  Based on Sweller's Cognitive Load Theory. Measures working memory demand from task volume, complexity, and focus patterns.
                </div>
              )}
            </div>
          </div>
          {!isPro && <Badge variant="outline" className="text-xs mt-2">Free</Badge>}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold" style={{ color: current.color }}>
                {current.label}
              </span>
              <span className="text-sm text-gray-500">{current.value}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: current.color }}
                initial={{ width: 0 }}
                animate={{ width: `${current.value}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <p className="text-xs text-gray-500">{current.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// AI Priority Engine Widget
function AIPriorityWidget({ isPro }: { isPro: boolean }) {
  const priorities = [
    { task: "Review Q4 strategy", priority: 95, reason: "Pareto: 80% impact" },
    { task: "Team sync meeting", priority: 72, reason: "Parkinson's Law" },
    { task: "Update documentation", priority: 45, reason: "Low switching cost" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-[#007AFF]" />
              <CardTitle className="text-base font-semibold">AI Priority Engine</CardTitle>
            </div>
            {!isPro && <Badge variant="outline" className="text-xs">Free</Badge>}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {priorities.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.task}</span>
                  <span className="text-xs font-semibold text-[#007AFF]">{item.priority}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6]"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.priority}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                  />
                </div>
                <p className="text-xs text-gray-500">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Focus Performance Score Widget
function FocusScoreWidget({ isPro }: { isPro: boolean }) {
  const [score, setScore] = useState(78);
  const dailyScores = [72, 75, 68, 82, 79, 85, 78];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#007AFF]" />
              <CardTitle className="text-base font-semibold">Focus Score</CardTitle>
            </div>
            {!isPro && <Badge variant="outline" className="text-xs">Free</Badge>}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#007AFF] mb-2">{score}</div>
              <p className="text-xs text-gray-500">Based on sustained attention research</p>
            </div>
            <div className="flex items-end gap-1 h-16">
              {dailyScores.map((s, idx) => (
                <motion.div
                  key={idx}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-[#007AFF] to-[#5AC8FA]"
                  initial={{ height: 0 }}
                  animate={{ height: `${(s / 100) * 100}%` }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                />
              ))}
            </div>
            <p className="text-xs text-center text-gray-500">7-day performance</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Email Sorting Status Widget
function EmailSortingWidget({ isPro }: { isPro: boolean }) {
  const sorted = 32;
  const total = 48;
  const categories = [
    { name: "Action", count: 12, color: "#FF3B30" },
    { name: "Read Later", count: 8, color: "#FF9500" },
    { name: "Urgent", count: 5, color: "#FF3B30" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#007AFF]" />
              <CardTitle className="text-base font-semibold">Email Sorting</CardTitle>
            </div>
            {isPro ? (
              <Badge className="text-xs bg-[#007AFF]">Pro</Badge>
            ) : (
              <Badge variant="outline" className="text-xs">Free (50/day)</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">AI sorted {sorted} emails today</span>
                <span className="text-xs text-gray-500">{total - sorted} remaining</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6]"
                  initial={{ width: 0 }}
                  animate={{ width: `${(sorted / total) * 100}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
            <div className="space-y-2">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span>{cat.name}</span>
                  </div>
                  <span className="font-medium">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Sleep Productivity Widget
function SleepProductivityWidget({ isPro }: { isPro: boolean }) {
  const correlation = 87;
  const sleepHours = 7.5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon className="h-5 w-5 text-[#007AFF]" />
              <CardTitle className="text-base font-semibold">Sleep → Productivity</CardTitle>
            </div>
            {isPro ? (
              <Badge className="text-xs bg-[#007AFF]">Pro</Badge>
            ) : (
              <Badge variant="outline" className="text-xs">Free</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#007AFF] mb-1">{correlation}%</div>
              <p className="text-xs text-gray-500">Correlation (chronobiology research)</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Last night</span>
                <span className="font-semibold">{sleepHours}h</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${(sleepHours / 8) * 100}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
            {isPro && (
              <p className="text-xs text-gray-500 pt-2 border-t border-gray-200 dark:border-gray-800">
                Pro: Access to deep sleep insights & recommendations
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Quick Tasks Widget
function QuickTasksWidget() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review design mockups", completed: false },
    { id: 2, title: "Team standup", completed: false },
    { id: 3, title: "Update docs", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Quick Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex gap-2">
              <Input
                placeholder="Add task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTask()}
                className="flex-1 rounded-2xl border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40"
              />
              <Button
                onClick={addTask}
                className="rounded-2xl bg-[#007AFF] hover:bg-[#0051D5]"
                size="icon"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <button
                    onClick={() =>
                      setTasks(tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)))
                    }
                    className="flex-shrink-0"
                  >
                    <CheckCircle2
                      className={`h-5 w-5 ${
                        task.completed
                          ? "text-[#34C759] fill-[#34C759]"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  </button>
                  <span
                    className={`flex-1 text-sm ${
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Productivity Insights Widget
function ProductivityInsightsWidget({ isPro }: { isPro: boolean }) {
  const insights = [
    {
      title: "Zajonc Effect",
      description: "Mere exposure to tasks increases completion likelihood by 23%",
      source: "Social Psychology (1968)",
    },
    {
      title: "Completion Bias",
      description: "Your brain rewards task completion with dopamine, creating motivation loops",
      source: "Neuroscience Research",
    },
    {
      title: "Dopamine Reinforcement",
      description: "Small wins trigger dopamine release, sustaining long-term productivity",
      source: "Behavioral Psychology",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
    >
      <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-[#007AFF]" />
              <CardTitle className="text-base font-semibold">Productivity Insights Today</CardTitle>
            </div>
            {isPro && <Badge className="text-xs bg-[#007AFF]">Pro: Research Library</Badge>}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-black/60 dark:to-gray-900/60 border border-black/5 dark:border-white/5"
              >
                <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {insight.description}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                  {insight.source}
                </p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// AI Modal Component
function AIModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I'm your AI productivity assistant. How can I help?" },
  ]);
  const [isListening, setIsListening] = useState(false);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", text: input }]);
      setInput("");
      // Simulate AI response
      setTimeout(() => {
        setMessages([
          ...messages,
          { role: "user", text: input },
          { role: "assistant", text: "I've processed your request. Here's what I recommend..." },
        ]);
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed right-6 bottom-24 w-96 h-[600px] rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-2xl shadow-2xl border border-black/10 dark:border-white/10 z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center"
                  >
                    <Sparkle className="h-4 w-4 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#007AFF]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="font-semibold">AI Assistant</span>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      msg.role === "user"
                        ? "bg-[#007AFF] text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-black/10 dark:border-white/10 space-y-2">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 rounded-2xl border-black/10 dark:border-white/10"
                />
                <Button
                  onClick={() => setIsListening(!isListening)}
                  variant={isListening ? "default" : "outline"}
                  size="icon"
                  className="rounded-2xl"
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  onClick={sendMessage}
                  className="rounded-2xl bg-[#007AFF] hover:bg-[#0051D5]"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl text-xs"
                  onClick={() => setInput("Create a task to review Q4 strategy")}
                >
                  Create Task
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl text-xs"
                  onClick={() => setInput("Sort my emails by priority")}
                >
                  Sort Emails
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl text-xs"
                  onClick={() => setInput("Suggest focus mode settings")}
                >
                  Focus Mode
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Main Dashboard Page
export default function DashboardPage() {
  const [userName, setUserName] = useState("User");
  const [isPro, setIsPro] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);

  useEffect(() => {
    // Load user data
    const loadUser = async () => {
      // Simulate user data
      setUserName("Alex");
      setIsPro(false);
    };
    loadUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-black dark:to-[#1a1a1a]">
      <DashboardHeader userName={userName} />
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-semibold tracking-tight">Welcome back, {userName}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's your productivity overview for today
          </p>
        </motion.div>

        {/* Grid Row 1 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CognitiveLoadWidget isPro={isPro} />
          <AIPriorityWidget isPro={isPro} />
          <FocusScoreWidget isPro={isPro} />
        </div>

        {/* Grid Row 2 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <EmailSortingWidget isPro={isPro} />
          <SleepProductivityWidget isPro={isPro} />
          <QuickTasksWidget />
        </div>

        {/* Grid Row 3 - Full Width */}
        <ProductivityInsightsWidget isPro={isPro} />

        {/* AI Floating Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setAiModalOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] shadow-2xl flex items-center justify-center z-40 hover:shadow-[#007AFF]/50 transition-all"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#007AFF]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* AI Modal */}
        <AIModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
      </div>
    </div>
  );
}
