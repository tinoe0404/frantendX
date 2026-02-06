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
    <div className="group flex items-center gap-2 px-6 select-none">
      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted/50 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
        <span className="text-xs font-bold text-muted-foreground transition-colors group-hover:text-primary">
          {name.charAt(0)}
        </span>
      </div>
      <span className="text-sm font-semibold text-muted-foreground/50 transition-colors group-hover:text-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function TrustMarquee() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-screen-xl px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-medium text-muted-foreground tracking-wide uppercase"
        >
          Trusted by forward-thinking companies
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-infinite-scroll">
          {doubled.map((company, i) => (
            <LogoPlaceholder key={`${company}-${i}`} name={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
