import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { InnovationLab } from "@/components/sections/InnovationLab";
import { CallToAction } from "@/components/sections/CallToAction";
import { StatsCounter } from "@/components/StatsCounter";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <StatsCounter />
      </div>
      <TrustSection />
      <MarqueeTicker />
      <ServicesPreview />
      <InnovationLab />
      <CallToAction />
    </>
  );
}
