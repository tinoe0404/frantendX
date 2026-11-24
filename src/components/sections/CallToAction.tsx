"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-gradient-divider absolute top-0 left-0 right-0" />

      {/* Subtle glowing orb */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center" aria-hidden="true">
        <div className="w-[600px] h-[600px] bg-foreground/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-border/50 bg-foreground/5 text-foreground">
              <Terminal className="h-3.5 w-3.5" />
              Ready for deployment
            </span>
          </motion.div>

          <h2 className="text-4xl font-semibold tracking-tighter text-foreground sm:text-5xl md:text-6xl text-balance">
            Build Your Next <br/><span className="hero-gradient-text">Intelligent System.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground font-light tracking-tight">
            Partner with Frantiva Technologies to design, engineer, and deploy scalable AI products and custom enterprise software.
          </p>

          <div className="mt-12 flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-medium bg-foreground text-background hover:bg-foreground/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-foreground/10 transition-all duration-300 group"
              asChild
            >
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base font-medium border-border/50 hover:bg-foreground/5 transition-all duration-300"
              asChild
            >
              <Link href="/services">View documentation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
