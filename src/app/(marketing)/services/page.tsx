import Link from "next/link";
import {
    Check,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { buildPageMetadata, buildBreadcrumbs, buildFaqSchema } from "@/lib/seo";

interface WebsiteFeature {
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

const websiteTypes: WebsiteType[] = [
    {
        id: "ai-agents",
        title: "AI agents & automation",
        subtitle: "Smart Solutions",
        purpose: "Automate complex workflows and customer operations with custom-trained AI agents.",
        whoItsFor: "Forward-thinking enterprises, operations teams, support departments",
        priceRange: "$1,500 - $8,000+",
        features: [
            { text: "Customer Support & Concierge Agents" },
            { text: "Sales & Lead Generation Agents" },
            { text: "Internal Workflow & Data Automation" },
            { text: "WhatsApp & EcoCash Native Integrations" },
            { text: "Custom LLM & Domain RAG Pipelines" },
        ],
        highlighted: true,
    },
    {
        id: "basic-business",
        title: "Basic business website",
        subtitle: "Online Presence",
        purpose: "Establish a fast, professional online presence with instant brand credibility.",
        whoItsFor: "Small businesses, consultants, professionals, service providers",
        priceRange: "$150 - $500",
        features: [
            { text: "3-10 high-performance responsive pages" },
            { text: "Mobile-first, ultra-fast loading speed" },
            { text: "Lead capture & inquiry form integration" },
            { text: "Core SEO & Google Search Console setup" },
            { text: "Content management handover" },
        ],
        highlighted: false,
    },
    {
        id: "professional-corporate",
        title: "Corporate website platform",
        subtitle: "Brand Authority",
        purpose: "Establish a powerful, authoritative digital presence for growing companies.",
        whoItsFor: "SMEs, educational institutions, corporate entities, established brands",
        priceRange: "$300 - $1,000",
        features: [
            { text: "7-15+ structured enterprise pages" },
            { text: "Custom brand design & design system" },
            { text: "Advanced on-page SEO & analytics integration" },
            { text: "Multi-department contact & inquiry routing" },
            { text: "Team, services, and corporate governance portals" },
        ],
        highlighted: false,
    },
    {
        id: "ecommerce",
        title: "E-commerce store engine",
        subtitle: "Digital Commerce",
        purpose: "Sell products around the clock with secure automated payment gateways.",
        whoItsFor: "Retail brands, wholesalers, direct-to-consumer businesses",
        priceRange: "$1,000 - $5,000",
        features: [
            { text: "Complete product catalogue & inventory tracking" },
            { text: "Stripe, Paynow, EcoCash & PayPal integration" },
            { text: "Automated order alerts & invoice generation" },
            { text: "Dynamic shipping calculation & tracking" },
            { text: "Defensive encryption & SSL security compliance" },
        ],
        highlighted: false,
    },
    {
        id: "custom-web-app",
        title: "Custom web application",
        subtitle: "Advanced Software",
        purpose: "Build bespoke operational software with user accounts, dashboards, and role permissions.",
        whoItsFor: "SaaS startups, booking platforms, portals, enterprise operations",
        priceRange: "$2,000 - $10,000+",
        features: [
            { text: "Authentication, RBAC & multi-tenant architecture" },
            { text: "Real-time interactive analytics dashboards" },
            { text: "Complex deterministic workflow engines" },
            { text: "Third-party API & webhook integrations" },
            { text: "Enterprise audit logging & failover resilience" },
        ],
        highlighted: true,
    },
    {
        id: "mobile-app",
        title: "Mobile app development",
        subtitle: "iOS & Android",
        purpose: "Native-grade cross-platform mobile experiences reaching users on their devices.",
        whoItsFor: "Product companies, logistics dispatch, customer on-demand apps",
        priceRange: "$1,500 - $10,000+",
        features: [
            { text: "High-performance React Native architecture" },
            { text: "Offline-first sync & push notifications" },
            { text: "App Store & Google Play store submission" },
            { text: "Mobile money & device hardware API access" },
            { text: "Scalable cloud backend synchronization" },
        ],
        highlighted: false,
    },
];

const additionalServices: AdditionalService[] = [
    {
        service: "Domain registration",
        description: ".com, .co.zw, and international extensions registered in your name.",
        price: "$6 - $30/yr",
    },
    {
        service: "Enterprise cloud hosting",
        description: "High-speed NVMe hosting with 99.9% uptime SLA, CDN, and SSL.",
        price: "$80 - $300/yr",
    },
    {
        service: "Continuous system maintenance",
        description: "Proactive security patching, daily backups, and SLA support.",
        price: "$30 - $100+/mo",
    },
];

const pricingFactors: PricingFactor[] = [
    {
        title: "System complexity",
        description: "Informational pages require fewer development hours than applications with user sessions, complex database schemas, and background job queues.",
    },
    {
        title: "Scope & scale",
        description: "The volume of bespoke layouts, responsive templates, and custom interactions directly dictates planning, development, and QA testing time.",
    },
    {
        title: "API integrations",
        description: "Connecting payment providers, CRM pipelines, legacy ERPs, or custom LLM endpoints requires specialized security engineering.",
    },
    {
        title: "Compliance & security",
        description: "Regulated industry requirements like HIPAA, GDPR, financial PCI DSS, and granular audit trail generation require defensive architectural hardening.",
    },
];

const faqs: FAQ[] = [
    {
        question: "Why are domain and hosting costs billed separately?",
        answer: "To guarantee you maintain 100% legal ownership of your digital assets. By keeping infrastructure accounts in your name, you avoid vendor lock-in and retain full freedom over your domains and codebases at all times.",
    },
    {
        question: "Can we start small and scale our platform later?",
        answer: "Yes. Every architecture we design is built with forward compatibility in mind. You can start with a core business website and seamlessly introduce e-commerce, custom customer portals, or autonomous AI agents as your operations grow.",
    },
    {
        question: "What does ongoing system maintenance include?",
        answer: "Our maintenance plans include automated daily backups, dependencies and framework security updates, performance monitoring, uptime alerting, and direct technical support from our engineering team.",
    },
    {
        question: "What is the typical delivery timeline?",
        answer: "Standard business websites typically take 1–3 weeks, corporate platforms require 3–4 weeks, and bespoke applications or AI pipelines range between 4–10 weeks based on scope. We provide milestone schedules with every proposal.",
    },
    {
        question: "What payment methods and milestones do you support?",
        answer: "We accept bank transfers, mobile money (EcoCash, OneMoney), USD cash, and Paynow. For larger engineering projects, we structure payments in phased milestone tranches (e.g. 50% initial, 25% midpoint, 25% production sign-off).",
    },
    {
        question: "Are all solutions mobile-optimized and responsive?",
        answer: "Yes. Every system we deliver is tested across mobile, tablet, and desktop viewports, with special optimization for variable network bandwidth and mobile device performance.",
    },
];

export const metadata = buildPageMetadata({
  title: "Services & pricing",
  description:
    "Explore Frantiva Technologies software development packages and transparent pricing. From AI agents and custom web apps to mobile apps and e-commerce, with services starting at $150.",
  path: "/services",
  ogTitle: "Services & Pricing — Frantiva Technologies",
  ogDescription:
    "AI agents, custom web apps, mobile apps, e-commerce, and enterprise software. Transparent pricing from $150. Based in Harare, Zimbabwe.",
});

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Services & Pricing", path: "/services" },
]);

