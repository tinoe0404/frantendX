"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3x", label: "Average ROI" },
  { value: "<12mo", label: "Time to payback" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Hero() {
  const headline = ["We build", "software that", "drives growth."];

  return (
    <section className="relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/50 via-background to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span>Now accepting projects for Q2 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.1]"
          >
            {headline.map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.split(" ").map((word, wordIdx) => (
                  <motion.span
                    key={`${lineIdx}-${wordIdx}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            High-performance web applications built to solve real business problems, attract customers, and scale revenue.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="h-12 rounded-full px-8 text-base font-medium gap-2 bg-brand text-brand-foreground hover:bg-brand/90" asChild>
              <Link href="/contact">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full px-8 text-base font-medium" asChild>
              <Link href="/services">
                Explore services
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center bg-card px-6 py-8">
              <span className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</span>
              <span className="mt-1.5 text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
