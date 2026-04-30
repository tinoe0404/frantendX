export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "FrantendX Digital Solutions",
        "url": "https://frantendxsolutions.co.zw",
        "priceRange": "$$$",
        "email": "info@frantendxsolutions.co.zw",
        "telephone": "+2630780885780",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "ZW"
        },
        
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
