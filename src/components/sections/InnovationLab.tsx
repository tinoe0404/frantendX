"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Target, Shield } from "lucide-react";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const products = [
  {
    id: "zonkezonke",
    name: "Zonkezonke App",
    category: "Super App / Platform",
    problem: "An integrated platform for modern services and connectivity.",
    tech: ["React Native", "Node.js", "MongoDB", "AWS"],
    icon: Target,
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "bg-blue-500",
    mockup: (
      <div className="relative w-full h-full p-4 flex flex-col gap-3 opacity-80">
        <div className="flex items-center justify-between">
          <div className="h-2 w-24 bg-foreground/20 rounded-full" />
          <div className="h-2 w-12 bg-foreground/10 rounded-full" />
        </div>
        <div className="flex-1 border border-border/40 rounded-lg bg-background/50 flex items-end p-4 gap-2">
          {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
            <div key={i} className="w-full bg-foreground/10 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "gowild",
    name: "Gowild Tours Platform",
    category: "Eco-Tourism Booking Engine",
    problem: "High-performance booking with real-time availability and payments.",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    icon: Shield,
    color: "from-emerald-500/20 to-green-500/5",
    accent: "bg-emerald-500",
    mockup: (
      <div className="relative w-full h-full p-4 flex flex-col gap-3 opacity-80">
        <div className="flex gap-2 mb-2">
          <div className="h-8 w-8 rounded-full border border-border/50 bg-background/50" />
          <div className="flex-1 h-8 rounded-lg border border-border/50 bg-background/50" />
        </div>
        <div className="flex-1 rounded-lg border border-border/50 bg-background/50 p-3 flex flex-col gap-2">
          <div className="h-2 w-1/2 bg-foreground/20 rounded-full" />
          <div className="h-2 w-3/4 bg-foreground/10 rounded-full" />
          <div className="h-2 w-2/3 bg-foreground/10 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    id: "havichem",
    name: "HaviChem System",
    category: "Corporate Management System",
    problem: "Automating scheduling, invoicing, and operations.",
    tech: ["React", "Node.js", "Tailwind"],
    icon: Bot,
    color: "from-purple-500/20 to-fuchsia-500/5",
    accent: "bg-purple-500",
    mockup: (
      <div className="relative w-full h-full p-4 flex flex-col gap-2 opacity-80">
        <div className="w-2/3 h-6 rounded-lg bg-foreground/5 ml-auto border border-border/30" />
        <div className="w-3/4 h-12 rounded-lg bg-foreground/10 mr-auto border border-border/40 p-2">
          <div className="h-1.5 w-1/2 bg-foreground/20 rounded-full mb-1.5" />
          <div className="h-1.5 w-full bg-foreground/10 rounded-full" />
        </div>
        <div className="w-1/2 h-6 rounded-lg bg-foreground/5 ml-auto border border-border/30 mt-auto" />
      </div>
    ),
  },
];

export function InnovationLab() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="section-gradient-divider absolute top-0 left-0 right-0" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-foreground/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-xs font-medium border border-border/50 bg-foreground/5 text-foreground">
              Proprietary Products
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-semibold tracking-tighter text-foreground sm:text-5xl lg:text-6xl mb-6">
            FrantendX Innovation Lab
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed font-light">
            We don&apos;t just build for clients. We build for the future. Discover our portfolio of internal AI products and platforms.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Product Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-foreground/5 border border-border/50 flex items-center justify-center">
                    <product.icon className="h-5 w-5 text-foreground opacity-80" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground mt-1">
                      {product.category}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                      Problem Solved
                    </h4>
                    <p className="text-foreground/90 font-light">
                      {product.problem}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                      Technology
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.tech.map((t, i) => (
                         <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-md bg-foreground/[0.03] border border-border/40 text-foreground/80">
                           {t}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity group"
                  >
                    View product details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Product Visual Mockup */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full rounded-2xl border border-border/40 bg-foreground/[0.02] overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                  
                  {/* Abstract UI Window */}
                  <div className="absolute inset-x-8 inset-y-8 rounded-xl border border-border/40 bg-background/80 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
                    {/* Window Header */}
                    <div className="h-8 border-b border-border/40 bg-foreground/[0.02] flex items-center px-3 gap-1.5 shrink-0">
                      <div className="h-2 w-2 rounded-full bg-foreground/20" />
                      <div className="h-2 w-2 rounded-full bg-foreground/20" />
                      <div className="h-2 w-2 rounded-full bg-foreground/20" />
                    </div>
                    {/* Window Content */}
                    <div className="flex-1 relative">
                       {product.mockup}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
