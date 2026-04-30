"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import { MagneticButton } from "@/components/MagneticButton";
import { GradientMesh } from "@/components/GradientMesh";
import { GridPattern } from "@/components/GridPattern";
import { HeroVisual } from "@/components/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Layered backgrounds */}
      <GradientMesh />
      <GridPattern />

      {/* Vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_hsl(var(--background))_80%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-12 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Floating badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-brand/30 bg-brand/10 text-brand backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              Now accepting new projects for Q3 2026
            </span>
          </motion.div>

          {/* Headline with gradient text */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.08]"
          >
            Digital solutions that solve{" "}
            <span className="hero-gradient-text">
              real business problems.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            We design and build high-performance websites and systems that
            attract customers, automate operations, and increase revenue.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA — with glow */}
              <MagneticButton className="group relative inline-flex items-center justify-center h-12 rounded-full px-8 text-base font-medium gap-2 bg-brand text-brand-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(94,234,212,0.35)]">
                <span className="absolute inset-0 rounded-full bg-brand opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                <Link href="/contact" className="relative flex items-center gap-2">
                  Start a project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </MagneticButton>

              {/* Secondary CTA — with gradient border */}
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-8 text-base font-medium group border-border/50 hover:border-brand/40 hover:bg-brand/5 transition-all duration-300"
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

        {/* Hero Visual — browser mockup */}
        <HeroVisual />
      </div>
    </section>
  );
}
