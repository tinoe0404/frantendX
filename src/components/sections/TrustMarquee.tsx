"use client";

import { motion } from "framer-motion";

const businessMessages = [
  "Drive Revenue Growth",
  "Automate Operations",
  "Scale Your Business",
  "Attract More Customers",
  "Solve Business Problems",
  "Streamline Processes",
  "Increase Efficiency",
  "Build Digital Presence",
];

function BusinessMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-3 px-8 select-none shrink-0">
      <div className="h-1.5 w-1.5 rounded-full bg-brand/60" />
      <span className="text-sm font-semibold text-foreground/60 whitespace-nowrap tracking-wide">
        {message}
      </span>
    </div>
  );
}

export function TrustMarquee() {
  const doubled = [...businessMessages, ...businessMessages];

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
          How We Help Your Business Grow
        </motion.p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-infinite-scroll">
          {doubled.map((message, i) => (
            <BusinessMessage key={`${message}-${i}`} message={message} />
          ))}
        </div>
      </div>
    </section>
  );
}
