import { Hero } from "@/components/sections/Hero";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";
import { StatsCounter } from "@/components/StatsCounter";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <StatsCounter />
      </div>
      <MarqueeTicker />
      <ServicesPreview />
      <FeaturedWork />
      <ProcessTimeline />
      <Testimonials />
      <CallToAction />
    </>
  );
}
