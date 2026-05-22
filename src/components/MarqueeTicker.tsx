"use client";
import { motion } from "framer-motion";

const clients = [
  { name: "HaviChem Cleaning Services", icon: "🏢" },
  { name: "Gowild Tours", icon: "🦁" },
  { name: "Nomadic Trails Tours", icon: "🗺️" },
  { name: "Educating Rural Girl Child of Zimbabwe", icon: "📚" },
  { name: "OSHY WIRES GURU", icon: "⚡" },
  { name: "YETAURA INVESTMENTS (PRIVATE) LIMITED", icon: "📈" },
];

export function MarqueeTicker() {
  const doubled = [...clients, ...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-6 border-y border-border/30">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-5 py-2 rounded-full border border-border/40 bg-card/30 backdrop-blur-sm hover:border-brand/30 hover:bg-brand/5 transition-all duration-300 shrink-0 group"
          >
            <span className="text-base grayscale group-hover:grayscale-0 transition-all duration-300">
              {client.icon}
            </span>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground whitespace-nowrap transition-colors duration-300">
              {client.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
