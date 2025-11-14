import { DemoPreview } from "@/components/landing/DemoPreview";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Integrations } from "@/components/landing/Integrations";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { ValueProps } from "@/components/landing/ValueProps";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <DemoPreview />
        <Features />
        <Pricing />
        <Testimonials />
        <Integrations />
      </main>
      <Footer />
    </div>
  );
}
