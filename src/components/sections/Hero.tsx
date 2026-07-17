"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Activity, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const floatingElement = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center bg-background">
      {/* Subtle glowing ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[800px] h-[500px] bg-foreground/[0.03] rounded-[100%] blur-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[600px] h-[300px] bg-foreground/[0.02] rounded-[100%] blur-[80px] absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse duration-10000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center w-full">
        {/* Floating Background Interface Elements */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            variants={floatingElement}
            initial="animate"
            animate="animate"
            className="absolute top-[20%] left-[10%] flex items-center gap-3 px-4 py-3 rounded-2xl border border-border/40 bg-background/40 backdrop-blur-md opacity-60"
          >
            <Activity className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 w-12 bg-foreground/20 rounded-full" />
              <div className="h-1.5 w-8 bg-foreground/10 rounded-full" />
            </div>
          </motion.div>
          
          <motion.div
            variants={floatingElement}
            initial="animate"
            animate="animate"
            className="absolute top-[35%] right-[10%] flex items-center gap-3 px-4 py-3 rounded-2xl border border-border/40 bg-background/40 backdrop-blur-md opacity-60"
            style={{ animationDelay: "-2s" }}
          >
            <Terminal className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 w-16 bg-foreground/20 rounded-full" />
              <div className="h-1.5 w-10 bg-foreground/10 rounded-full" />
            </div>
          </motion.div>
          
          <motion.div
            variants={floatingElement}
            initial="animate"
            animate="animate"
            className="absolute bottom-[25%] left-[15%] flex items-center gap-3 px-4 py-3 rounded-2xl border border-border/40 bg-background/40 backdrop-blur-md opacity-60"
            style={{ animationDelay: "-4s" }}
          >
            <Cpu className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 w-10 bg-foreground/20 rounded-full" />
              <div className="h-1.5 w-14 bg-foreground/10 rounded-full" />
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex flex-col items-center max-w-5xl relative z-20"
        >
          {/* Minimal Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 mb-10 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase border border-border/40 bg-foreground/[0.03] text-muted-foreground backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3" />
            <span>AI SOFTWARE COMPANY</span>
          </motion.div>

          {/* Headline - Cinematic Typography */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-medium tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.95] text-balance"
          >
            Building Intelligent Systems For The Future Of Africa
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light tracking-tight"
          >
            FrantendX designs and develops AI agents, automation platforms, SaaS products, and enterprise systems that help businesses operate smarter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group shadow-lg shadow-foreground/10"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start A Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base font-medium border-border/30 hover:border-border/80 hover:bg-foreground/5 transition-all duration-300 bg-background/50 backdrop-blur-sm"
              asChild
            >
              <Link href="/services">
                Explore Solutions
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
