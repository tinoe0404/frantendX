import { Hero } from "@/components/sections/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { InnovationLab } from "@/components/sections/InnovationLab";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20 relative z-20">
        <StatsCounter />
      </div>
      <MarqueeTicker />
      <ServicesPreview />
      <ProcessTimeline />
      <InnovationLab />
      <CallToAction />
    </>
  );
}
