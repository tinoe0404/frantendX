"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "TensorFlow",
  "OpenAI",
  "AWS",
  "PostgreSQL"
];

const industries = [
  "Finance",
  "Logistics",
  "Real Estate",
  "Healthcare"
];

export function TrustSection() {
  return (
    <section className="py-24 border-y border-border/30 bg-foreground/[0.01]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Metrics / Testimonial */}
          <div className="lg:col-span-2 space-y-6">
            <motion.h3 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground max-w-md"
            >
              Trusted by visionaries to build mission-critical systems.
            </motion.h3>
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center gap-4 pt-4 border-t border-border/50"
            >
              <div className="text-4xl font-semibold text-foreground tracking-tighter">98%</div>
              <p className="text-sm text-muted-foreground font-light leading-snug">
                Client retention rate for <br/> enterprise software engagements.
              </p>
            </motion.div>
          </div>

          {/* Core Technologies */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-foreground">Technology Stack</h4>
            <ul className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li 
                  key={tech} 
                  className="px-3 py-1.5 rounded-md border border-border/40 bg-background text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries Served */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-foreground">Industries Served</h4>
            <ul className="space-y-3">
              {industries.map((ind) => (
                <li 
                  key={ind}
                  className="flex items-center gap-2 text-sm text-muted-foreground font-light"
                >
                  <div className="h-1 w-1 rounded-full bg-foreground/30" />
                  {ind}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
