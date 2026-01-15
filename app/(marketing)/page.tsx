import { Hero } from "@/components/marketing/hero";
import { FeaturesGrid } from "@/components/marketing/features-grid";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { FrameworkShowcase } from "@/components/marketing/framework-showcase";
import { CTASection } from "@/components/marketing/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <FrameworkShowcase />
      <CTASection />
    </>
  );
}
