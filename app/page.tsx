import { Blocks } from "@/components/landing/Blocks";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Productivity } from "@/components/landing/Productivity";
import { WorkspacePreview } from "@/components/landing/WorkspacePreview";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <WorkspacePreview />
        <Blocks />
        <Productivity />
      </main>
      <Footer />
    </div>
  );
}
