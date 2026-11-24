import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Zap, Scaling, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Frantiva Technologies",
  description:
    "Learn about Frantiva Technologies, a leading digital technology company specializing in AI solutions and high-performance software engineering.",
};

const values = [
  {
    step: "01",
    icon: CheckCircle2,
    title: "Transparency",
    description:
      "No hidden costs and zero ambiguity. We maintain open communication and architectural visibility across every stage of the lifecycle.",
  },
  {
    step: "02",
    icon: Zap,
    title: "Engineering speed",
    description:
      "We iterate rapidly without sacrificing technical rigor. Fast loading, optimized runtimes, and immediate business value are non-negotiable.",
  },
  {
    step: "03",
    icon: Scaling,
    title: "Scalability",
    description:
      "We design resilient architectures that handle exponential data traffic, concurrent user loads, and continuous feature expansion seamlessly.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* Page Hero */}
        <section className="mb-24 md:mb-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
            <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
            <span>01 · ABOUT FRANTIVA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-6 max-w-4xl leading-[1.04]">
            Building the future of
            <br />
            <span className="text-[#D4693A]">digital experiences.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#5F5A55] dark:text-[#A09A93] leading-relaxed max-w-[56ch] [text-wrap:pretty] mb-10">
            We are more than just developers. We are strategic product engineers and AI architects,
            building reliable digital infrastructure that drives measurable commercial growth.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full text-sm font-semibold bg-[#D4693A] text-white hover:bg-[#c35c30] transition-colors shadow-sm"
              asChild
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Link
              href="/services"
              className="text-sm font-medium text-[#5F5A55] dark:text-[#A09A93] hover:text-[#141210] dark:hover:text-[#FAF7F4] transition-colors py-2 px-3 inline-flex items-center gap-1 group"
            >
              <span>Explore services</span>
              <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
            </Link>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-24 md:mb-32">
          <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 sm:p-12 md:p-16">
            <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
              <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
              <span>02 · OUR MISSION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-6 max-w-2xl">
              Bridging technology and business goals.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5F5A55] dark:text-[#A09A93] leading-relaxed max-w-[56ch] [text-wrap:pretty]">
              <p>
                Frantiva Technologies was founded to bridge the gap between complex software engineering and tangible business outcomes.
                We believe that every modern enterprise deserves digital systems that are not only elegant, but fundamentally robust,
                secure, and engineered to scale.
              </p>
              <p>
                Our engineering team leverages cutting-edge software paradigms, autonomous AI agents, and cloud computing architectures
                to deliver platforms that stand the test of time, high concurrency, and changing market conditions.
              </p>
              <p className="font-semibold text-[#141210] dark:text-[#FAF7F4] pt-2">
                Innovate. Build. Scale with Frantiva Technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
            <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
            <span>03 · GUIDING VALUES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
            Our core principles.
          </h2>
          <p className="text-base sm:text-lg text-[#5F5A55] dark:text-[#A09A93] leading-relaxed mb-12 max-w-[56ch] [text-wrap:pretty]">
            The engineering tenets that guide every line of code, architectural review, and client engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 flex flex-col justify-between hover:border-[#D4693A]/50 transition-colors duration-200"
              >
                <div>
                  <div className="w-11 h-11 rounded-full border-2 border-[#D4693A] flex items-center justify-center font-headline font-bold text-sm tracking-[-0.005em] [word-spacing:0.08em] text-[#D4693A] mb-6">
                    {v.step}
                  </div>
                  <h3 className="text-xl font-bold tracking-[-0.005em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#5F5A55] dark:text-[#A09A93] leading-relaxed max-w-[56ch] [text-wrap:pretty]">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
