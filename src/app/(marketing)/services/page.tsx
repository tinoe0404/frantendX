import { Metadata } from "next";
import Link from "next/link";
import {
    Laptop,
    ShoppingBag,
    Server,
    Check,
    Code,
    Smartphone,
    ShieldCheck,
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Services & Pricing | frantendX Digital Solutions",
    description: "Transparent pricing and detailed service packages for custom websites, web applications, and digital systems.",
};

const serviceOverview = [
    {
        title: "Website Development",
        description: "High-performance, SEO-optimized marketing websites tailored to your brand.",
        icon: Laptop,
    },
    {
        title: "Web Applications",
        description: "Complex, interactive web systems with user accounts, dashboards, and data management.",
        icon: Code,
    },
    {
        title: "Custom Software",
        description: "Bespoke digital solutions to automate workflows and solve unique business problems.",
        icon: Server,
    },
    {
        title: "Maintenance & Support",
        description: "Ongoing updates, security monitoring, and performance optimization.",
        icon: ShieldCheck,
    },
];

const packages = [
    {
        title: "Starter Business Website",
        description: "Perfect for small businesses needing a professional online presence.",
        scope: "5 - 8 Pages",
        features: [
            "Custom Modern Design",
            "Mobile Responsive",
            "Contact Form Integration",
            "Basic SEO Setup",
            "CMS for Easy Editing",
            "Fast Loading Speed"
        ],
        timeline: "2 - 3 Weeks",
        priceRange: "$1,500 - $3,000",
        highlighted: false
    },
    {
        title: "Corporate Website",
        description: "A comprehensive solution for established companies requiring advanced features.",
        scope: "10 - 20 Pages",
        features: [
            "Premium Custom UX/UI",
            "Advanced Animations",
            "Blog / News Section",
            "CRM Integration",
            "Advanced SEO Strategy",
            "Multi-language Support"
        ],
        timeline: "4 - 6 Weeks",
        priceRange: "$4,000 - $8,000",
        highlighted: true
    },
    {
        title: "Web Application / System",
        description: "Full-featured web software for SaaS products or internal business tools.",
        scope: "Custom Scope",
        features: [
            "User Authentication (Auth0/NextAuth)",
            "Database Design (Postgres)",
            "Admin Dashboards",
            "Payment Processing (Stripe)",
            "API Development",
            "Real-time Features"
        ],
        timeline: "8 - 12+ Weeks",
        priceRange: "$10,000 - $25,000+",
        highlighted: false
    }
];

const pricingFactors = [
    {
        title: "Page Count & Content",
        description: "More pages require more design, development, and content population time."
    },
    {
        title: "Custom Design",
        description: "Tailored, unique designs take longer than standard layouts but offer better brand distinction."
    },
    {
        title: "Integrations",
        description: "Connecting to third-party tools (CRMs, Payment Gateways) adds complexity."
    },
    {
        title: "Advanced Features",
        description: "User logins, dashboards, and real-time data increase development scope significantly."
    }
];

export default function ServicesPage() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="relative py-20 md:py-32 bg-secondary/10 overflow-hidden">
                <div className="container px-4 md:px-8 mx-auto text-center relative z-10">
                    <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5">
                        Transparent Pricing & Expert Services
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                        What We Build & <span className="text-primary">How Much It Costs</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
                        We build custom software solutions tailored to your business goals.
                        No hidden fees, just clear value and exceptional quality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 text-base" asChild>
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                            <Link href="#packages">View Packages</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Services Overview */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                            Our team specializes in creating robust digital ecosystems.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceOverview.map((service) => (
                            <Card key={service.title} className="border-none shadow-sm bg-secondary/20">
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-lg">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Detailed Service Packages */}
            <section id="packages" className="py-20 bg-secondary/5">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Service Packages & Estimates</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Typical investment ranges for our most popular project types.
                            Actual costs may vary based on your specific requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {packages.map((pkg) => (
                            <Card
                                key={pkg.title}
                                className={`flex flex-col ${pkg.highlighted ? 'border-primary shadow-xl relative scale-105 z-10' : 'border-border'}`}
                            >
                                {pkg.highlighted && (
                                    <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                                        <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                                    <CardDescription className="mt-2 text-base">{pkg.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-6">
                                    <div className="space-y-2">
                                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Estimate Range</div>
                                        <div className="text-3xl font-bold text-primary">{pkg.priceRange}</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50">
                                        <div>
                                            <div className="text-xs text-muted-foreground uppercase font-semibold">Scope</div>
                                            <div className="font-medium">{pkg.scope}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground uppercase font-semibold">Timeline</div>
                                            <div className="font-medium">{pkg.timeline}</div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm">
                                                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-8">
                                    <Button className="w-full" variant={pkg.highlighted ? "default" : "outline"} asChild>
                                        <Link href="/contact">Request a Custom Quote</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* 4. Pricing Disclaimer */}
                    <div className="mt-12 p-6 bg-background border border-border rounded-lg max-w-4xl mx-auto text-center">
                        <h4 className="font-semibold mb-2">Pricing Disclaimer</h4>
                        <p className="text-sm text-muted-foreground">
                            * The ranges above are estimates based on typical project scopes.
                            All projects require a detailed discovery phase to provide a fixed-price proposal.
                            Custom features, expedited timelines, and third-party costs (hosting, plugins) may affect the final investment.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Pricing Factors */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-8 mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">What Influences the Cost?</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Not every website is created equal. The complexity of your project is the main driver of cost and timeline.
                            </p>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/contact">Discuss Your Project</Link>
                            </Button>
                        </div>
                        <div className="space-y-6">
                            {pricingFactors.map((factor) => (
                                <div key={factor.title} className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Zap className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">{factor.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                                            {factor.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Final CTA */}
            <section className="py-24 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to Start Your Project?</h2>
                    <p className="max-w-2xl mx-auto text-primary-foreground/80 text-xl mb-10">
                        Get a free consultation and a detailed project proposal. No obligation, just expert advice.
                    </p>
                    <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-semibold" asChild>
                        <Link href="/contact">Request a Custom Quote &rarr;</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
