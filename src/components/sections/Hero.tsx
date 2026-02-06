"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const headlineWords = [
  "We",
  "Build",
  "Software",
  "That",
  "Drives",
  "Growth.",
];

const codeLines = [
  { indent: 0, tokens: [{ text: "export", color: "text-primary" }, { text: " async ", color: "text-muted-foreground" }, { text: "function", color: "text-primary" }, { text: " buildSolution", color: "text-foreground" }, { text: "() {", color: "text-muted-foreground" }] },
  { indent: 1, tokens: [{ text: "const", color: "text-primary" }, { text: " stack ", color: "text-foreground" }, { text: "= ", color: "text-muted-foreground" }, { text: "[", color: "text-muted-foreground" }] },
  { indent: 2, tokens: [{ text: "'Next.js'", color: "text-emerald-400 dark:text-emerald-400" }, { text: ",", color: "text-muted-foreground" }] },
  { indent: 2, tokens: [{ text: "'React'", color: "text-emerald-400 dark:text-emerald-400" }, { text: ",", color: "text-muted-foreground" }] },
  { indent: 2, tokens: [{ text: "'TypeScript'", color: "text-emerald-400 dark:text-emerald-400" }] },
  { indent: 1, tokens: [{ text: "];", color: "text-muted-foreground" }] },
  { indent: 0, tokens: [] },
  { indent: 1, tokens: [{ text: "return", color: "text-primary" }, { text: " deploy", color: "text-foreground" }, { text: "(stack);", color: "text-muted-foreground" }] },
  { indent: 0, tokens: [{ text: "}", color: "text-muted-foreground" }] },
];

function MagneticButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Button ref={ref} className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="mx-auto mt-16 max-w-2xl"
    >
      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-primary/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-destructive/60" />
            <div className="h-3 w-3 rounded-full bg-chart-4/60" />
            <div className="h-3 w-3 rounded-full bg-chart-2/60" />
          </div>
          <span className="ml-2 text-xs text-muted-foreground font-mono">
            solution.ts
          </span>
        </div>
        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-7 overflow-x-auto">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1 + i * 0.08 }}
              style={{ paddingLeft: `${line.indent * 1.5}rem` }}
              className="flex gap-0"
            >
              <span className="text-muted-foreground/40 w-6 select-none text-right mr-4 text-xs leading-7">
                {i + 1}
              </span>
              {line.tokens.length === 0 ? (
                <span>&nbsp;</span>
              ) : (
                line.tokens.map((token, j) => (
                  <span key={j} className={token.color}>
                    {token.text}
                  </span>
                ))
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32">
      {/* Glowing background orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] animate-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Now accepting projects for Q2 2026
          </motion.div>

          {/* Staggered Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={
                  i >= 4 ? "text-primary" : undefined
                }
                style={{ display: "inline-block", marginRight: "0.3em" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl"
          >
            High-performance web applications and digital systems built to
            solve real business problems, attract customers, and scale revenue.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              size="lg"
              className="h-12 min-w-[180px] gap-2 text-base font-semibold"
              asChild
            >
              <Link href="/contact">
                Start Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
            <MagneticButton
              size="lg"
              variant="outline"
              className="h-12 min-w-[180px] gap-2 text-base font-semibold"
              asChild
            >
              <Link href="/services">
                <Eye className="h-4 w-4" />
                View Work
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Code Window Visual */}
        <CodeWindow />
      </div>
    </section>
  );
}
