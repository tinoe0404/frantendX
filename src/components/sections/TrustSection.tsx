"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "TensorFlow",
  "OpenAI",
  "AWS",
  "PostgreSQL",
];

const industries = [
  "Financial Technology",
  "Logistics & Fleet Systems",
  "Real Estate & Property",
  "Healthcare & Diagnostics",
  "Commercial Operations",
];

export function TrustSection() {
  return (
    <section className="py-24 md:py-32 border-b border-[#EAE7E3] dark:border-[#222222] bg-[#FAF6F2] dark:bg-[#111111]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left / Main Statement */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#666666] dark:text-[#8E8E8E]">
                <span className="w-1.5 h-1.5 bg-[#F26A38] inline-block" />
                <span>ARCHITECTURAL CREDIBILITY</span>
              </div>
              <motion.h3 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#FAF6F2] leading-tight"
              >
                Trusted by visionaries to build mission-critical systems.
              </motion.h3>
            </div>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-base text-[#666666] dark:text-[#8E8E8E] leading-relaxed"
            >
              We treat software development as an engineering discipline. Every product is constructed with fault tolerance, defensive security postures, and clean APIs designed to scale for decades.
            </motion.p>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="pt-6 border-t border-[#EAE7E3] dark:border-[#222222] flex items-baseline gap-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#F26A38] tracking-tighter font-mono">
                98%
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111111] dark:text-[#FAF6F2]">
                  Client Retention Rate
                </p>
                <p className="text-xs text-[#666666] dark:text-[#8E8E8E]">
                  Multi-year enterprise engagements &amp; SLA compliance
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Columns: Tech Stack and Industries */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 lg:border-l lg:border-[#EAE7E3] lg:dark:border-[#222222] lg:pl-16">
            {/* Core Technologies */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE7E3] dark:border-[#222222]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#111111] dark:text-[#FAF6F2]">
                  ENGINEERING STACK
                </h4>
                <span className="font-mono text-[10px] text-[#666666] dark:text-[#8E8E8E]">[08 CORE]</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {technologies.map((tech) => (
                  <div 
                    key={tech} 
                    className="flex items-center gap-2 p-3 rounded-sm border border-[#EAE7E3] dark:border-[#222222] bg-[#FFFFFF] dark:bg-[#141414] text-xs font-mono font-medium text-[#111111] dark:text-[#FAF6F2] hover:border-[#F26A38] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-none bg-[#111111]/30 dark:bg-[#FAF6F2]/30" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industries Served */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE7E3] dark:border-[#222222]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#111111] dark:text-[#FAF6F2]">
                  DOMAINS &amp; SECTORS
                </h4>
                <span className="font-mono text-[10px] text-[#666666] dark:text-[#8E8E8E]">[GLOBAL]</span>
              </div>
              <ul className="space-y-3 font-sans">
                {industries.map((ind, i) => (
                  <li 
                    key={ind}
                    className="flex items-center justify-between p-3 rounded-sm border border-[#EAE7E3] dark:border-[#222222] bg-[#FFFFFF] dark:bg-[#141414] text-xs text-[#111111] dark:text-[#FAF6F2] hover:border-[#111111]/40 dark:hover:border-[#FAF6F2]/40 transition-colors"
                  >
                    <span>{ind}</span>
                    <span className="font-mono text-[10px] text-[#666666] dark:text-[#8E8E8E]">0{i + 1}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
