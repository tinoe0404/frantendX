"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Discovery",
    description: "Analyze core business requirements, system constraints, and map out project milestones.",
  },
  {
    step: "2",
    title: "Architecture",
    description: "Design technical specifications, data models, and user journeys before writing production code.",
  },
  {
    step: "3",
    title: "Engineering",
    description: "Develop resilient software and autonomous agents with comprehensive automated testing.",
  },
  {
    step: "4",
    title: "Deployment",
    description: "Execute zero-downtime production launches, security audits, and continuous SLA monitoring.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Eyebrow: Mono format "— 03 · HOW WE WORK" */}
        <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
          <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
          <span>03 · HOW WE WORK</span>
        </div>

        {/* Big 2-line headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
          From First Discovery to
          <br />
          <span className="text-[#D4693A]">Production Deployment.</span>
        </h2>

        {/* Optional one-line subtext */}
        <p className="body-calm text-base sm:text-lg mb-14 max-w-[60ch]">
          A proven four-step methodology that delivers predictable engineering outcomes.
        </p>

        {/* Cards Grid: White, 24px radius, 1px border #EAE4DE, 32px padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 flex flex-col justify-between"
            >
              <div>
                {/* Simple numbered circle with orange outline */}
                <div className="w-11 h-11 rounded-full border-2 border-[#D4693A] flex items-center justify-center font-headline font-bold text-base text-[#D4693A] mb-6">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#141210] dark:text-[#FAF7F4] font-headline mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5F5A55] dark:text-[#A09A93] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
