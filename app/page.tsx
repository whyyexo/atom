import type { Metadata } from "next";
import { LandingPageClient } from "./landing-client";

export const metadata: Metadata = {
  title: "Atom — Smart Workspace Powered by AI",
};

export default function LandingPage() {
  return <LandingPageClient />;
}
