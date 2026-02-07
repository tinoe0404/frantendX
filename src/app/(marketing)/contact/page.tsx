import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with FrantendX Digital Solutions for your next digital project.",
};

export default function ContactPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                Get in touch
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                {"Let's build your next project."}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to scale? Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-brand shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <a
                    href="mailto:info@frantendxsolutions.co.zw"
                    className="text-sm text-muted-foreground hover:text-brand transition-colors underline underline-offset-2"
                  >
                    info@frantendxsolutions.co.zw
                  </a>
                  <br />
                  <a
                    href="mailto:billing@frantendxsolutions.co.zw"
                    className="text-sm text-muted-foreground hover:text-brand transition-colors underline underline-offset-2"
                  >
                    billing@frantendxsolutions.co.zw
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-brand shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground">Digital Remote (Serving Clients Worldwide)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-brand shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a
                    href="tel:+2630780885780"
                    className="text-sm text-muted-foreground hover:text-brand transition-colors underline underline-offset-2"
                  >
                    0780 885 780
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-border">
              <CardContent className="p-6">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  {'"FrantendX Digital Solutions delivered our SaaS dashboard 2 weeks ahead of schedule. The code quality is exceptional."'}
                </p>
                <p className="text-xs font-semibold mt-4 text-foreground uppercase tracking-wider">
                  -- Happy Client
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
            <h2 className="text-xl font-bold text-foreground mb-8">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
