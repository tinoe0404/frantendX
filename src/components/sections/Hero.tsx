"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import { GridPattern } from "@/components/GridPattern";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center">
      {/* Subtle Grid Background */}
      <GridPattern className="opacity-40" />

      {/* Fade overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex flex-col items-center"
        >
          {/* Minimal Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full text-xs font-medium border border-border/50 bg-foreground/5 text-foreground backdrop-blur-md"
          >
            <Box className="h-3.5 w-3.5" />
            <span>FrantendX OS 2.0</span>
          </motion.div>

          {/* Headline - Editorial Typography */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-semibold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl leading-[1]"
          >
            Build the future with <br className="hidden md:block" />
            <span className="hero-gradient-text">
              intelligent systems.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light tracking-tight"
          >
            We engineer sophisticated AI agents, automated business workflows, and scalable enterprise platforms to accelerate your company&apos;s growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-medium bg-foreground text-background hover:bg-foreground/90 transition-all group"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start building
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base font-medium border-border/50 hover:bg-foreground/5 transition-all group"
              asChild
            >
              <Link href="/services" className="flex items-center gap-2">
                Explore capabilities
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
