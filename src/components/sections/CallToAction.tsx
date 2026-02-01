import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
    return (
        <section className="py-20 md:py-24">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 shadow-2xl sm:px-16 md:pt-20 md:pb-20 lg:px-24 text-center">
                    {/* Background Pattern overlay could go here */}

                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Ready to scale your business?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                        Let's build something extraordinary together. Start your journey with frantendX today.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-blue-50 h-12 px-8 text-base font-semibold"
                            asChild
                        >
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
