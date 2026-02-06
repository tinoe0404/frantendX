<<<<<<< HEAD
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

export const metadata: Metadata = {
    title: "Services & Pricing | FrantendX Digital Solutions",
    description: "Comprehensive website solutions for Zimbabwean businesses. From basic business sites to custom web applications, with transparent pricing and real ROI.",
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
        id: "blog-content",
        title: "Blog / Content Website",
        subtitle: "Publishing Platform",
        purpose: "Publish articles, news, and updates regularly with ease.",
        whoItsFor: "News sites, bloggers, content creators, reviewers",
        priceRange: "$150 - $600",
        features: [
            { icon: FileText, text: "CMS (WordPress or similar) for easy content posting" },
            { icon: Briefcase, text: "Categories, tags & author pages" },
            { icon: MessageCircle, text: "Commenting system & community engagement" },
            { icon: Users, text: "Social sharing & newsletter integration" },
            { icon: BarChart3, text: "SEO optimized for content discovery" },
        ],
        highlighted: false,
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
        service: "SSL Security Certificate",
        description: "HTTPS security for data protection",
        price: "Included or $10 - $50/year",
    },
    {
        service: "SEO Setup & Optimization",
        description: "On-page SEO, keyword research, search optimization",
        price: "$50 - $300+",
    },
    {
        service: "Website Maintenance",
        description: "Regular updates, backups, security patches & support",
        price: "$30 - $100+/month",
    },
    {
        service: "Content Creation",
        description: "Professional copywriting & media production",
        price: "$50 - $300+/page",
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
        question: "Do you provide content and images?",
        answer: "We offer content creation services starting at $50/page for professional copywriting. For images, we can source high-quality stock photos or arrange professional photography. Many clients provide their own content and images, which helps reduce costs.",
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
        answer: "Yes! Every website we build is fully responsive and mobile-optimized. With over 80% of Zimbabweans accessing the internet via mobile, we ensure your site looks perfect and functions smoothly on all devices and screen sizes.",
    },
    {
        question: "Do you offer training on how to update my website?",
        answer: "Yes! For websites with content management systems (CMS), we provide comprehensive training on how to add pages, update content, post news, and manage your site. We also create custom video tutorials specific to your website.",
    },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
                <div className="container px-4 md:px-8 mx-auto text-center relative z-10">
                    <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-blue-300 text-blue-700 bg-blue-50">
                        💻 Types of Websites You Can Build
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                        Professional Websites for <span className="text-blue-600">Zimbabwean Businesses</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
                        Transparent pricing, comprehensive features, and websites built to deliver real business results.
                        From simple landing pages to complex web applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700" asChild>
                            <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-blue-300 text-blue-700 hover:bg-blue-50" asChild>
                            <Link href="#website-types">Browse Website Types</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-6 bg-blue-600 text-white">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <p className="text-sm md:text-base font-medium">
                        💡 <strong>Own Your Digital Assets:</strong> Domain registration ($6-$30/year) and web hosting ($80-$300/year) are billed separately to ensure you maintain 100% ownership of your website.
                    </p>
                </div>
            </section>

            {/* Website Types Section */}
            <section id="website-types" className="py-20 bg-slate-50">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Choose the Right Website Type</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Every business has unique needs. Select the website type that matches your goals and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {websiteTypes.map((type) => (
                            <Card
                                key={type.id}
                                className={`flex flex-col transition-all duration-300 hover:shadow-lg ${type.highlighted
                                        ? 'border-blue-500 shadow-xl relative ring-2 ring-blue-500 bg-white'
                                        : 'border-border bg-white hover:border-blue-300'
                                    }`}
                            >
                                {type.highlighted && (
                                    <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <CardHeader>
                                    <Badge variant="secondary" className="w-fit mb-2 text-xs bg-blue-50 text-blue-700 border-blue-200">
                                        {type.subtitle}
                                    </Badge>
                                    <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                                    <CardDescription className="text-sm text-muted-foreground mb-3">
                                        {type.purpose}
                                    </CardDescription>
                                    <div className="pt-3 border-t border-border/50">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">{type.priceRange}</div>
                                        <div className="text-xs text-muted-foreground">Perfect for: {type.whoItsFor}</div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="space-y-1 mb-4">
                                        <h4 className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-2">Main Features</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {type.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm">
                                                <feature.icon className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                                                <span className="text-muted-foreground leading-snug">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-6">
                                    <Button
                                        className={`w-full ${type.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                                        variant={type.highlighted ? "default" : "outline"}
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

            {/* Additional Services Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-8 mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">🧩 Additional Services You Can Bundle</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Complete your digital presence with these essential add-on services. Great for maximizing your website's potential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalServices.map((service, idx) => (
                            <Card key={idx} className="bg-slate-50 border-border hover:border-blue-300 transition-colors duration-300">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-start justify-between gap-2">
                                        <span>{service.service}</span>
                                        <Badge variant="outline" className="text-blue-700 border-blue-300 bg-blue-50 shrink-0">
                                            {service.price}
                                        </Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                            <Link href="/contact">Build Your Custom Package</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Pricing Factors Section */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-8 mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">What Influences the Price?</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Transparent pricing starts with understanding what goes into building your website.
                                Here's what we consider when quoting your project.
                            </p>
                            <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50" asChild>
                                <Link href="/contact">Get Detailed Quote</Link>
                            </Button>
                        </div>
                        <div className="space-y-6">
                            {pricingFactors.map((factor, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Zap className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">{factor.title}</h4>
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
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-8 mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">
                            Everything you need to know about our website development services and pricing.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="bg-slate-50 border border-border rounded-lg px-6 hover:border-blue-300 transition-colors"
                            >
                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Tips Section */}
            <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="container px-4 md:px-8 mx-auto max-w-5xl">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">🧠 Tips for Choosing Your Package</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-slate-700/50 border-slate-600 text-white">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-start gap-2">
                                    <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                                    <span>Display Clear Packages</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-slate-300">
                                    Choose from Basic, Business, E-Commerce, or Enterprise packages with all inclusions clearly listed. Final cost depends on your specific features & customization needs.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-700/50 border-slate-600 text-white">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-start gap-2">
                                    <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                                    <span>Show Starting Prices</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-slate-300">
                                    All prices shown are starting ranges. Your final quote depends on features, customization, and add-ons you select during consultation.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-700/50 border-slate-600 text-white">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-start gap-2">
                                    <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                                    <span>Add Value-Added Services</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-slate-300">
                                    Maximize your investment with SEO, analytics setup, maintenance plans, and ongoing support contracts tailored to your business.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-700/50 border-slate-600 text-white">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-start gap-2">
                                    <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                                    <span>View Real Examples</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-slate-300">
                                    Check our portfolio to see what each package type looks like in action. Real client examples help you visualize your own project.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Ready to Build Your Website?
                    </h2>
                    <p className="max-w-2xl mx-auto text-blue-100 text-xl mb-10">
                        Get a free consultation and detailed quote. We'll help you choose the perfect package and customization options for your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50" asChild>
                            <Link href="/contact">Get Free Consultation →</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-semibold border-2 border-white text-white hover:bg-white/10" asChild>
                            <Link href="#website-types">View All Packages</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
=======
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
  title: "Services & Pricing",
  description: "ROI-focused digital solutions for businesses. Clear pricing, real results, and systems that pay for themselves.",
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
      { icon: MessageCircle, text: "Direct WhatsApp Chat Button" },
      { icon: MapPin, text: "Google Maps Integration" },
      { icon: Mail, text: "Professional Email Setup" },
    ],
    roi: "Turn casual browsers into WhatsApp leads.",
    highlighted: false,
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
      { icon: Users, text: "Admin Dashboard for content management" },
      { icon: Zap, text: "SEO Optimization for local search" },
      { icon: CalendarDays, text: "1 Month Free Maintenance" },
    ],
    roi: "Build institutional trust and cut management costs.",
    highlighted: true,
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
      { icon: CreditCard, text: "Local Payments: Paynow / Ecocash / Visa" },
      { icon: Briefcase, text: "Inventory Management System" },
      { icon: MessageCircle, text: "Automated Order Alerts" },
    ],
    roi: "Make sales while you sleep.",
    highlighted: false,
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
      { icon: Users, text: "User Portals (Client / Admin)" },
      { icon: Zap, text: "Real-time Data & Dashboards" },
      { icon: Briefcase, text: "Workflow Automation" },
    ],
    roi: "Automate operations and scale without chaos.",
    highlighted: false,
  },
];

const pricingFactors = [
  { title: "Complexity of Logic", description: "Simple text pages cost less than systems with user logins, payments, or automation." },
  { title: "Number of Pages", description: "More pages require more design work, content, and testing." },
  { title: "Third-Party Integrations", description: "Connecting to payment gateways, email systems, or external APIs adds development time." },
  { title: "Custom Features", description: "Unique functionality built specifically for your business requires additional planning." },
];

const faqs = [
  { question: "Why is hosting separate?", answer: "So you retain 100% ownership of your domain and data. We don't lock you in. Domain registration starts at $5, and secure cloud hosting is $10/month." },
  { question: "Can I upgrade later?", answer: "Yes! Our systems are built to scale. Start with The Digital Presence and upgrade when your business grows." },
  { question: "What if I need changes after launch?", answer: "The Authority Builder includes 1 month of free maintenance. For other packages, we offer affordable maintenance plans or train you to make simple updates yourself." },
  { question: "How long does it take?", answer: "The Digital Presence typically takes 1-2 weeks. The Authority Builder takes 3-4 weeks. E-commerce and Custom Systems can take 6-12 weeks depending on complexity." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Badge variant="outline" className="mb-5 px-4 py-1 text-sm">
            Real Business Solutions. Real ROI.
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6 text-balance">
            {"Don't just build a website. Build a profit engine."}
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-10 leading-relaxed">
            Clear pricing, real business solutions, and systems that pay for themselves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 rounded-full px-8 text-base font-medium" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full px-8 text-base font-medium" asChild>
              <Link href="#packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hosting Note */}
      <section className="py-4 border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Own Your Digital Assets:</strong>{" "}
            Domain Registration (from $5) and Secure Cloud Hosting ($10/month) are billed separately so you retain full ownership.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Choose Your Growth Path</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every package solves a real business problem. Choose the one that matches where you are now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`flex flex-col bg-card ${
                  pkg.highlighted ? "border-foreground ring-1 ring-foreground" : "border-border"
                }`}
              >
                {pkg.highlighted && (
                  <div className="flex justify-center -mt-3">
                    <span className="bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2 text-xs">
                    {pkg.subtitle}
                  </Badge>
                  <CardTitle className="text-lg">{pkg.title}</CardTitle>
                  <CardDescription className="mt-1 text-sm italic">
                    {`"${pkg.description}"`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-5">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{pkg.priceRange}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">For {pkg.whoItsFor}</div>
                  </div>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <feature.icon className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-border">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">ROI</div>
                    <p className="text-sm font-medium text-foreground">{pkg.roi}</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    className={`w-full rounded-full ${pkg.highlighted ? "" : ""}`}
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
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">What Drives the Cost?</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {"Not all websites are equal. Here's what influences your investment."}
              </p>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="space-y-6">
              {pricingFactors.map((factor) => (
                <div key={factor.title} className="flex gap-4">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-secondary flex items-center justify-center text-foreground">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{factor.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our pricing and process.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-xl px-5 bg-card">
                <AccordionTrigger className="text-left font-medium hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Ready to build your profit engine?
          </h2>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
            Get a free consultation and a detailed project proposal. No obligation, just expert advice.
          </p>
          <Button size="lg" className="h-12 rounded-full px-10 text-base font-medium" asChild>
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
>>>>>>> 62cf8bf86d3dc97c9bfa4d4a39e9b695cd62ae6d
