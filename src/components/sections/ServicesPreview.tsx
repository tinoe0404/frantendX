"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Gauge, Headphones, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { staggerContainer, scaleIn } from "@/lib/motion-variants";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Code,
    title: "Custom Software",
    description: "Scalable web applications with modern cloud infrastructure. SaaS platforms, internal tools, and more.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform mobile experiences. Native performance, single codebase.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description: "Perfect Lighthouse scores, Core Web Vitals optimization, and structured data for search visibility.",
  },
  {
    icon: Headphones,
    title: "24/7 Support & Maintenance",
    description: "Continuous monitoring, rapid response, and proactive maintenance to keep your systems running smoothly.",
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={scaleIn}>
              <ServiceCard title={s.title} description={s.description} icon={<s.icon className="h-5 w-5" />} />
            </motion.div>
          ))}
        </motion.div>

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
