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

// TODO: Add other stat columns back when real, verified figures are provided.
// Placeholder values are completely removed. Only verified defensible data is rendered.
const stats = [
  {
    isAnimated: true,
    value: 10,
    suffix: "+",
    display: "10+",
    label: "Partner businesses",
    // Verified against active portfolio clients
  },
];

export function StatsCounter() {
  const stat = stats[0];

  return (
    <div className="w-full">
      <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-8 py-10 sm:py-12 flex flex-col items-center justify-center text-center"
        >
          <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] font-headline mb-2">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="text-sm sm:text-base font-medium text-[#5F5A55] dark:text-[#A09A93]">
            {stat.label}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
