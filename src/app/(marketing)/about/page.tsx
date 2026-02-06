import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, Scaling } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about FrantendX Digital Solutions, a leading digital agency specializing in Next.js and high-performance web development.",
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
    description: "We build fast, and our sites load faster. Performance is not an afterthought; it's a priority.",
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
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance mb-6">
            Driven by innovation, grounded in quality.
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
            We are more than just developers. We are your strategic partners in the digital age.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-24 border-y border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                FrantendX Digital Solutions was founded to bridge the gap between complex technology and business goals.
                We believe that every business deserves a digital presence that is not only beautiful but also
                fundamentally robust, secure, and scalable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team leverages cutting-edge technologies like Next.js, AI, and Cloud Computing
                to deliver solutions that stand the test of time and market shifts.
              </p>
            </div>
            <div className="relative h-[360px] w-full rounded-2xl border border-border bg-card flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Team / Office Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              The principles that guide every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((v) => (
              <Card key={v.title} className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
