"use client";

import { useRef } from "react";
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
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-center pt-20 pb-12 overflow-hidden hero-peach-gradient hero-faint-grid">
      {/* Network background with 24px no-render exclusion zone around headline, paragraph & buttons */}
      <ConstellationBackground exclusionRefs={[headlineRef, paragraphRef, buttonsRef]} />

      <div className="mx-auto max-w-[1200px] px-6 w-full relative z-10 my-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1050px] w-full flex flex-col items-start text-left"
        >
          {/* Headline:
              font-size clamp(44px, 6vw, 80px);
              letter-spacing -0.025em;
              word-spacing +0.04em;
              line-height 1.02.
              Two lines: "Intelligent software." (dark) / "Built to move business." (orange), each on its own single line at 1280px+.
          */}
          <motion.h1
            ref={headlineRef}
            variants={fadeUp}
            className="font-headline font-bold text-[#141210] dark:text-[#FAF7F4] mb-8 text-[clamp(44px,6vw,80px)] tracking-[-0.025em] [word-spacing:0.04em] leading-[1.02]"
            style={{
              fontSize: "clamp(44px, 6vw, 80px)",
              letterSpacing: "-0.025em",
              wordSpacing: "0.04em",
              lineHeight: 1.02,
            }}
          >
            <span className="block xl:whitespace-nowrap">Intelligent software.</span>
            <span className="block xl:whitespace-nowrap text-[#D4693A]">Built to move business.</span>
          </motion.h1>

          {/* Paragraph:
              max-width 58ch, text-wrap: balance, font-size 18px, line-height 1.6.
          */}
          <motion.p
            ref={paragraphRef}
            variants={fadeUp}
            className="font-sans text-[18px] leading-[1.6] max-w-[58ch] [text-wrap:balance] text-[#5F5A55] dark:text-[#A09A93] mb-10"
            style={{
              maxWidth: "58ch",
              textWrap: "balance",
              fontSize: "18px",
              lineHeight: 1.6,
            }}
          >
            We engineer intelligent AI solutions, custom software and automated systems
            that help businesses solve complex problems, operate efficiently and scale
            with confidence.
          </motion.p>

          {/* Two Actions: Primary Pill and Plain Text Link (No Box, No Border) */}
          <motion.div
            ref={buttonsRef}
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
