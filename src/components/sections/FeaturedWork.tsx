"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const projects = [
  {
    id: "gowild",
    title: "Eco-Tourism Booking Platform",
    client: "Gowild Tours & Nomadic Trails",
    industry: "Tourism & Logistics",
    description:
      "A high-performance booking engine with real-time multi-currency availability, automated guide dispatch, and integrated payment processing.",
    metrics: [
      { label: "Direct Bookings", value: "+45%" },
      { label: "Page Speed", value: "0.8s" },
    ],
    tags: ["Next.js", "PostgreSQL", "Stripe Core"],
  },
  {
    id: "havichem",
    title: "Corporate Operations Core",
    client: "HaviChem Cleaning Services",
    industry: "Industrial & Chemical",
    description:
      "Custom internal operations software automating multi-facility cleaning crew shifts, inventory buffers, and client self-service portals.",
    metrics: [
      { label: "Admin Time Saved", value: "60%" },
      { label: "Operational Speed", value: "3x" },
    ],
    tags: ["React Core", "Node.js", "Tailwind"],
  },
  {
    id: "rural-girl",
    title: "Outreach & Impact Portal",
    client: "Educating Rural Girl Child",
    industry: "NGO & Education",
    description:
      "An accessible, optimized web platform driving international donor engagement, scholarship verification, and community impact tracking.",
    metrics: [
      { label: "Donor Reach", value: "10K+" },
      { label: "Engagement Rate", value: "+120%" },
    ],
    tags: ["Next.js", "Headless CMS", "A11y"],
  },
];

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
          <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
          <span>01 · CASE STUDIES</span>
        </div>

        {/* Big 2-line headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
          Software Projects That
          <br />
          <span className="text-[#D4693A]">Deliver Real Results.</span>
        </h2>

        <p className="body-calm text-base sm:text-lg mb-14 max-w-[60ch]">
          We don&apos;t just build software — we engineer platforms that drive measurable commercial and operational outcomes.
        </p>

        {/* 3-column Grid of White 24px Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 flex flex-col justify-between hover:border-[#D4693A]/50 transition-colors duration-200"
            >
              <div>
                {/* Industry Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#FAF7F4] dark:bg-[#2B2724] text-[#5F5A55] dark:text-[#A09A93] border border-[#EAE4DE] dark:border-[#2B2724]">
                    {project.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#141210] dark:text-[#FAF7F4] font-headline mb-2">
                  {project.title}
                </h3>

                <p className="text-xs font-medium text-[#D4693A] mb-4">
                  Built for: {project.client}
                </p>

                <p className="text-sm text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-y border-[#EAE4DE] dark:border-[#2B2724]">
                  {project.metrics.map((metric, j) => (
                    <div key={j}>
                      <span className="text-2xl font-extrabold font-headline text-[#141210] dark:text-[#FAF7F4] block mb-0.5">
                        {metric.value}
                      </span>
                      <span className="text-xs text-[#5F5A55] dark:text-[#A09A93]">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded-full bg-[#FAF7F4] dark:bg-[#2B2724] text-[#5F5A55] dark:text-[#A09A93]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#141210] dark:text-[#FAF7F4] hover:text-[#D4693A] dark:hover:text-[#D4693A] transition-colors group"
                >
                  <span>Discuss a similar project</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
