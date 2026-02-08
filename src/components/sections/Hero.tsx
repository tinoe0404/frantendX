"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/50 via-background to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.1]"
          >
            Digital solutions that solve real business problems.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            We design and build high-performance websites and systems that attract customers, automate operations, and increase revenue.
          </motion.p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Button
                  size="lg"
                  className="h-12 rounded-full px-8 text-base font-medium gap-2 bg-brand text-brand-foreground hover:bg-brand/90 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-200"
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
              >
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
            className="mt-12 space-y-2"
          >
            <p className="text-sm font-medium text-foreground">
              Trusted by forward-thinking businesses in Zimbabwe
            </p>
            <p className="text-xs text-muted-foreground">
              Websites • Business Systems • E-commerce • Automation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
