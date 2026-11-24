"use client";

import { motion, useMotionValue, useSpring, useInView, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, value, motionVal]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

// TODO: Replace {{STAT_1_VALUE}} and {{STAT_2_VALUE}} with verified infrastructure SLAs and production uptime metrics from verified monitoring dashboards. Do not invent numbers.
// Alternatively, replace with verifiable portfolio metrics such as:
// - 3 Proprietary platforms built & operated (Zonkezonke, Gowild, HaviChem)
// - 100% IP & source code transferred
const stats = [
  {
    isAnimated: true,
    value: 10,
    suffix: "+",
    display: "10+",
    label: "Partner businesses",
    // Verified against active portfolio clients
  },
  {
    isAnimated: false,
    display: "{{STAT_1_VALUE}}",
    label: "Production uptime SLA",
    // TODO: Verify exact historical production uptime SLA metric from cloud telemetry logs
  },
  {
    isAnimated: false,
    display: "{{STAT_2_VALUE}}",
    label: "Monitoring & support",
    // TODO: Verify contractual response time and coverage hours from service agreements
  },
];

export function StatsCounter() {
  return (
    <div className="w-full">
      <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EAE4DE] dark:divide-[#2B2724]">
          {stats.map((stat, i) => {
            const isPlaceholder = stat.display.startsWith("{{");

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="min-w-0 px-6 sm:px-8 py-8 sm:py-10 flex flex-col items-start justify-center overflow-hidden"
              >
                {/* Fixed height container to keep labels baseline-aligned across all 3 columns */}
                <div className="h-14 sm:h-16 lg:h-18 flex items-center mb-2 max-w-full overflow-hidden">
                  {stat.isAnimated && stat.value !== undefined ? (
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] font-headline max-w-full truncate">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                  ) : isPlaceholder ? (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#D4693A]/10 border border-dashed border-[#D4693A]/40 text-[#D4693A] font-mono text-xs sm:text-sm lg:text-base font-semibold tracking-normal max-w-full truncate select-all">
                      {stat.display}
                    </span>
                  ) : (
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] font-headline max-w-full truncate">
                      {stat.display}
                    </p>
                  )}
                </div>

                <p className="text-sm font-medium text-[#5F5A55] dark:text-[#A09A93] truncate max-w-full">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
