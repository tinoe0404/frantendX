"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Autonomous AI Agents",
    description: "Custom agent workflows that automate complex multi-step business operations.",
    href: "/services",
  },
  {
    title: "Business Automation",
    description: "End-to-end process synchronization eliminating repetitive operational friction.",
    href: "/services",
  },
  {
    title: "Cloud & SaaS Platforms",
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

        {/* Big 2-line headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
          Intelligent Solutions.
          <br />
          <span className="text-[#D4693A]">Engineered to Scale.</span>
        </h2>

        {/* Optional one-line subtext */}
        <p className="body-calm text-base sm:text-lg mb-14 max-w-[60ch]">
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
                <h3 className="text-2xl font-bold tracking-tight text-[#141210] dark:text-[#FAF7F4] font-headline mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#141210] dark:text-[#FAF7F4] hover:text-[#D4693A] dark:hover:text-[#D4693A] transition-colors group"
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
