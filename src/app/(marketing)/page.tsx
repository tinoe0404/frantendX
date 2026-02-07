import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesPreview />
      <ProcessTimeline />
      <CallToAction />
    </>
  );
}
