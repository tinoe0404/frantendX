"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/50 via-background to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.1]"
          >
            Digital solutions that solve real business problems.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            We design and build high-performance websites and systems that attract customers, automate operations, and increase revenue.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <MagneticButton
                className="inline-flex items-center justify-center h-12 rounded-full px-8 text-base font-medium gap-2 bg-brand text-brand-foreground hover:bg-brand/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-200"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-8 text-base font-medium hover:underline group"
                asChild
              >
                <Link href="/services" className="flex items-center gap-2">
                  Explore services
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>

            {/* Helper text */}
            <p className="text-sm text-muted-foreground mt-4">
              Free consultation available
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
