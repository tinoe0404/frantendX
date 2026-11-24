"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 sm:p-12 md:p-16 text-left">
          
          {/* Eyebrow: Mono format "— 05 · START A CONVERSATION" */}
          <div className="flex items-center gap-2 mb-6 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
            <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
            <span>05 · START A CONVERSATION</span>
          </div>

          <div className="max-w-3xl flex flex-col items-start text-left">
            <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline leading-[1.08] mb-6">
              <span>Software that solves real problems.</span>
              <br />
              <span className="text-[#D4693A]">AI that creates real possibilities.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-10 max-w-[56ch] [text-wrap:pretty]">
              Partner with Frantiva Technologies to design, engineer, and deploy scalable software platforms and intelligent automated systems.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button
                size="lg"
                className="h-13 px-8 rounded-full text-base font-semibold bg-[#D4693A] text-white hover:bg-[#c35c30] active:bg-[#b55227] transition-all duration-200 shadow-[0_2px_10px_rgba(212,105,58,0.22)] inline-flex items-center gap-2"
                asChild
              >
                <Link href="/contact">
                  <span>Start a project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Link
                href="/services"
                className="text-base font-medium text-[#141210] dark:text-[#FAF7F4] hover:text-[#D4693A] dark:hover:text-[#D4693A] transition-colors duration-200 inline-flex items-center gap-1.5 group py-2"
              >
                <span>Explore our work</span>
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
