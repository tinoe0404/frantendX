import { Metadata } from "next";
import { CheckCircle2, Zap, Scaling } from "lucide-react";
import { GradientMesh } from "@/components/GradientMesh";
import { GridPattern } from "@/components/GridPattern";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about FrantendX Digital Solutions, a leading digital agency specializing in high-performance web development.",
};

const values = [
  {
    icon: CheckCircle2,
    title: "Transparency",
    description: "No hidden costs. Clear communication. We keep you in the loop at every stage of the project lifecycle.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "We build fast, and our sites load faster. Performance is not an afterthought; it is a priority.",
  },
  {
    icon: Scaling,
    title: "Scalability",
    description: "Solutions that grow with you. We design architectures that handle increased traffic and new features effortlessly.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <GradientMesh />
        <GridPattern />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_hsl(var(--background))_80%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 text-center z-10">
          <p className="mb-4 text-sm font-medium text-brand tracking-widest uppercase">
            About us
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance mb-6">
            Building the Future of <span className="hero-gradient-text">Digital Experiences.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We are more than just developers. We are your strategic partners in the digital age, driven by innovation and grounded in quality.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 relative">
        <div className="section-gradient-divider absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 space-y-6">
              <p className="text-sm font-medium text-brand tracking-widest uppercase">
                Our mission
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Bridging technology and business goals
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                FrantendX Digital Solutions was founded to bridge the gap between complex technology and business goals.
                We believe that every business deserves a digital presence that is not only beautiful but also
                fundamentally robust, secure, and scalable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team leverages cutting-edge technologies, AI, and Cloud Computing
                to deliver solutions that stand the test of time and market shifts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We build smart digital solutions — from websites (static & dynamic) to mobile apps and custom software.
                Empowering businesses with reliable tech tailored to their goals.
                <span className="block mt-4 font-medium text-foreground">Innovate. Build. Grow with FrantendX Digital Solutions.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 relative">
        <div className="section-gradient-divider absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="mb-3 text-sm font-medium text-brand tracking-widest uppercase">
              What drives us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              The principles that guide every line of code we write.
            </p>
          </div>

          <div className="bento-grid">
            {values.map((v) => (
              <div key={v.title} className="glass-card gradient-border rounded-xl p-6 group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-brand transition-colors">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
