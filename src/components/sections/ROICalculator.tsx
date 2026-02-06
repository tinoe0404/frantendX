"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, ArrowUpRight } from "lucide-react";

export function ROICalculator() {
  const [monthlySales, setMonthlySales] = useState(5000);
  const multiplier = 3;

  const projected = useMemo(
    () => monthlySales * multiplier,
    [monthlySales, multiplier]
  );
  const growth = useMemo(
    () => projected - monthlySales,
    [projected, monthlySales]
  );

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Why Invest
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              Software that pays for itself
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Our clients see an average 3x return on their digital investment
              within 12 months. Use the calculator to see your projected growth.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">Avg. Growth</span>
                </div>
                <p className="text-2xl font-bold text-foreground">3x</p>
                <p className="text-xs text-muted-foreground">Revenue multiplier</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm font-medium">ROI Period</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{"<12mo"}</p>
                <p className="text-xs text-muted-foreground">Time to payback</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-foreground mb-6">
              ROI Calculator
            </h3>

            {/* Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="sales-slider"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Current Monthly Sales
                </label>
                <span className="text-sm font-bold text-foreground tabular-nums">
                  {formatCurrency(monthlySales)}
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
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$1,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Projected Monthly
                    </p>
                  </div>
                </div>
                <p className="text-xl font-bold text-foreground tabular-nums">
                  {formatCurrency(projected)}
                </p>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                      Monthly Growth
                    </p>
                  </div>
                </div>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                  +{formatCurrency(growth)}
                </p>
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
