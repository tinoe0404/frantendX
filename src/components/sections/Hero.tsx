"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36">
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/50 via-background to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.1]"
          >
            Digital solutions that solve real business problems.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
          >
            We design and build high-performance websites and systems that attract customers, automate operations, and increase revenue.
          </motion.p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="h-12 w-full sm:w-auto rounded-full px-8 text-base font-medium gap-2 bg-brand text-brand-foreground hover:bg-brand/90 hover:shadow-[0_0_20px_rgba(var(--brand-rgb),0.3)] transition-all"
                  asChild
                >
                  <Link href="/contact">
                    Start a project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full sm:w-auto rounded-full px-8 text-base font-medium group hover:underline"
                  asChild
                >
                  <Link href="/services">
                    Explore services
                    {/* Hover effect handled by button variant + native transition, kept simple as requested */}
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Helper text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              Free consultation available
            </motion.p>
          </div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-16 sm:mt-20"
          >
            <p className="text-sm font-medium text-muted-foreground mb-3">
              Trusted by forward-thinking businesses in Zimbabwe
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground/80">
              <span>Websites</span>
              <span className="text-muted-foreground/30">•</span>
              <span>Business Systems</span>
              <span className="text-muted-foreground/30">•</span>
              <span>E-commerce</span>
              <span className="text-muted-foreground/30">•</span>
              <span>Automation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
