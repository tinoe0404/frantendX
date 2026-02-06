"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Gauge,
  Headphones,
  Terminal,
  Braces,
  CheckCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function MiniCodeEditor() {
  return (
    <div className="mt-4 rounded-lg border border-border bg-background/50 p-3 font-mono text-xs leading-6 overflow-hidden">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="h-2 w-2 rounded-full bg-destructive/50" />
        <div className="h-2 w-2 rounded-full bg-chart-4/50" />
        <div className="h-2 w-2 rounded-full bg-chart-2/50" />
      </div>
      <div>
        <span className="text-primary">{"const"}</span>
        <span className="text-foreground">{" app "}</span>
        <span className="text-muted-foreground">{"= "}</span>
        <span className="text-primary">{"await"}</span>
        <span className="text-foreground">{" build"}</span>
        <span className="text-muted-foreground">{"({"}</span>
      </div>
      <div className="pl-4">
        <span className="text-foreground">{"framework"}</span>
        <span className="text-muted-foreground">{": "}</span>
        <span className="text-emerald-400">{`'next.js'`}</span>
        <span className="text-muted-foreground">{","}</span>
      </div>
      <div className="pl-4">
        <span className="text-foreground">{"deploy"}</span>
        <span className="text-muted-foreground">{": "}</span>
        <span className="text-emerald-400">{`'vercel'`}</span>
      </div>
      <div>
        <span className="text-muted-foreground">{"});"}</span>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="relative w-32 h-56 rounded-2xl border-2 border-border bg-background/50 p-1.5">
        {/* Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-border" />
        {/* Screen */}
        <div className="mt-3 h-full rounded-xl bg-muted/30 flex flex-col items-center justify-center gap-2 p-2">
          <Smartphone className="h-6 w-6 text-primary/60" />
          <div className="w-full space-y-1.5">
            <div className="h-1.5 w-3/4 mx-auto rounded-full bg-primary/20" />
            <div className="h-1.5 w-1/2 mx-auto rounded-full bg-primary/10" />
          </div>
          <div className="mt-2 flex gap-1">
            <div className="h-6 w-6 rounded bg-primary/15" />
            <div className="h-6 w-6 rounded bg-primary/10" />
            <div className="h-6 w-6 rounded bg-primary/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LighthouseScore() {
  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            strokeWidth="6"
            className="stroke-border"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 42}`}
            strokeDashoffset={`${2 * Math.PI * 42 * 0.01}`}
            className="stroke-emerald-400"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-2xl font-bold text-foreground">100</span>
          <span className="text-[10px] text-muted-foreground">Score</span>
        </div>
      </div>
    </div>
  );
}

function LiveIndicator() {
  return (
    <div className="mt-4 flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-sm font-medium text-emerald-400">All Systems Live</span>
      </div>
      <p className="text-xs text-muted-foreground">99.9% uptime SLA</p>
    </div>
  );
}

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container max-w-screen-xl px-4 md:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            What We Build
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            End-to-end digital solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From custom platforms to mobile apps, we deliver production-ready
            software with measurable impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {/* Large box: Custom Software Dev */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl border border-border bg-card p-6 md:p-8 transition-shadow hover:shadow-lg hover:shadow-primary/5 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-foreground md:text-2xl">
              Custom Software Development
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Scalable, maintainable applications built with Next.js, TypeScript,
              and modern cloud infrastructure. From SaaS platforms to internal tools.
            </p>
            <MiniCodeEditor />
          </motion.div>

          {/* Tall box: Mobile Apps */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl border border-border bg-card p-6 md:p-8 transition-shadow hover:shadow-lg hover:shadow-primary/5 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <Smartphone className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-foreground md:text-2xl">
              Mobile Applications
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Cross-platform mobile experiences using React Native and
              progressive web app technologies. Native feel, single codebase.
            </p>
            <PhoneMockup />
          </motion.div>

          {/* Small box: SEO & Speed */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Gauge className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {"SEO & Performance"}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Perfect Lighthouse scores, Core Web Vitals optimization, and
                  structured data for maximum search visibility.
                </p>
              </div>
              <div className="hidden sm:block">
                <LighthouseScore />
              </div>
            </div>
          </motion.div>

          {/* Small box: 24/7 Support */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Headphones className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {"24/7 Support"}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Continuous monitoring, rapid response, and proactive
                  maintenance to keep your systems running smoothly.
                </p>
              </div>
              <div className="hidden sm:block">
                <LiveIndicator />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
