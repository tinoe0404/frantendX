"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content: "FrantendX completely transformed our online presence. Our conversion rate tripled within three months of launching the new platform.",
    client: "Sarah M.",
    company: "TechVenture Co.",
  },
  {
    id: 2,
    content: "The team delivered beyond expectations. Their attention to performance and SEO gave us a competitive edge we didn't know was possible.",
    client: "David K.",
    company: "GrowthLab Inc.",
  },
  {
    id: 3,
    content: "Working with FrantendX felt like having a senior engineering team on demand. The code quality and architecture is outstanding.",
    client: "Amira R.",
    company: "Skyline Digital",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="mb-3 text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What our clients say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between"
            >
              <p className="text-foreground leading-relaxed mb-8">
                {`"${t.content}"`}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground text-sm font-semibold">
                  {t.client.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.client}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
