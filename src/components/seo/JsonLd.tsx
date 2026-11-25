export default function JsonLd() {
  const SITE_URL = "https://frantiva.co.zw";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Frantiva Technologies",
    legalName: "Frantiva Technologies (Private) Limited",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    email: "info@frantendxsolutions.co.zw",
    telephone: "+263780885780",
    foundingLocation: {
      "@type": "Place",
      name: "Harare, Zimbabwe",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+263780885780",
        contactType: "sales",
        email: "info@frantendxsolutions.co.zw",
        availableLanguage: ["English"],
        areaServed: ["ZW", "ZA", "BW", "MZ", "NA"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Frantiva Technologies",
    description:
      "Frantiva Technologies is a Harare-based software engineering and AI studio. We design, build, and operate intelligent software products for founders, enterprises, and NGOs across Africa.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Frantiva Technologies",
    url: SITE_URL,
    image: `${SITE_URL}/images/logo.png`,
    email: "info@frantendxsolutions.co.zw",
    telephone: "+263780885780",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.8292,
      longitude: 31.0522,
    },
    areaServed: [
      { "@type": "Country", name: "Zimbabwe" },
      { "@type": "Country", name: "South Africa" },
      { "@type": "Continent", name: "Africa" },
    ],
    knowsAbout: [
      "Custom Software Development",
      "Artificial Intelligence",
      "Web Application Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "AI Agents",
      "Cloud Infrastructure",
      "UI/UX Design",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI agents & automation",
            description:
              "Custom-trained AI agents that automate complex workflows and customer operations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom web application development",
            description:
              "Bespoke operational software with user accounts, dashboards, and role permissions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile app development",
            description:
              "Native-grade cross-platform mobile experiences for iOS and Android.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce store development",
            description:
              "Full-featured online stores with secure payment gateways including EcoCash and Stripe.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business website development",
            description:
              "Professional, fast-loading business websites optimized for search engines.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
