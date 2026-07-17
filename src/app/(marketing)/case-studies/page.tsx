import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { CallToAction } from "@/components/sections/CallToAction";

export const metadata = {
  title: "Case Studies | FrantendX",
  description: "Explore our portfolio of successful digital products and enterprise systems.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <div className="pt-32 pb-10 px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Case Studies
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover how we build scalable software that drives real business results.
        </p>
      </div>
      <FeaturedWork />
      <CallToAction />
    </>
  );
}
