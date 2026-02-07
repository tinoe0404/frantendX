export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "FrantendX Digital Solutions",
        "url": "https://frantendx.com",
        "priceRange": "$$$",
        "email": "info@frantendxsolutions.co.zw",
        "telephone": "+2630780885780",
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
