"use client";

import { motion } from "framer-motion";

const clients = [
  "HaviChem Cleaning Services",
  "Gowild Tours",
  "Nomadic Trails Tours",
  "Educating Rural Girl Child",
  "Oshy Wires Guru",
  "Yetaura Investments",
  "Zonkezonke",
];

export function MarqueeTicker() {
  const doubled = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 text-center mb-10">
        {/* Centered small eyebrow in mono, muted: format "— 01 · PARTNERS & CLIENTS" */}
        <div className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
          <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
          <span>01 · PARTNERS &amp; CLIENTS</span>
        </div>
      </div>

      <div className="relative overflow-hidden w-full">
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-28 bg-gradient-to-r from-[#FAF7F4] dark:from-[#141210] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-28 bg-gradient-to-l from-[#FAF7F4] dark:from-[#141210] to-transparent" />

        <motion.div
          className="flex gap-4 w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 55,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-12 px-6 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] shrink-0 transition-colors duration-150"
            >
              <span className="text-sm font-medium tracking-tight text-[#5F5A55] dark:text-[#A09A93] grayscale hover:text-[#141210] dark:hover:text-[#FAF7F4] transition-colors whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
