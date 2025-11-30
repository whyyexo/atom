"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Mic,
  Send,
  CheckCircle2,
  FileText,
  Zap,
  X,
  Plus,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AIAssistantPage() {
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm Atom AI. I can help you create tasks, sort emails, suggest focus times, and more. How can I assist you today?",
    },
  ]);
  const [quickActions, setQuickActions] = useState([
    "Create a task to review Q4 strategy",
    "Sort my emails by priority",
    "Schedule a 2-hour deep work block",
    "Generate a summary of today's tasks",
  ]);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { role: "user", text: input },
        {
          role: "assistant",
          text: "I've processed your request. Here's what I recommend...",
        },
      ]);
      setInput("");
    }
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-black dark:to-[#1a1a1a]">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block mb-4"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center shadow-2xl"
              >
                <Sparkles className="h-12 w-12 text-white" />
              </motion.div>
              {/* Pulsing rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1.5],
                    opacity: [0.6, 0, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute inset-0 rounded-full border-2 border-[#007AFF]"
                />
              ))}
            </div>
          </motion.div>
          <h1 className="text-4xl font-semibold tracking-tight mb-2">
            Atom AI Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your intelligent productivity companion
          </p>
        </div>

        {/* Main Chat Area */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Chat */}
          <div className="md:col-span-2">
            <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg h-[600px] flex flex-col">
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl p-4 ${
                          msg.role === "user"
                            ? "bg-[#007AFF] text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </CardContent>
              <div className="p-4 border-t border-black/10 dark:border-white/10 space-y-3">
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
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  {quickActions.map((action, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="w-full justify-start text-left rounded-xl h-auto py-2 px-3 text-xs"
                      onClick={() => handleQuickAction(action)}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-lg">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Capabilities</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="h-4 w-4 text-[#34C759]" />
                    Task generation
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="h-4 w-4 text-[#34C759]" />
                    Email sorting
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="h-4 w-4 text-[#34C759]" />
                    Focus suggestions
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="h-4 w-4 text-[#34C759]" />
                    Summaries
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="h-4 w-4 text-[#34C759]" />
                    Notes automation
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

