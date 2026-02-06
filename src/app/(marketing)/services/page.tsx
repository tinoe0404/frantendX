import { Metadata } from "next";
import Link from "next/link";
import {
    Check,
    Zap,
    MessageCircle,
    Building2,
    ShoppingCart,
    Workflow,
    MapPin,
    Mail,
    Briefcase,
    CalendarDays,
    CreditCard,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Services & Pricing | FrantendX Digital Solutions",
    description: "ROI-focused digital solutions for Zimbabwean businesses. Clear pricing, real business results, and systems that pay for themselves.",
};

const packages = [
    {
        id: "digital-presence",
        title: "The Digital Presence",
        subtitle: "Essential",
        description: "People can't find you on Google, so you're losing trust and leads.",
        whoItsFor: "Consultants, Small Businesses, Personal Brands",
        priceRange: "$250 - $450",
        features: [
            { icon: Briefcase, text: "3-5 Professional Pages" },
            { icon: MessageCircle, text: "Direct WhatsApp Chat Button (Capture leads instantly)" },
            { icon: MapPin, text: "Google Maps Integration (Drive foot traffic)" },
            { icon: Mail, text: "Professional Email Setup (Stop using Gmail for business)" },
        ],
        roi: "Turn casual browsers into WhatsApp leads.",
        highlighted: false
    },
    {
        id: "authority-builder",
        title: "The Authority Builder",
        subtitle: "Growth",
        description: "You need to update news, tenders, and events without paying a developer every time.",
        whoItsFor: "Schools, NGOs, Corporate SMEs",
        priceRange: "$600 - $950",
        features: [
            { icon: Building2, text: "Up to 10 Dynamic Pages" },
            { icon: Users, text: "Admin Dashboard: Edit text, post news, and manage events easily" },
            { icon: Zap, text: "SEO Optimization: Rank higher on Google for local searches" },
            { icon: CalendarDays, text: "1 Month Free Maintenance" },
        ],
        roi: "Build institutional trust and cut management costs.",
        highlighted: true
    },
    {
        id: "salesman",
        title: "The 24/7 Salesman",
        subtitle: "Marketplace",
        description: "Your shop closes at 5 PM. This one stays open forever.",
        whoItsFor: "Retail Stores, Hardware, Boutiques",
        priceRange: "$1,200 - $2,500",
        features: [
            { icon: ShoppingCart, text: "Full E-commerce (Unlimited Products)" },
            { icon: CreditCard, text: "Local Payments: Paynow / Ecocash / Visa Integration" },
            { icon: Briefcase, text: "Inventory Management System" },
            { icon: MessageCircle, text: "Automated Order Emails & WhatsApp Alerts" },
        ],
        roi: "Make sales while you sleep.",
        highlighted: false
    },
    {
        id: "efficiency-engine",
        title: "The Efficiency Engine",
        subtitle: "Visionary",
        description: "Manual spreadsheets and paperwork are slowing your business down.",
        whoItsFor: "Logistics, Startups, Service Aggregators",
        priceRange: "From $3,000",
        features: [
            { icon: Workflow, text: "Custom Web Application Logic" },
            { icon: Users, text: "User Portals (Client Login / Admin Login)" },
            { icon: Zap, text: "Real-time Data & Dashboards" },
            { icon: Briefcase, text: "Workflow Automation" },
        ],
        roi: "Automate operations and scale without chaos.",
        highlighted: false
    }
];

const pricingFactors = [
    {
        title: "Complexity of Logic",
        description: "Simple text pages cost less than systems with user logins, payments, or automation."
    },
    {
        title: "Number of Pages",
        description: "More pages require more design work, content, and testing."
    },
    {
        title: "Third-Party Integrations",
        description: "Connecting to payment gateways, email systems, or external APIs adds development time."
    },
    {
        title: "Custom Features",
        description: "Unique functionality built specifically for your business requires additional planning and coding."
    }
];

