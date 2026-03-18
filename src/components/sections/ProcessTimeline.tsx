"use client";

import { motion } from "framer-motion";
import { ProcessSteps } from "@/components/ProcessSteps";

export function ProcessTimeline() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="mb-3 text-sm font-medium text-muted-foreground tracking-widest uppercase">
            How we work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            From concept to deployment
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            A proven four-step methodology that delivers results on time, every time.
          </p>
        </motion.div>

        <ProcessSteps />
      </div>
    </section>
  );
}
