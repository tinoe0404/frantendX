"use client";
import { motion } from "framer-motion";

const tags = [
  "Websites",
  "Business Systems",
  "E-commerce",
  "Automation",
  "Mobile Apps",
  "Performance & SEO",
  "Cloud Infrastructure",
  "API Development",
];

export function MarqueeTicker() {
  const doubled = [...tags, ...tags]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden py-4 border-y border-border/40">
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="text-sm text-muted-foreground whitespace-nowrap px-4 py-1.5 rounded-full border border-border/50"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
