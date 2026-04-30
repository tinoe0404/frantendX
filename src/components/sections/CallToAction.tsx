"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Section gradient divider at top */}
      <div className="section-gradient-divider absolute top-0 left-0 right-0" />

      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, hsl(173 58% 39% / 0.08) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-brand/30 bg-brand/10 text-brand">
              <Calendar className="h-3 w-3" />
              Limited availability for Q3 2026
            </span>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Ready to build{" "}
            <span className="hero-gradient-text">something great?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {"Start your project with FrantendX. We'll turn your vision into production-ready software."}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-medium gap-2 bg-brand text-brand-foreground hover:bg-brand/90 hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] transition-all duration-300 group"
              asChild
            >
              <Link href="/contact">
                Start your project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base font-medium border-border/50 hover:border-brand/40 hover:bg-brand/5 transition-all duration-300"
              asChild
            >
              <Link href="/contact">Book a call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
