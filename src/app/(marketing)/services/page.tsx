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
    FileText,
    Image,
    Globe,
    Shield,
    BarChart3,
    Cloud,
    ArrowRight,
    type LucideIcon,
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
import { GradientMesh } from "@/components/GradientMesh";
import { GridPattern } from "@/components/GridPattern";

export const metadata: Metadata = {
    title: "Services & Pricing | Frantiva Technologies",
    description: "Comprehensive software and digital solutions for modern businesses. From intelligent AI agents to custom web applications, with transparent pricing and real ROI.",
};

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface WebsiteFeature {
    icon: LucideIcon;
    text: string;
}

interface WebsiteType {
    id: string;
    title: string;
    subtitle: string;
    purpose: string;
    whoItsFor: string;
    priceRange: string;
    features: WebsiteFeature[];
    highlighted?: boolean;
}

interface AdditionalService {
    service: string;
    description: string;
    price: string;
}

interface PricingFactor {
    title: string;
    description: string;
}

interface FAQ {
    question: string;
    answer: string;
}

// ============================================================================
// WEBSITE TYPES DATA
// ============================================================================

const websiteTypes: WebsiteType[] = [
    {
        id: "ai-agents",
        title: "AI Agents & Automation",
        subtitle: "Smart Solutions",
        purpose: "Automate workflows and enhance customer experience with custom-trained AI agents.",
        whoItsFor: "Forward-thinking businesses, customer support teams, e-commerce brands",
        priceRange: "$1,500 - $8,000+",
        features: [
            { icon: MessageCircle, text: "Customer Support Chatbots (min. $1,500)" },
            { icon: Users, text: "Sales & Lead Gen Agents (min. $2,000)" },
            { icon: Workflow, text: "Internal Workflow Automation (min. $2,500)" },
            { icon: ShoppingCart, text: "AI E-Commerce Assistants (min. $1,800)" },
            { icon: Zap, text: "Custom LLM Integrations (min. $3,000)" },
        ],
        highlighted: false,
    },
    {
        id: "basic-business",
        title: "Basic Business Website",
        subtitle: "Online Presence",
        purpose: "Get discovered online and build instant credibility for your business.",
        whoItsFor: "Small businesses, professionals, consultants, service providers",
        priceRange: "$150 - $500",
        features: [
            { icon: FileText, text: "3-10 professional pages (Home, About, Services, Contact)" },
            { icon: Globe, text: "Mobile-friendly & responsive design" },
            { icon: Mail, text: "Contact form & basic SEO setup" },
            { icon: Briefcase, text: "Basic branding & content management" },
            { icon: FileText, text: "Optional blog/news section" },
        ],
        highlighted: false,
    },
    {
        id: "professional-corporate",
        title: "Professional Corporate Website",
        subtitle: "Brand Authority",
        purpose: "Establish a powerful online brand for larger businesses and institutions.",
        whoItsFor: "SMEs, schools, corporate companies, established brands",
        priceRange: "$300 - $1,000",
        features: [
            { icon: Building2, text: "7-15+ pages (Services, Team, Portfolio, FAQ, etc.)" },
            { icon: Zap, text: "Custom design tailored to your brand identity" },
            { icon: BarChart3, text: "On-page SEO & Google Analytics integration" },
            { icon: Users, text: "Social media links & integration" },
            { icon: Mail, text: "Lead generation forms & newsletter signup" },
        ],
        highlighted: true,
    },
    {
        id: "ecommerce",
        title: "E-Commerce Store",
        subtitle: "Online Sales",
        purpose: "Sell products 24/7 and accept payments online with full inventory control.",
        whoItsFor: "Retail stores, wholesalers, digital product sellers",
        priceRange: "$1,000 - $5,000/yr",
        features: [
            { icon: ShoppingCart, text: "Product catalogue & detailed product pages" },
            { icon: CreditCard, text: "Payment gateway integration (PayPal/Stripe/Paynow)" },
            { icon: Briefcase, text: "Inventory management & order alerts" },
            { icon: MapPin, text: "Shipping & tax calculation options" },
            { icon: Shield, text: "Secure checkout & SSL encryption" },
        ],
        highlighted: false,
    },
    {
        id: "portfolio",
        title: "Portfolio / Personal Website",
        subtitle: "Showcase Work",
        purpose: "Display your creative work beautifully and attract premium clients.",
        whoItsFor: "Designers, artists, photographers, freelancers",
        priceRange: "$150 - $500",
        features: [
            { icon: Image, text: "Visual gallery with portfolio templates" },
            { icon: Users, text: "About & contact pages with professional bio" },
            { icon: Globe, text: "Mobile-friendly & stylish modern layouts" },
            { icon: MessageCircle, text: "Social media showcase & integration" },
            { icon: Mail, text: "Contact form for client inquiries" },
        ],
        highlighted: false,
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        subtitle: "Design & Prototyping",
        purpose: "User-centric design solutions to validate ideas before development.",
        whoItsFor: "Startups, product teams, established businesses",
        priceRange: "$300 - $1,500",
        features: [
            { icon: Users, text: "User research & persona development" },
            { icon: Workflow, text: "Wireframing & user flow mapping" },
            { icon: Image, text: "High-fidelity UI design & prototyping" },
            { icon: Zap, text: "Interactive prototypes for testing" },
            { icon: FileText, text: "Design system creation & handover" },
        ],
        highlighted: false,
    },
    {
        id: "landing-page",
        title: "Landing Page",
        subtitle: "Lead Generation",
        purpose: "Laser-focused single page to capture leads or promote a campaign.",
        whoItsFor: "Product launches, events, marketing campaigns, promotions",
        priceRange: "$50 - $300",
        features: [
            { icon: FileText, text: "Single scrolling page with focused messaging" },
            { icon: Zap, text: "Strong call-to-action & conversion optimization" },
            { icon: Mail, text: "Lead capture forms & email integration" },
            { icon: BarChart3, text: "Analytics tracking for campaign performance" },
            { icon: Globe, text: "Fast loading & mobile optimized" },
        ],
        highlighted: false,
    },
    {
        id: "custom-web-app",
        title: "Custom Web Application",
        subtitle: "Advanced Solutions",
        purpose: "Build powerful custom platforms with user accounts, dashboards, and automation.",
        whoItsFor: "Booking systems, SaaS platforms, client portals, membership sites",
        priceRange: "$2,000 - $10,000+",
        features: [
            { icon: Users, text: "User registration, login & account management" },
            { icon: BarChart3, text: "Custom dashboards & data visualization" },
            { icon: Workflow, text: "Complex workflows (bookings, subscriptions, approvals)" },
            { icon: Zap, text: "API integrations & advanced backend systems" },
            { icon: Shield, text: "Enterprise-grade security & scalability" },
        ],
        highlighted: false,
    },
    {
        id: "mobile-app",
        title: "Mobile App Development",
        subtitle: "iOS & Android",
        purpose: "Native-quality mobile applications to reach your customers on their devices.",
        whoItsFor: "Startups, businesses expanding to mobile, on-demand services",
        priceRange: "$1,000 - $10,000+",
        features: [
            { icon: Globe, text: "Cross-platform mobile development" },
            { icon: Zap, text: "High-performance native experience" },
            { icon: MessageCircle, text: "Push notifications & offline capabilities" },
            { icon: Shield, text: "App Store & Google Play deployment" },
            { icon: Cloud, text: "Scalable cloud backend integration" },
        ],
        highlighted: true,
    },
    {
        id: "blog-content",
        title: "Blog / Content Website",
        subtitle: "Publishing Platform",
        purpose: "Publish articles, news, and updates regularly with ease.",
        whoItsFor: "News sites, bloggers, content creators, reviewers",
        priceRange: "$150 - $600",
        features: [
            { icon: FileText, text: "User-friendly CMS for easy content posting" },
            { icon: Briefcase, text: "Categories, tags & author pages" },
            { icon: MessageCircle, text: "Commenting system & community engagement" },
            { icon: Users, text: "Social sharing & newsletter integration" },
            { icon: BarChart3, text: "SEO optimized for content discovery" },
        ],
    },
];

