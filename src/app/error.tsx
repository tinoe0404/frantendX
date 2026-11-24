"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center py-24">
      <div className="w-16 h-16 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] flex items-center justify-center text-[#D4693A] mb-6">
        <AlertTriangle className="h-7 w-7" aria-hidden="true" />
      </div>

      <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
        <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
        <span>SYSTEM ERROR</span>
      </div>

      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
        Something Went Wrong.
      </h2>

      <p className="body-calm text-base sm:text-lg mb-8 max-w-md leading-relaxed">
        An unexpected runtime exception was intercepted. Please retry or return to safety.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Button
          onClick={() => reset()}
          size="lg"
          className="h-12 px-8 rounded-full bg-[#D4693A] text-white hover:bg-[#c35c30] text-sm font-semibold transition-colors shadow-sm"
        >
          Try again
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 px-8 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <Link href="/">Return to homepage</Link>
        </Button>
      </div>
    </div>
  );
}
