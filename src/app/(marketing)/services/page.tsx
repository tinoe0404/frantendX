import { Metadata } from "next";
import { Laptop, ShoppingBag, Server } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";

export const metadata: Metadata = {
    title: "Our Services | frantendX Digital Solutions",
    description: "Explore our web development services: Custom Web Apps, E-commerce Solutions, and API Integrations.",
};

const services = [
    {
        title: "Custom Web Development",
        description: "We build bespoke websites that outperform templates. Using Next.js and React, we create fast, SEO-friendly, and highly interactive user experiences tailored to your brand.",
        features: ["Next.js 14+", "Responsive Design", "SEO Optimization", "Performance Tuning"],
        icon: Laptop,
    },
    {
        title: "E-commerce Systems",
        description: "High-converting stores with secure payment integration. We leverage modern headless commerce architectures to give you complete control over your storefront.",
        features: ["Shopify Headless", "Stripe Integration", "Inventory Management", "Secure Checkout"],
        icon: ShoppingBag,
    },
    {
        title: "API & Backend Solutions",
        description: "Robust data handling and integrations. We design secure APIs and scalable database schemas to power your business logic.",
        features: ["Node.js / Express", "PostgreSQL (Neon)", "REST & GraphQL", "Third-party Integrations"],
        icon: Server,
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-secondary/20">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                        Our Technical <span className="text-primary">Capabilities</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                        End-to-end development services to modernize your business.
                    </p>
                </div>
            </section>

            {/* Detailed Service List */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                        {services.map((service) => (
                            <Card key={service.title} className="flex flex-col md:flex-row gap-6 p-6 md:p-8 hover:border-primary/50 transition-colors">
                                <div className="flex-shrink-0">
                                    <div className="h-16 w-16 rounded-xl bg-blue-100 flex items-center justify-center text-primary">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                </div>
                                <div className="space-y-4 flex-1">
                                    <div>
                                        <h3 className="text-2xl font-bold">{service.title}</h3>
                                        <p className="text-muted-foreground mt-2">{service.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map(feature => (
                                            <span key={feature} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <ProcessTimeline />
        </>
    );
}
