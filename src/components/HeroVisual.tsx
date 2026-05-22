"use client";

import { motion } from "framer-motion";

const codeLines = [
  { indent: 0, text: "const", keyword: "app", rest: " = createApp({" },
  { indent: 1, text: "framework:", keyword: '"Next.js"', rest: "," },
  { indent: 1, text: "performance:", keyword: '"blazing"', rest: "," },
  { indent: 1, text: "design:", keyword: '"premium"', rest: "," },
  { indent: 0, text: "});", keyword: "", rest: "" },
  { indent: 0, text: "", keyword: "", rest: "" },
  { indent: 0, text: "app.", keyword: "launch", rest: "();" },
];

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-2xl mt-16 md:mt-20"
    >
      {/* Browser mockup */}
      <div className="relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/20">
        {/* Gradient glow behind the card */}
        <div
          className="absolute -inset-1 rounded-xl opacity-30 blur-xl -z-10"
          style={{
            background:
              "linear-gradient(135deg, hsl(173 58% 39% / 0.4), hsl(220 70% 50% / 0.2), hsl(280 65% 60% / 0.2))",
          }}
        />

        {/* Browser toolbar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-card/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-6 rounded-md bg-muted/50 flex items-center px-3 text-xs text-muted-foreground font-mono">
              frantendxsolutions.co.zw
            </div>
          </div>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + i * 0.1,
                ease: "easeOut",
              }}
              className="flex"
              style={{ paddingLeft: `${line.indent * 24}px` }}
            >
              {line.text && (
                <span className="text-muted-foreground">{line.text} </span>
              )}
              {line.keyword && (
                <span className="text-brand font-medium">{line.keyword}</span>
              )}
              {line.rest && (
                <span className="text-muted-foreground">{line.rest}</span>
              )}
              {!line.text && !line.keyword && !line.rest && (
                <span>&nbsp;</span>
              )}
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <motion.span
            className="inline-block w-2 h-4 bg-brand ml-0.5"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </div>

      {/* Floating stats cards */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 px-4 py-3 rounded-lg border border-border/50 bg-card/90 backdrop-blur-xl shadow-lg"
      >
       
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute -right-4 md:-right-12 top-1/4 px-4 py-3 rounded-lg border border-border/50 bg-card/90 backdrop-blur-xl shadow-lg"
      >
      </motion.div>
    </motion.div>
  );
}
