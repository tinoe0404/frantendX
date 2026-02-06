"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "We analyze your needs, understand your audience, and define success metrics.",
    icon: Search,
  },
  {
    id: 2,
    title: "Design",
    description: "Creating intuitive wireframes and high-fidelity prototypes aligned with your brand.",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Development",
    description: "Writing clean, scalable code with Next.js, establishing database schemas, and API logic.",
    icon: Code,
  },
  {
    id: 4,
    title: "Launch",
    description: "Thorough testing, SEO optimization, and deployment to a high-performance CDN.",
    icon: Rocket,
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground">
                <step.icon className="h-5 w-5" />
              </div>
              <div className="mb-2 text-xs font-medium text-muted-foreground">
                {`Step ${step.id}`}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
