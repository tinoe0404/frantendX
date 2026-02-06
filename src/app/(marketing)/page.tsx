import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesPreview />
      <ROICalculator />
      <Testimonials />
      <CallToAction />
    </>
  );
}
