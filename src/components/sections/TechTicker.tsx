"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// Placeholder data for logos (using text for now since we don't have SVGs)
// In a real app, replace `text` with `src` for images.
const techs = [
    { name: "Next.js", color: "text-black dark:text-white" },
    { name: "React", color: "text-blue-500" },
    { name: "TypeScript", color: "text-blue-600" },
    { name: "Neon", color: "text-green-500" },
    { name: "Tailwind CSS", color: "text-cyan-500" },
    { name: "Node.js", color: "text-green-600" },
    { name: "Prisma", color: "text-indigo-600" },
    { name: "Shadcn/UI", color: "text-slate-900 dark:text-slate-100" },
];

export function TechTicker() {
    return (
        <section className="w-full bg-secondary/20 py-12 overflow-hidden border-y border-border/50">
            <div className="container px-4 md:px-8 mx-auto">
                <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
                    Powered by Industry-Leading Technology
                </p>

                <div className="relative flex overflow-x-hidden group">
                    {/* First Set */}
                    <div className="flex animate-infinite-scroll whitespace-nowrap">
                        {techs.map((tech, index) => (
                            <div
                                key={`tech-1-${index}`}
                                className="mx-8 flex items-center justify-center"
                            >
                                <span className={cn("text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity", tech.color)}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Second Set (Duplicate for seamless loop) */}
                    <div className="flex animate-infinite-scroll whitespace-nowrap" aria-hidden="true">
                        {techs.map((tech, index) => (
                            <div
                                key={`tech-2-${index}`}
                                className="mx-8 flex items-center justify-center"
                            >
                                <span className={cn("text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity", tech.color)}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Third Set (Extra buffer for wide screens) */}
                    <div className="flex animate-infinite-scroll whitespace-nowrap" aria-hidden="true">
                        {techs.map((tech, index) => (
                            <div
                                key={`tech-3-${index}`}
                                className="mx-8 flex items-center justify-center"
                            >
                                <span className={cn("text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity", tech.color)}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
