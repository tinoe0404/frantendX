"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideInLeft } from "@/lib/motion-variants";

const steps = [
  { num: "01", title: "Discovery", desc: "Analyze needs and define success metrics." },
  { num: "02", title: "Design", desc: "Wireframes and high-fidelity prototypes." },
  { num: "03", title: "Development", desc: "Clean, scalable code and API logic." },
  { num: "04", title: "Launch", desc: "Testing, SEO, and CDN deployment." },
];

export function ProcessSteps() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {steps.map((step, i) => (
        <motion.div key={i} variants={slideInLeft} className="flex flex-col gap-3">
          <span className="text-xs font-mono text-muted-foreground">{step.num}</span>
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.desc}</p>
          {/* Animated underline */}
          <motion.div
            className="h-0.5 bg-primary rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 }}
            viewport={{ once: true }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
