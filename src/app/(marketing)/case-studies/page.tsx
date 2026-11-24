import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { CallToAction } from "@/components/sections/CallToAction";

export const metadata = {
  title: "Case Studies | Frantiva Technologies",
  description: "Explore our portfolio of successful digital products and enterprise systems.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 md:pt-36">
      <FeaturedWork />
      <CallToAction />
    </div>
  );
}
