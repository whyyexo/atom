import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/public/public-layout";
import { Button } from "@/components/ui/button";
import { AppStoreBadge } from "@/components/download/AppStoreBadge";
import { GooglePlayBadge } from "@/components/download/GooglePlayBadge";
import { DownloadPageClient } from "./download-client";

export const metadata: Metadata = {
  title: "Download — Atom",
};

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DownloadPage() {
  return <DownloadPageClient />;
}

