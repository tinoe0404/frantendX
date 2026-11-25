import { Hero } from "@/components/sections/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { InnovationLab } from "@/components/sections/InnovationLab";
import { CallToAction } from "@/components/sections/CallToAction";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: {
    absolute: "Frantiva Technologies — Intelligent Software & AI Solutions",
  },
  description:
    "Frantiva Technologies is a Harare-based product engineering and AI studio. We build intelligent software, custom web apps, mobile apps, and AI agents for businesses across Africa.",
  path: "/",
  ogTitle: "Frantiva Technologies — Intelligent Software. Built to Move Business.",
});

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
