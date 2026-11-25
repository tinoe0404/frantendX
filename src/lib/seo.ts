import { Metadata } from "next";

/** Shared SEO constants */
export const SEO = {
  siteUrl: "https://frantiva.co.zw",
  siteName: "Frantiva Technologies",
  defaultDescription:
    "Frantiva Technologies is a Harare-based software engineering and AI studio. We design, build, and operate intelligent software products for founders, enterprises, and NGOs across Africa.",
  locale: "en_ZW",
} as const;

/** Build page-level metadata with canonical URL and OG overrides */
export function buildPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noIndex = false,
}: {
  title: string | { absolute: string };
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SEO.siteUrl}${path}`;
  const displayTitle = typeof title === "string" ? title : title.absolute;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle ?? displayTitle,
      description: ogDescription ?? description,
      url,
      siteName: SEO.siteName,
      locale: SEO.locale,
      type: "website",
      images: [
        {
          url: `${SEO.siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: ogTitle ?? displayTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? displayTitle,
      description: ogDescription ?? description,
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}

/** Generate BreadcrumbList JSON-LD for a page */
export function buildBreadcrumbs(
  items: { name: string; path: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SEO.siteUrl}${item.path}`,
    })),
  };
}

/** Generate FAQPage JSON-LD */
export function buildFaqSchema(
  faqs: { question: string; answer: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
