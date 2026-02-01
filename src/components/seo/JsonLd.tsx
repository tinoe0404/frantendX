export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "frantendX Digital Solutions",
        "url": "https://frantendx.com",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "ZW"
        },
        "sameAs": [
            "https://twitter.com/frantendx",
            "https://linkedin.com/company/frantendx"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
