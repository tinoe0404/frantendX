"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const testimonials = [
  {
    quote:
      "Frantiva Technologies completely transformed our online presence. Our new platform handles bookings flawlessly, and the performance is incredible. It's been a game-changer for our tours.",
    name: "Management Team",
    role: "Gowild Tours",
    initials: "GT",
  },
  {
    quote:
      "Their development team built an internal system that automated our scheduling and client management seamlessly. It saved us hundreds of hours in operational work.",
    name: "Operations Director",
    role: "HaviChem Cleaning Services",
    initials: "HC",
  },
  {
    quote:
      "Working with Frantiva Technologies allowed us to significantly expand our digital reach. The platform they built is accessible, fast, and beautifully showcases our mission.",
    name: "Director",
    role: "Educating Rural Girl Child of Zimbabwe",
    initials: "NGO",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Section gradient divider at top */}
      <div className="section-gradient-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="mb-3 text-sm font-medium text-brand tracking-widest uppercase">
            What clients say
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by growing businesses
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="glass-card rounded-xl p-8 h-full relative overflow-hidden group">
                {/* Decorative quote icon */}
                <div className="absolute top-6 right-6 text-brand/10 group-hover:text-brand/20 transition-colors duration-500">
                  <Quote className="h-12 w-12" />
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed text-base mb-6 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand/40 via-blue-500/30 to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
