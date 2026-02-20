import { HeroSection } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyUsSection } from "@/components/sections/why-us";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
