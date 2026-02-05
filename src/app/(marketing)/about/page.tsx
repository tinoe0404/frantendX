import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, Scaling } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | frantendX Digital Solutions",
    description: "Learn about FrantendX Digital Solutions, a leading digital agency specializing in Next.js and high-performance web development.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-background">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                        Driven by Innovation, <span className="text-primary">Grounded in Quality.</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                        We are more than just developers. We are your strategic partners in the digital age.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-24 bg-white border-y border-border/40">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Our Mission
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                FrantendX Digital Solutions was founded to bridge the gap between complex technology and business goals.
                                We believe that every business deserves a digital presence that is not only beautiful but also
                                fundamentally robust, secure, and scalable.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our team leverages cutting-edge technologies like Next.js, AI, and Cloud Computing
                                to deliver solutions that stand the test of time and market shifts.
                            </p>
                        </div>
                        <div className="relative h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
                            {/* Placeholder for real image */}
                            <span className="text-slate-400 font-medium">Team/Office Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 md:py-32 bg-slate-50">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Our Core Values
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            The principles that guide every line of code we write.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-primary">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">Transparency</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    No hidden costs. Clear communication. We keep you in the loop at every stage of the project lifecycle.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-primary">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">Speed</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We build fast, and our sites load faster. Performance is not an afterthought; it&apos;s a priority.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-primary">
                                    <Scaling className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">Scalability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Solutions that grow with you. We design architectures that handle increased traffic and new features effortlessy.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}