const faqSchema = buildFaqSchema(faqs);

export default function ServicesPage() {
    return (
        <div className="py-20 md:py-32">
            {/* Structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="mx-auto max-w-[1200px] px-6">
                
                {/* Hero */}
                <section className="mb-20 md:mb-28">
                    <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
                        <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
                        <span>01 · CAPABILITIES &amp; PRICING</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-6 max-w-4xl leading-[1.04]">
                        Predictable pricing.
                        <br />
                        <span className="text-[#D4693A]">Engineered to scale.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-[#5F5A55] dark:text-[#A09A93] leading-relaxed max-w-[56ch] [text-wrap:pretty] mb-10">
                        Transparent project tiers, defensive software engineering, and systems built to drive real commercial ROI.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Button
                            size="lg"
                            className="h-12 px-8 rounded-full text-sm font-semibold bg-[#D4693A] text-white hover:bg-[#c35c30] transition-colors shadow-sm"
                            asChild
                        >
                            <Link href="/contact" className="inline-flex items-center gap-2">
                                <span>Get a custom quote</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Link
                            href="#packages"
                            className="text-sm font-medium text-[#5F5A55] dark:text-[#A09A93] hover:text-[#141210] dark:hover:text-[#FAF7F4] transition-colors py-2 px-3 inline-flex items-center gap-1 group"
                        >
                            <span>Browse packages</span>
                            <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
                        </Link>
                    </div>
                </section>

                {/* Ownership Notice */}
                <div className="mb-20 rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <span className="font-headline font-bold text-base tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] block mb-1">
                            100% asset ownership guarantee
                        </span>
                        <p className="text-sm text-[#5F5A55] dark:text-[#A09A93] max-w-[56ch] [text-wrap:pretty]">
                            Domain registration and dedicated hosting are provisioned in your name so your enterprise retains absolute control over its code and data.
                        </p>
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4693A] shrink-0">
                        Zero vendor lock-in
                    </span>
                </div>

                {/* Packages Section */}
                <section id="packages" className="mb-24 md:mb-32">
                    <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
                        <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
                        <span>02 · ENGINEERING PACKAGES</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
                        Choose the right architecture.
                    </h2>
                    <p className="text-base sm:text-lg text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-14 max-w-[56ch] [text-wrap:pretty]">
                        Every organization has distinct requirements. Select the tier that aligns with your business goals.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
                        {websiteTypes.map((type) => (
                            <div
                                key={type.id}
                                className={`rounded-[24px] border bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 flex flex-col justify-between transition-colors duration-200 ${
                                    type.highlighted
                                        ? "border-[#D4693A] ring-1 ring-[#D4693A]"
                                        : "border-[#EAE4DE] dark:border-[#2B2724] hover:border-[#D4693A]/50"
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono uppercase tracking-wider text-[#5F5A55] dark:text-[#A09A93]">
                                            {type.subtitle}
                                        </span>
                                        {type.highlighted && (
                                            <span className="bg-[#D4693A] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold tracking-[-0.005em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-2">
                                        {type.title}
                                    </h3>

                                    <p className="text-sm text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-6 max-w-[56ch] [text-wrap:pretty]">
                                        {type.purpose}
                                    </p>

                                    <div className="pb-6 mb-6 border-b border-[#EAE4DE] dark:border-[#2B2724]">
                                        <span className="text-3xl font-bold font-headline tracking-[-0.02em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] block mb-1">
                                            {type.priceRange}
                                        </span>
                                        <span className="text-xs text-[#5F5A55] dark:text-[#A09A93]">
                                            Target: {type.whoItsFor}
                                        </span>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {type.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-[#5F5A55] dark:text-[#A09A93]">
                                                <Check className="h-4 w-4 text-[#D4693A] mt-0.5 shrink-0" />
                                                <span className="leading-snug">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        className={`w-full rounded-full h-11 text-sm font-semibold transition-colors ${
                                            type.highlighted
                                                ? "bg-[#D4693A] text-white hover:bg-[#c35c30]"
                                                : "bg-[#FAF7F4] dark:bg-[#2B2724] text-[#141210] dark:text-[#FAF7F4] border border-[#EAE4DE] dark:border-[#2B2724] hover:bg-[#EAE4DE]/60"
                                        }`}
                                        asChild
                                    >
                                        <Link href="/contact">Get started</Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional Services */}
                <section className="mb-24 md:mb-32">
                    <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
                        <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
                        <span>03 · COMPLEMENTARY SERVICES</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
                        Infrastructure add-ons.
                    </h2>
                    <p className="text-base sm:text-lg text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-14 max-w-[56ch] [text-wrap:pretty]">
                        Essential infrastructure services to secure and sustain your application lifecycle.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
                        {additionalServices.map((service, i) => (
                            <div
                                key={i}
                                className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 flex flex-col justify-between hover:border-[#D4693A]/50 transition-colors duration-200"
                            >
                                <div>
                                    <span className="text-xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] block mb-2">
                                        {service.service}
                                    </span>
                                    <p className="text-sm text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-6 max-w-[56ch] [text-wrap:pretty]">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-[#EAE4DE] dark:border-[#2B2724]">
                                    <span className="text-xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] text-[#D4693A]">
                                        {service.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing Factors */}
                <section className="mb-24 md:mb-32">
                    <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
                        <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
                        <span>04 · HOW WE ESTIMATE</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
                        Key valuation factors.
                    </h2>
                    <p className="text-base sm:text-lg text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-14 max-w-[56ch] [text-wrap:pretty]">
                        How engineering effort translates into honest, predictable project investment.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8">
                        {pricingFactors.map((factor, i) => (
                            <div
                                key={i}
                                className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 flex flex-col justify-between hover:border-[#D4693A]/50 transition-colors duration-200"
                            >
                                <div>
                                    <div className="w-8 h-8 rounded-full border border-[#D4693A] flex items-center justify-center font-mono text-xs font-bold text-[#D4693A] mb-4">
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-lg font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] mb-2">
                                        {factor.title}
                                    </h3>
                                    <p className="text-sm text-[#5F5A55] dark:text-[#A09A93] leading-relaxed max-w-[56ch] [text-wrap:pretty]">
                                        {factor.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-24 md:mb-32">
                    <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
                        <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
                        <span>05 · FREQUENT QUESTIONS</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-12">
                        Common clarifications.
                    </h2>

                    <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-6 sm:p-10">
                        <Accordion type="single" collapsible className="w-full divide-y divide-[#EAE4DE] dark:divide-[#2B2724]">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b-0 py-2">
                                    <AccordionTrigger className="text-left font-headline font-semibold text-lg tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] hover:no-underline hover:text-[#D4693A] transition-colors py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base leading-relaxed text-[#5F5A55] dark:text-[#A09A93] max-w-[56ch] [text-wrap:pretty] pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

            </div>
        </div>
    );
}
