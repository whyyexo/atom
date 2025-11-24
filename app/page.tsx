import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { WhyAtom } from "@/components/landing/WhyAtom";
import { Features } from "@/components/landing/Features";
import { AtomOS } from "@/components/landing/AtomOS";
import { MobileDesktop } from "@/components/landing/MobileDesktop";
import { ScienceSection } from "@/components/landing/ScienceSection";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground">
      <Header />
      <main>
        <Hero />
        <WhyAtom />
        <Features />
        <AtomOS />
        <MobileDesktop />
        <ScienceSection />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
