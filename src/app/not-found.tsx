import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center py-24">
      <div className="w-16 h-16 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] flex items-center justify-center text-[#D4693A] mb-6">
        <FileQuestion className="h-7 w-7" aria-hidden="true" />
      </div>

      <div className="flex items-center gap-2 mb-4 font-mono text-[12px] font-normal uppercase tracking-[0.1em] text-[#5F5A55] dark:text-[#A09A93]">
        <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
        <span>404 · Page not found</span>
      </div>

      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
        Page not found.
      </h1>

      <p className="font-sans text-[#5F5A55] dark:text-[#A09A93] text-base sm:text-lg mb-8 max-w-[56ch] [text-wrap:pretty] leading-relaxed">
        The page you requested does not exist or has been relocated.
      </p>

      <Button
        asChild
        size="lg"
        className="h-12 px-8 rounded-full bg-[#D4693A] text-white hover:bg-[#c35c30] text-sm font-semibold transition-colors shadow-sm"
      >
        <Link href="/">Return to homepage</Link>
      </Button>
    </div>
  );
}
