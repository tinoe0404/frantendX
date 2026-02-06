"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Ready to build something great?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {"Start your project with FrantendX. We'll turn your vision into production-ready software."}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button size="lg" className="h-12 rounded-full px-8 text-base font-medium gap-2" asChild>
              <Link href="/contact">
                Start your project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full px-8 text-base font-medium" asChild>
              <Link href="/contact">Book a call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
