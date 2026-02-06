"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 md:py-24">
      <div className="container max-w-screen-xl px-4 md:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-6 py-16 sm:px-16 md:py-20 lg:px-24 text-center"
        >
          {/* Glow effects */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]"
            aria-hidden="true"
          />

          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Ready to scale your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {"Let's build something extraordinary together. Start your journey with FrantendX Digital Solutions today."}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold gap-2"
              asChild
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base font-semibold"
              asChild
            >
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
