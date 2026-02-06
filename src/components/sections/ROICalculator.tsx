"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign } from "lucide-react";

export function ROICalculator() {
  const [monthlySales, setMonthlySales] = useState(5000);
  const multiplier = 3;
  const projected = useMemo(() => monthlySales * multiplier, [monthlySales]);
  const growth = useMemo(() => projected - monthlySales, [projected, monthlySales]);

  const fmt = (v: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(v);

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Why invest
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Software that pays for itself
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Our clients see an average 3x return on their digital investment within 12 months. Use the calculator to see your projected growth.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-foreground mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">Avg. Growth</span>
                </div>
                <p className="text-2xl font-bold text-foreground">3x</p>
                <p className="text-xs text-muted-foreground mt-0.5">Revenue multiplier</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-foreground mb-1">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm font-medium">ROI Period</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{"<12mo"}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Time to payback</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <h3 className="text-base font-semibold text-foreground mb-6">ROI Calculator</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="sales-slider" className="text-sm text-muted-foreground">
                  Current Monthly Sales
                </label>
                <span className="text-sm font-semibold text-foreground tabular-nums">
                  {fmt(monthlySales)}
                </span>
              </div>
              <input
                id="sales-slider"
                type="range"
                min={1000}
                max={100000}
                step={1000}
                value={monthlySales}
                onChange={(e) => setMonthlySales(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-secondary accent-foreground"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$1,000</span>
                <span>$100,000</span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-secondary p-4">
                <span className="text-sm text-muted-foreground">Projected Monthly</span>
                <span className="text-lg font-bold text-foreground tabular-nums">{fmt(projected)}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-secondary p-4">
                <span className="text-sm text-muted-foreground">Monthly Growth</span>
                <span className="text-lg font-bold text-foreground tabular-nums">+{fmt(growth)}</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-muted-foreground text-center">
              Based on average client performance data. Results may vary.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
