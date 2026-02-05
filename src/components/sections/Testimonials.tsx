import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export async function Testimonials() {
    const testimonials = await prisma.testimonial.findMany({
        where: { approved: true },
        orderBy: { id: "desc" },
        take: 3,
    });

    return (
        <section className="py-20 bg-muted/50">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Trusted by <span className="text-primary">Innovators.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Don&apos;t just take our word for it. Here&apos;s what our partners say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t: any) => (
                        <Card key={t.id} className="bg-background border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-8 space-y-4">
                                <Quote className="h-8 w-8 text-primary/20" />
                                <p className="text-muted-foreground italic leading-relaxed">"{t.content}"</p>
                                <div className="pt-4 flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                        {t.client.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{t.client}</h4>
                                        <p className="text-sm text-muted-foreground">{t.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
