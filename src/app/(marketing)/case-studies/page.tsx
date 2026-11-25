import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { CallToAction } from "@/components/sections/CallToAction";
import { buildPageMetadata, buildBreadcrumbs } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Case studies",
  description:
    "Explore real-world software projects delivered by Frantiva Technologies. See how we helped businesses in tourism, industrial services, and education achieve measurable results.",
  path: "/case-studies",
  ogTitle: "Case Studies — Frantiva Technologies",
  ogDescription:
    "Real software projects with real results. See how Frantiva Technologies delivers measurable outcomes for businesses across Africa.",
});

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/case-studies" },
]);

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <FeaturedWork headingLevel="h1" />
      <CallToAction />
    </div>
  );
}
