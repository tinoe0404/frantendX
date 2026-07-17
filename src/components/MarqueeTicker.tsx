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
    <div className="relative overflow-hidden py-8 border-y border-border/30">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-border/50 bg-foreground/[0.02] hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-300 shrink-0 group"
          >
            <span className="text-base grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
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
