"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "FrantendX completely transformed our online presence. Our conversion rate tripled within three months of launching the new platform.",
    client: "Sarah M.",
    company: "TechVenture Co.",
  },
  {
    id: 2,
    content:
      "The team delivered beyond expectations. Their attention to performance and SEO gave us a competitive edge we didn't know was possible.",
    client: "David K.",
    company: "GrowthLab Inc.",
  },
  {
    id: 3,
    content:
      "Working with FrantendX felt like having a senior engineering team on demand. The quality of code and architecture is outstanding.",
    client: "Amira R.",
    company: "Skyline Digital",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-screen-xl px-4 md:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Trusted by innovators
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {"Don't just take our word for it. Here's what our partners say about working with us."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${t.content}"`}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {t.client.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {t.client}
                  </h4>
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
