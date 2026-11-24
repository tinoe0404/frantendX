"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Autonomous AI agents",
    description: "Custom agent workflows that automate complex multi-step business operations.",
    href: "/services",
  },
  {
    title: "Business automation",
    description: "End-to-end process synchronization eliminating repetitive operational friction.",
    href: "/services",
  },
  {
    title: "Cloud & SaaS platforms",
    description: "High-performance distributed web applications built for reliability and scale.",
    href: "/services",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Eyebrow: Mono format "— 02 · WHAT WE BUILD" */}
        <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
          <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
          <span>02 · WHAT WE BUILD</span>
        </div>

        {/* Big 2-line headline in sentence case with display font rules */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
          Intelligent solutions.
          <br />
          <span className="text-[#D4693A]">Engineered to scale.</span>
        </h2>

        {/* Subtext: max-width 56ch, text-wrap pretty */}
        <p className="text-base sm:text-lg text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-14 max-w-[56ch] [text-wrap:pretty]">
          We design and build reliable AI agents, custom web platforms and automated infrastructure.
        </p>

        {/* 3-column grid on desktop, gaps ~28-32px, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 flex flex-col justify-between hover:border-[#D4693A]/50 transition-colors duration-200"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.005em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-8 max-w-[56ch] [text-wrap:pretty]">
                  {service.description}
                </p>
              </div>

              <div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5F5A55] hover:text-[#141210] dark:text-[#A09A93] dark:hover:text-[#FAF7F4] transition-colors group"
                >
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
