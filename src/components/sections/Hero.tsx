"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConstellationBackground } from "@/components/ConstellationBackground";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-center pt-20 pb-12 overflow-hidden hero-peach-gradient hero-faint-grid">
      {/* Very faint, sparse constellation background */}
      <ConstellationBackground />

      <div className="mx-auto max-w-[1200px] px-6 w-full relative z-10 my-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[960px] flex flex-col items-start text-left"
        >
          {/* Headline: Heavy-weight (700/800), tight negative letter-spacing (-0.03em), clamp(48px, 7vw, 96px), max 2 lines */}
          <motion.h1
            variants={fadeUp}
            className="hero-headline-clamp font-headline font-bold text-[#141210] dark:text-[#FAF7F4] mb-8"
          >
            Intelligent Software.
            <br />
            <span className="text-[#D4693A]">Built to Move Business Forward.</span>
          </motion.h1>

          {/* Body: Inter, 18-20px, muted, max-width ~60ch, line-height 1.6 */}
          <motion.p
            variants={fadeUp}
            className="body-calm text-base sm:text-lg md:text-[19px] leading-[1.6] mb-10"
          >
            We engineer intelligent AI solutions, custom software and automated systems
            that help businesses solve complex problems, operate efficiently and scale
            with confidence.
          </motion.p>

          {/* Two Actions: Primary Pill and Plain Text Link (No Box, No Border) */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {/* Primary Pill */}
            <Button
              size="lg"
              className="h-13 px-8 rounded-full text-base font-semibold bg-[#D4693A] text-white hover:bg-[#c35c30] active:bg-[#b55227] transition-all duration-200 shadow-[0_2px_10px_rgba(212,105,58,0.22)] inline-flex items-center gap-2"
              asChild
            >
              <Link href="/contact">
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            {/* Plain Text Link (No Box, No Border) */}
            <Link
              href="/services"
              className="text-base font-medium text-[#141210] dark:text-[#FAF7F4] hover:text-[#D4693A] dark:hover:text-[#D4693A] transition-colors duration-200 inline-flex items-center gap-1.5 group py-2"
            >
              <span>Explore our work</span>
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
