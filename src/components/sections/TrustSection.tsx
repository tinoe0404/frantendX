"use client";

import {
    Smartphone,
    Zap,
    ShieldCheck,
    FileText,
    TrendingUp,
    Layout
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const valuePoints = [
    {
        title: "Clean, Maintainable Systems",
        description: "Code built to last. We prioritize structure and readability, making future updates seamless and cost-effective.",
        icon: Layout,
    },
    {
        title: "Mobile-First Design",
        description: "Responsive interfaces that look and feel perfect on every device, ensuring a consistent user experience.",
        icon: Smartphone,
    },
    {
        title: "Optimized Performance",
        description: "Blazing fast load times and optimized assets. Speed is a feature, and we ensure your site flies.",
        icon: Zap,
    },
    {
        title: "Secure Architecture",
        description: "Built with security best practices from the ground up to protect your data and your users' privacy.",
        icon: ShieldCheck,
    },
    {
        title: "Clear Documentation",
        description: "No black boxes. We provide comprehensive documentation and smooth handovers so you own your technology.",
        icon: FileText,
    },
    {
        title: "Long-Term Scalability",
        description: "Solutions designed to grow with your business. We architect systems that handle success without breaking.",
        icon: TrendingUp,
    },
];

export function TrustSection() {
    return (
        <section className="w-full py-20 bg-background border-y border-border/40">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        What You Can Expect
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We don't just write code; we build reliable digital assets tailored for your business success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {valuePoints.map((point, index) => (
                        <Card
                            key={index}
                            className="bg-secondary/10 border-none shadow-sm hover:bg-secondary/20 transition-colors duration-300"
                        >
                            <CardHeader className="pb-4">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <point.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg font-semibold">{point.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {point.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
