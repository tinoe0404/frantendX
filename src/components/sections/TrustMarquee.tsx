"use client";

import { motion } from "framer-motion";

const companies = [
  "Acme Corp",
  "Apex Digital",
  "BoltTech",
  "NovaStar",
  "Quantum AI",
  "Skyline IO",
  "Vertex Labs",
  "Prism Co",
];

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5 px-8 select-none shrink-0">
      <span className="text-sm font-semibold text-muted-foreground/40 whitespace-nowrap tracking-wide uppercase">
        {name}
      </span>
    </div>
  );
}

export function TrustMarquee() {
  const doubled = [...companies, ...companies];

  return (
    <section className="border-y border-border bg-card/50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center text-xs font-medium text-muted-foreground tracking-widest uppercase"
        >
          Trusted by forward-thinking teams
        </motion.p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-infinite-scroll">
          {doubled.map((company, i) => (
            <LogoPlaceholder key={`${company}-${i}`} name={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
