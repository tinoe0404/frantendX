"use client";
import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";
import { staggerContainer } from "@/lib/motion-variants";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Analyze needs, define success metrics, and map out the roadmap for your project.",
    icon: Search,
    color: "hsl(173 58% 39%)",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes, high-fidelity prototypes, and user experience validation before code.",
    icon: Palette,
    color: "hsl(199 80% 55%)",
  },
  {
    num: "03",
    title: "Development",
    desc: "Clean, scalable code with CI/CD pipelines, testing, and API integration.",
    icon: Code,
    color: "hsl(220 70% 60%)",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Performance testing, SEO optimization, CDN deployment, and ongoing support.",
    icon: Rocket,
    color: "hsl(262 60% 60%)",
  },
];

export function ProcessSteps() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="glass-card rounded-xl p-6 group relative overflow-hidden"
        >
          {/* Background gradient on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 100%, ${step.color}10, transparent 60%)`,
            }}
          />

          <div className="relative">
            {/* Step number + icon */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs font-mono tracking-wider font-bold"
                style={{ color: step.color }}
              >
                {step.num}
              </span>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${step.color}15`,
                  color: step.color,
                }}
              >
                <step.icon className="h-4 w-4" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 group-hover:text-foreground transition-colors">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.desc}
            </p>

            {/* Animated progress bar */}
            <div className="mt-5 h-[2px] rounded-full bg-border/30 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: step.color }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 + i * 0.15,
                }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
