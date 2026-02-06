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
