import { Laptop, ShoppingBag, Server } from "lucide-react";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

const services = [
    {
        title: "Custom Web Apps",
        description: "Scalable SaaS and internal tools built on Next.js.",
        icon: Laptop,
    },
    {
        title: "E-commerce Solutions",
        description: "High-converting stores with secure payment integration.",
        icon: ShoppingBag,
    },
    {
        title: "API & Integration",
        description: "Connecting your business data seamlessly.",
        icon: Server,
    },
];

export function ServicesPreview() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Our Expertise
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        We specialize in building robust, scalable digital solutions that drive real business results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card key={service.title} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-primary">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
