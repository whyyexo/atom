"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface AuthLoadingProps {
  message?: string;
}

export function AuthLoading({ message = "Loading..." }: AuthLoadingProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <Loader2 className="h-8 w-8 animate-spin text-white/60" />
        {message && (
          <p className="text-sm font-light text-white/60">{message}</p>
        )}
      </motion.div>
    </div>
  );
}

