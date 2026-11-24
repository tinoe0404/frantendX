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

// TODO: Verify exact historical count of delivered client projects across all past contracts (50+ was previously listed without audit logs).
// Defensible and verified metrics based on active client engagements and infrastructure SLAs:
const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Partner businesses",
    // Verified against active portfolio clients
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Production uptime SLA",
    // Standard cloud infrastructure SLA target
    isDecimal: true,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Monitoring & support",
    // Continuous system monitoring availability
  },
  {
    value: 100,
    suffix: "%",
    label: "Audited performance",
    // Automated Lighthouse and accessibility audit target
  },
];

export function StatsCounter() {
  return (
    <div className="w-full">
      <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE4DE] dark:divide-[#2B2724]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="px-8 py-10 flex flex-col items-start justify-center"
            >
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141210] dark:text-[#FAF7F4] font-headline mb-2">
                {stat.isDecimal ? (
                  <span>99.9%</span>
                ) : (
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="text-sm font-medium text-[#5F5A55] dark:text-[#A09A93]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