const faqs = [
    {
        question: "Why is hosting separate?",
        answer: "So you retain 100% ownership of your domain and data. We don't lock you in. Domain registration starts at $5, and secure cloud hosting is $10/month. This ensures your digital assets are fully yours."
    },
    {
        question: "Can I upgrade later?",
        answer: "Yes! Our systems are built to scale. Start with The Digital Presence and upgrade to The Authority Builder or E-commerce when your business grows."
    },
    {
        question: "What if I need changes after launch?",
        answer: "The Authority Builder includes 1 month of free maintenance. For other packages, we offer affordable maintenance plans or train you to make simple updates yourself using the admin dashboard."
    },
    {
        question: "How long does it take?",
        answer: "The Digital Presence typically takes 1-2 weeks. The Authority Builder takes 3-4 weeks. E-commerce and Custom Systems can take 6-12 weeks depending on complexity. We'll give you a clear timeline during the discovery phase."
    }
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
                <div className="container px-4 md:px-8 mx-auto text-center relative z-10">
                    <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-blue-300 text-blue-700 bg-blue-50">
                        Real Business Solutions. Real ROI.
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                        Don't Just Build a Website. <span className="text-blue-600">Build a Profit Engine.</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
                        Clear pricing, real business solutions, and systems that pay for themselves.
                        Designed for Zimbabwean businesses ready to grow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700" asChild>
                            <Link href="/contact">Get a Free Consultation</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-blue-300 text-blue-700 hover:bg-blue-50" asChild>
                            <Link href="#packages">View Packages</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Hosting Disclaimer */}
            <section className="py-8 bg-blue-600 text-white">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <p className="text-sm md:text-base font-medium">
                        💡 <strong>Own Your Digital Assets:</strong> To ensure you own 100% of your website, Domain Registration (starting at $5) and Secure Cloud Hosting ($10/month) are billed separately.
                    </p>
                </div>
            </section>

            {/* Service Packages */}
            <section id="packages" className="py-20 bg-slate-50">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Choose Your Growth Path</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Every package solves a real business problem. Choose the one that matches where you are now.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {packages.map((pkg) => (
                            <Card
                                key={pkg.id}
                                className={`flex flex-col ${pkg.highlighted
                                        ? 'border-blue-500 shadow-xl relative ring-2 ring-blue-500 scale-105 z-10 bg-white'
                                        : 'border-border bg-white'
                                    }`}
                            >
                                {pkg.highlighted && (
                                    <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <CardHeader>
                                    <Badge variant="secondary" className="w-fit mb-2 text-xs bg-blue-50 text-blue-700 border-blue-200">
                                        {pkg.subtitle}
                                    </Badge>
                                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                                    <CardDescription className="mt-2 text-sm italic text-muted-foreground">
                                        "{pkg.description}"
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-6">
                                    <div className="space-y-1">
                                        <div className="text-3xl font-bold text-blue-600">{pkg.priceRange}</div>
                                        <div className="text-xs text-muted-foreground">For {pkg.whoItsFor}</div>
                                    </div>

                                    <ul className="space-y-3">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <feature.icon className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                                                <span className="text-muted-foreground">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-4 border-t border-border/50">
                                        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">ROI</div>
                                        <p className="text-sm font-medium text-foreground">{pkg.roi}</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-6">
                                    <Button
                                        className={`w-full ${pkg.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                                        variant={pkg.highlighted ? "default" : "outline"}
                                        asChild
                                    >
                                        <Link href="/contact">Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Factors */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-8 mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">What Drives the Cost?</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Not all websites are equal. Here's what influences your investment and how we ensure you get maximum value.
                            </p>
                            <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50" asChild>
                                <Link href="/contact">Discuss Your Project</Link>
                            </Button>
                        </div>
                        <div className="space-y-6">
                            {pricingFactors.map((factor) => (
                                <div key={factor.title} className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
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

            {/* FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-8 mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">
                            Everything you need to know about our pricing and process.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-border rounded-lg px-6">
                                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Ready to Build Your Profit Engine?
                    </h2>
                    <p className="max-w-2xl mx-auto text-blue-100 text-xl mb-10">
                        Get a free consultation and a detailed project proposal. No obligation, just expert advice tailored to your business.
                    </p>
                    <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50" asChild>
                        <Link href="/contact">Start Your Project →</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
