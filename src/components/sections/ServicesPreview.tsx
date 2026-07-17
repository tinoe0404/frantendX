"use client";

import { motion } from "framer-motion";
import { Code, Bot, Database, Workflow, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, scaleIn } from "@/lib/motion-variants";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Intelligent autonomous agents designed to automate customer support, generate leads, and act as smart data assistants within your ecosystem.",
    featured: false,
    badge: "Core",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Streamline operations by connecting discrete systems. We build automated workflows that reduce manual labor and accelerate decision-making.",
    featured: false,
    badge: "Popular",
  },
  {
    icon: Database,
    title: "Enterprise SaaS Platforms",
    description:
      "Scalable, high-performance web applications built on modern cloud architecture. Designed for massive scale and uncompromising security.",
    featured: false,
  },
  {
    icon: Code,
    title: "Custom Digital Systems",
    description:
      "Bespoke software engineering tailored to your unique operational requirements. Native performance across all digital touchpoints.",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "Security & Maintenance",
    description:
      "Continuous monitoring, proactive maintenance, and robust security protocols to keep your enterprise systems highly available.",
    featured: false,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-32 relative">
      <div className="section-gradient-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <p className="mb-4 text-xs font-semibold text-muted-foreground tracking-[0.2em] uppercase">
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl lg:text-5xl">
            Engineered for scale.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
            We deliver sophisticated digital infrastructure, blending artificial intelligence with modern software engineering.
          </p>
        </motion.div>

        {/* Uniform Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] flex flex-col"
            >
              <ServiceCard
                title={s.title}
                description={s.description}
                icon={<s.icon className="h-5 w-5 opacity-70" />}
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
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            Explore all capabilities
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
