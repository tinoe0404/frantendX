import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Pricing | frantendX Digital Solutions",
    description: "Transparent pricing estimates for your digital projects. Choose the plan that fits your business needs.",
};

const plans = [
    {
        name: "Starter",
        price: "$150+",
        description: "Perfect for small businesses looking for a professional start.",
        features: ["Custom Design", "SEO basic", "Contact Form", "Mobile Responsive", "1 Month Support"],
    },
    {
        name: "Business",
        price: "$400+",
        description: "For growing companies needing more features and visibility.",
        features: [
            "Everything in Starter",
            "CMS Integration",
            "Blog Section",
            "Advanced Analytics",
            "3 Months Support",
            "Fast Performance Opt."
        ],
        featured: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Complex Web Apps tailored to unique business logic.",
        features: [
            "Everything in Business",
            "User Authentication",
            "Complex Databases",
            "API Integrations",
            "Ongoing Maintenance",
            "SLA Guarantee"
        ],
    },
];

export default function PricingPage() {
    return (
        <div className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                        Transparent <span className="text-primary">Pricing Estimates.</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                        No hidden fees. Choose a plan that aligns with your goals and budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={plan.featured ? "border-primary shadow-xl scale-105 relative" : "border-border shadow-md"}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <div className="flex items-baseline gap-1 pt-2">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.name !== "Enterprise" && <span className="text-muted-foreground">/project</span>}
                                </div>
                                <CardDescription className="pt-4">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4 pt-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm">
                                            <Check className="h-4 w-4 text-primary mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={plan.featured ? "default" : "outline"} asChild>
                                    <Link href="/contact">Choose Plan</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-20 text-center space-y-4">
                    <h3 className="text-2xl font-semibold">Not sure which plan is right for you?</h3>
                    <p className="text-muted-foreground">
                        We can provide a custom quote tailored specifically to your project's unique requirements.
                    </p>
                    <Button variant="link" className="text-primary font-bold text-lg" asChild>
                        <Link href="/contact">Contact us for a custom quote &rarr;</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
