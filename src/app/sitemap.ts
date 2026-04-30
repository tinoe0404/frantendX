import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://frantendxsolutions.co.zw',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://frantendxsolutions.co.zw/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://frantendxsolutions.co.zw/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        {
            url: 'https://frantendxsolutions.co.zw/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
