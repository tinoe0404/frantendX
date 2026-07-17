"use client";

import { motion } from "framer-motion";
import { Database, Workflow, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, scaleIn } from "@/lib/motion-variants";

const solutions = [
  {
    icon: Cpu,
    title: "AI Agents",
    description: "Autonomous AI assistants that automate business workflows.",
    featured: false,
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Intelligent systems that reduce repetitive manual work.",
    featured: false,
  },
  {
    icon: Database,
    title: "SaaS Platforms",
    description: "Scalable cloud applications designed for modern businesses.",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Systems",
    description: "Secure custom software solutions for organizations.",
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
          <h2 className="text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl lg:text-5xl">
            Solutions We Build
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
            We deliver sophisticated digital infrastructure, blending artificial intelligence with modern software engineering.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="flex flex-col group p-8 rounded-2xl border border-border/50 bg-foreground/[0.02] hover:bg-foreground/[0.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-foreground/5 hover:border-border/80 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="h-12 w-12 rounded-xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <s.icon className="h-6 w-6 text-foreground opacity-80" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {s.description}
              </p>
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
