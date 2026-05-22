"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Bot, Gauge, Headphones } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, scaleIn } from "@/lib/motion-variants";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Custom-built AI agents to automate customer support, generate leads, and streamline internal workflows. Support Bots, Sales Agents, and Data Assistants.",
    featured: false,
    badge: "New",
  },
  {
    icon: Code,
    title: "Custom Software",
    description:
      "Scalable web applications with modern cloud infrastructure. SaaS platforms, internal tools, and more. We architect systems built to grow with your business.",
    featured: false,
    badge: "Most Popular",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile experiences. Native performance, single codebase.",
    featured: false,
    badge: "Most Popular",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description:
      "Excellent Lighthouse scores, Core Web Vitals optimization, and structured data for search visibility.",
    featured: false,
  },
  {
    icon: Headphones,
    title: "24/7 Support & Maintenance",
    description:
      "Continuous monitoring, rapid response, and proactive maintenance to keep your systems running smoothly.",
    featured: false,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Section gradient divider at top */}
      <div className="section-gradient-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium text-brand tracking-widest uppercase">
            What we do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            End-to-end digital solutions built for real impact.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
            From concept to launch, we handle every layer of your digital product with precision and care.
          </p>
        </motion.div>

        {/* Uniform Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col"
            >
              <ServiceCard
                title={s.title}
                description={s.description}
                icon={<s.icon className="h-5 w-5" />}
                featured={s.featured}
                badge={s.badge}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand transition-colors group"
          >
            View all services and pricing
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
