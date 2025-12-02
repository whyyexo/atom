import type { Metadata } from "next";
import { SciencePageClient } from "./science-client";

export const metadata: Metadata = {
  title: "Science — Atom",
};

export default function SciencePage() {
  return <SciencePageClient />;
}