// ============================================================================
// ADDITIONAL SERVICES
// ============================================================================

const additionalServices: AdditionalService[] = [
    {
        service: "Domain Registration",
        description: ".com, .co.zw, or other domain extensions",
        price: "$6 - $30/year",
    },
    {
        service: "Web Hosting",
        description: "Shared or VPS hosting with 99.9% uptime",
        price: "$80 - $300/year",
    },
    {
        service: "Website Maintenance",
        description: "Regular updates, backups, security patches & support",
        price: "$30 - $100+/month",
    },
];

// ============================================================================
// PRICING FACTORS
// ============================================================================

const pricingFactors: PricingFactor[] = [
    {
        title: "Complexity of Logic",
        description: "Simple informational pages cost less than interactive systems with user logins, payment processing, or automated workflows.",
    },
    {
        title: "Number of Pages",
        description: "Each additional page requires design work, content creation, mobile optimization, and thorough testing.",
    },
    {
        title: "Third-Party Integrations",
        description: "Connecting payment gateways, email marketing platforms, booking systems, or external APIs requires specialized development.",
    },
    {
        title: "Custom Features",
        description: "Unique functionality built specifically for your business needs requires additional planning, development, and testing time.",
    },
];

// ============================================================================
// FAQS
// ============================================================================

const faqs: FAQ[] = [
    {
        question: "Why are domain and hosting costs separate?",
        answer: "To ensure you own 100% of your digital assets. When you pay for domain and hosting separately, you maintain full ownership and control. Domain registration starts at $6/year for .com domains, and reliable hosting ranges from $80-$300/year. This prevents vendor lock-in and gives you complete freedom.",
    },
    {
        question: "Can I upgrade my website later?",
        answer: "Absolutely! We build all our websites with scalability in mind. Start with a Basic Business Website and upgrade to E-Commerce or a Custom Web Application as your business grows. We'll migrate your existing content and design seamlessly.",
    },
    {
        question: "What's included in website maintenance?",
        answer: "Our maintenance packages include regular software updates, security patches, daily backups, performance monitoring, uptime tracking, and priority technical support. Plans start at $30/month for basic sites and scale based on complexity.",
    },

    {
        question: "How long does it take to build a website?",
        answer: "Timeline depends on complexity: Basic Business Websites take 1-2 weeks, Professional Corporate sites need 3-4 weeks, E-Commerce stores require 4-8 weeks, and Custom Web Applications typically take 6-12 weeks. We'll provide a detailed timeline during consultation.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfers, mobile money (EcoCash, OneMoney), USD cash, and Paynow. For larger projects, we offer flexible payment plans with milestones: 50% upfront, 25% at midpoint, and 25% upon completion.",
    },
    {
        question: "Will my website work on mobile phones?",
        answer: "Yes! Every website we build is fully responsive and mobile-optimized. With over 80% of Zimbabweans accessing the internet via mobile, we ensure your site looks great and functions smoothly on all devices and screen sizes.",
    },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden min-h-[60vh] flex flex-col justify-center">
                <GradientMesh />
                <GridPattern />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_hsl(var(--background))_80%)]" aria-hidden="true" />
                <div className="mx-auto max-w-6xl px-6 text-center relative z-10">
                    <p className="mb-4 text-sm font-medium text-brand tracking-widest uppercase">
                        Types of Websites You Can Build
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance mb-6">
                        Professional Websites for{" "}
                        <span className="hero-gradient-text block mt-2">Zimbabwean Businesses</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed mb-10">
                        Transparent pricing, comprehensive features, and websites built to deliver real business results.
                        From simple landing pages to complex web applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 rounded-full px-8 text-base font-medium gap-2 bg-brand text-brand-foreground hover:bg-brand/90 hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] transition-all duration-300" asChild>
                            <Link href="/contact">
                                Get a Free Quote
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 rounded-full px-8 text-base font-medium border-border/50 hover:border-brand/40 hover:bg-brand/5 transition-all duration-300" asChild>
                            <Link href="#website-types">Browse Website Types</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-4 bg-brand text-brand-foreground">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <p className="text-sm md:text-base font-medium">
                        <strong>Own Your Digital Assets:</strong> Domain registration ($6-$30/year) and web hosting ($80-$300/year) are billed separately to ensure you maintain 100% ownership of your website.
                    </p>
                </div>
            </section>

            {/* Website Types Section */}
            <section id="website-types" className="py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <p className="mb-3 text-sm font-medium text-muted-foreground tracking-widest uppercase">
                            Our packages
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Choose the Right Website Type
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Every business has unique needs. Select the website type that matches your goals and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {websiteTypes.map((type) => (
                            <div
                                key={type.id}
                                className={`glass-card gradient-border relative flex flex-col rounded-2xl ${type.highlighted
                                    ? "ring-2 ring-brand ring-offset-2 ring-offset-background"
                                    : ""
                                    }`}
                            >
                                {type.highlighted && (
                                    <div className="absolute top-0 right-0 left-0 -translate-y-1/2 flex justify-center z-10">
                                        <span className="bg-brand text-brand-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium mb-3">
                                        {type.subtitle}
                                    </span>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{type.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {type.purpose}
                                    </p>
                                    <div className="pt-4 border-t border-border/50 mb-4">
                                        <div className="text-2xl font-bold text-brand mb-1">{type.priceRange}</div>
                                        <div className="text-xs text-muted-foreground">Perfect for: {type.whoItsFor}</div>
                                    </div>
                                </div>
                                <div className="px-6 flex-1">
                                    <div className="mb-4">
                                        <h4 className="text-xs font-semibold uppercase tracking-wide text-brand">Main Features</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {type.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm">
                                                <feature.icon className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                                                <span className="text-muted-foreground leading-snug">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 pt-6 mt-auto">
                                    <Button
                                        className={`w-full rounded-full ${type.highlighted ? "bg-brand text-brand-foreground hover:bg-brand/90" : "border-border/50 hover:bg-brand/5"}`}
                                        variant={type.highlighted ? "default" : "outline"}
                                        asChild
                                    >
                                        <Link href="/contact">Get Started</Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services Section */}
            <section className="py-24 md:py-32 border-t border-border">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <p className="mb-3 text-sm font-medium text-muted-foreground tracking-widest uppercase">
                            Add-ons
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Additional Services You Can Bundle
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Complete your digital presence with these essential add-on services. Great for maximizing your website's potential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalServices.map((service, idx) => (
                            <Card key={idx} className="border-border hover:border-brand/40 transition-colors duration-300">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-start justify-between gap-2">
                                        <span>{service.service}</span>
                                        <Badge variant="secondary" className="shrink-0 text-xs">
                                            {service.price}
                                        </Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button size="lg" className="h-12 rounded-full px-8 text-base font-medium gap-2 bg-brand text-brand-foreground hover:bg-brand/90" asChild>
                            <Link href="/contact">
                                Build Your Custom Package
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Pricing Factors Section */}
            <section className="py-24 md:py-32 border-t border-border">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <p className="mb-3 text-sm font-medium text-muted-foreground tracking-widest uppercase">
                                Transparency
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
                                What Influences the Price?
                            </h2>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Transparent pricing starts with understanding what goes into building your website.
                                Here is what we consider when quoting your project.
                            </p>
                            <Button variant="outline" size="lg" className="h-12 rounded-full px-8 text-base font-medium" asChild>
                                <Link href="/contact">Get Detailed Quote</Link>
                            </Button>
                        </div>
                        <div className="space-y-6">
                            {pricingFactors.map((factor, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-secondary flex items-center justify-center text-brand">
                                        <Zap className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">{factor.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
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
            <section className="py-24 md:py-32 border-t border-border">
                <div className="mx-auto max-w-3xl px-6">
                    <div className="text-center mb-14">
                        <p className="mb-3 text-sm font-medium text-muted-foreground tracking-widest uppercase">
                            FAQ
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            Everything you need to know about our website development services and pricing.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="bg-card border border-border rounded-xl px-6 hover:border-brand/40 transition-colors data-[state=open]:border-brand/40"
                            >
                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 text-foreground">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Tips Section */}
            <section className="py-24 md:py-32 border-t border-border bg-card">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-14">
                        <p className="mb-3 text-sm font-medium text-muted-foreground tracking-widest uppercase">
                            Getting started
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Tips for Choosing Your Package
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Display Clear Packages",
                                desc: "Choose from Basic, Business, E-Commerce, or Enterprise packages with all inclusions clearly listed. Final cost depends on your specific features & customization needs.",
                            },
                            {
                                title: "Show Starting Prices",
                                desc: "All prices shown are starting ranges. Your final quote depends on features, customization, and add-ons you select during consultation.",
                            },
                        ].map((tip) => (
                            <div
                                key={tip.title}
                                className="rounded-2xl border border-border bg-background p-6 md:p-8"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 shrink-0 mt-0.5">
                                        <Check className="h-3.5 w-3.5 text-brand" />
                                    </div>
                                    <h3 className="text-base font-semibold text-foreground">{tip.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed pl-9">
                                    {tip.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 md:py-32 border-t border-border">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                            Ready to Build Your Website?
                        </h2>
                        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                            Get a free consultation and detailed quote. We will help you choose the perfect package and customization options for your business needs.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="h-12 rounded-full px-8 text-base font-medium gap-2 bg-brand text-brand-foreground hover:bg-brand/90" asChild>
                                <Link href="/contact">
                                    Get Free Consultation
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 rounded-full px-8 text-base font-medium" asChild>
                                <Link href="#website-types">View All Packages</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
