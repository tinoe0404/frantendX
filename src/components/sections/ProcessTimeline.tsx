import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Discovery",
        description: "We analyze your needs, understand your audience, and define success metrics.",
        icon: Search,
    },
    {
        id: 2,
        title: "Design",
        description: "Creating intuitive wireframes and high-fidelity prototypes aligned with your brand.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "Development",
        description: "Writing clean, scalable code with Next.js, establishing database schemas, and API logic.",
        icon: Code,
    },
    {
        id: 4,
        title: "Launch",
        description: "Thorough testing, SEO optimization, and deployment to a high-performance CDN.",
        icon: Rocket,
    },
];

export function ProcessTimeline() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Our Process
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        From concept to deployment, we follow a proven methodology.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-background border-4 border-blue-100 flex items-center justify-center mb-6 shadow-sm z-10">
                                    <step.icon className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
