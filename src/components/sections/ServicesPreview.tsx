"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Gauge, Headphones, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Code,
    title: "Custom Software",
    description: "Scalable web applications with Next.js, TypeScript, and modern cloud infrastructure. SaaS platforms, internal tools, and more.",
    span: "md:col-span-2",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform mobile experiences using React Native. Native performance, single codebase.",
    span: "md:col-span-1",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description: "Perfect Lighthouse scores, Core Web Vitals optimization, and structured data for search visibility.",
    span: "md:col-span-1",
  },
  {
    icon: Headphones,
    title: "24/7 Support & Maintenance",
    description: "Continuous monitoring, rapid response, and proactive maintenance to keep your systems running smoothly.",
    span: "md:col-span-2",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium text-muted-foreground tracking-widest uppercase">
            What we do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            End-to-end digital solutions built for real impact.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group relative rounded-2xl border border-border bg-card p-6 md:p-8 transition-colors hover:border-brand/40 ${service.span}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-brand">
                  <service.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            View all services and pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
