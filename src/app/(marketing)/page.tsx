import { Hero } from "@/components/sections/Hero";

import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CallToAction } from "@/components/sections/CallToAction";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      <ServicesPreview />

      <Testimonials />

      {/* CTA Section */}
      <CallToAction /> {/* Added CallToAction back as it was implied to be the CTA section */}
    </>
  );
}
