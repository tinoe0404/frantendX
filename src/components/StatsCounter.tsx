"use client";
import { motion, useMotionValue, useSpring, useInView, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, value, motionVal]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "%", label: "Lighthouse scores" },
  { value: 24, suffix: "/7", label: "Support uptime" },
];

export function StatsCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10 border-t border-border mt-10">
      {stats.map((stat, i) => (
        <div key={i}>
          <p className="text-4xl font-bold">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
