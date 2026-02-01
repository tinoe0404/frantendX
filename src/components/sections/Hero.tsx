"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
            {/* Background Gradient Blob */}
            <div
                className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-radial from-blue-100/40 to-transparent opacity-20 blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="container max-w-screen-2xl px-4 md:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl space-y-8"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                        🚀 Transforming Ideas into Digital Reality
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                        Building Digital Excellence with{" "}
                        <span className="text-primary">Next.js & AI.</span>
                    </h1>

                    {/* Subtext */}
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
                        frantendX delivers scalable, high-performance web applications tailored for your business growth.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                            <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto text-base h-12 px-8"
                            asChild
                        >
                            <Link href="/portfolio">View Portfolio</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
