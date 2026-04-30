"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { staggerContainer, scaleIn } from "@/lib/motion-variants";

const projects = [
  {
    title: "Eco-Tourism Booking Platform",
    client: "Gowild Tours & Nomadic Trails",
    industry: "Tourism",
    description:
      "A high-performance booking platform with real-time availability, integrated payments, and seamless mobile experience.",
    metrics: [
      { label: "Bookings", value: "+45%" },
      { label: "Load Time", value: "0.8s" },
    ],
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    gradient: "from-brand/20 to-blue-500/20",
    accentColor: "hsl(173 58% 39%)",
  },
  {
    title: "Corporate Management System",
    client: "HaviChem Cleaning Services",
    industry: "B2B Services",
    description:
      "Custom internal operations platform automating scheduling, invoicing, and real-time client dashboards.",
    metrics: [
      { label: "Time Saved", value: "60%" },
      { label: "Efficiency", value: "+3x" },
    ],
    tags: ["React", "Node.js", "Tailwind"],
    gradient: "from-blue-500/20 to-purple-500/20",
    accentColor: "hsl(220 70% 55%)",
  },
  {
    title: "Community Outreach Portal",
    client: "Educating Rural Girl Child of Zimbabwe",
    industry: "NGO",
    description:
      "An accessible, optimized web presence driving donor engagement and showcasing community impact across regions.",
    metrics: [
      { label: "Visibility", value: "10K+" },
      { label: "Engagement", value: "+120%" },
    ],
    tags: ["Next.js", "CMS", "Accessibility"],
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "hsl(262 60% 60%)",
  },
];

export function FeaturedWork() {
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
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium text-brand tracking-widest uppercase">
            Our Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Projects that deliver real results
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            We don&apos;t just build software — we build systems that drive measurable business outcomes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={scaleIn}>
              <div className="glass-card gradient-border rounded-xl overflow-hidden group h-full flex flex-col">
                {/* Project image placeholder with gradient */}
                <div
                  className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* Floating label */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
                      {project.industry}
                    </span>
                  </div>
                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <ArrowUpRight className="h-4 w-4 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Built for:
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {project.client}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-4 mb-4">
                    {project.metrics.map((metric, j) => (
                      <div key={j}>
                        <div
                          className="text-xl font-bold"
                          style={{ color: project.accentColor }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
