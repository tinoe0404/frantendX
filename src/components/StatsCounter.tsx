"use client";
import { motion, useMotionValue, useSpring, useInView, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Zap, Award, Clock, Users } from "lucide-react";

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
  {
    value: 50,
    suffix: "+",
    label: "Projects delivered",
    icon: Zap,
    description: "Across web, mobile & cloud",
  },
  {
    value: 100,
    suffix: "%",
    label: "Lighthouse scores",
    icon: Award,
    description: "Performance & accessibility",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support uptime",
    icon: Clock,
    description: "Always available when you need us",
  },
  {
    value: 30,
    suffix: "+",
    label: "Happy clients",
    icon: Users,
    description: "Businesses we've helped grow",
  },
];

export function StatsCounter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass-card rounded-xl p-5 text-center group"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 text-brand mb-3 group-hover:bg-brand/20 transition-colors">
            <stat.icon className="h-5 w-5" />
          </div>
          <p className="text-3xl md:text-4xl font-bold text-foreground">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{stat.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
