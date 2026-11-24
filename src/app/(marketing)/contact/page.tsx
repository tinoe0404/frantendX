import { Metadata } from "next";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Frantiva Technologies for your next digital project.",
};

const trustedClients = [
  "HaviChem Cleaning Services",
  "Gowild Tours",
  "Nomadic Trails Tours",
  "Educating Rural Girl Child of Zimbabwe",
  "OSHY WIRES GURU"
];

export default function ContactPage() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden min-h-[90vh]">
      {/* Background vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(173_58%_39%_/_0.15),_transparent_50%)]" aria-hidden="true" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-medium text-brand tracking-widest uppercase">
                Get in touch
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Let's build your <span className="hero-gradient-text">next project.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to scale? Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <a
                    href="mailto:info@frantendxsolutions.co.zw"
                    className="block text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    info@frantendxsolutions.co.zw
                  </a>
                  <a
                    href="mailto:billing@frantendxsolutions.co.zw"
                    className="block text-sm text-muted-foreground hover:text-brand transition-colors mt-1"
                  >
                    billing@frantendxsolutions.co.zw
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Digital Remote (Serving Clients Worldwide)</p>
                  <p className="text-sm text-muted-foreground mt-1">Harare, Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+2630780885780"
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    0780 885 780
                  </a>
                </div>
              </div>
            </div>

            {/* Trusted By Section */}
            <div className="pt-8 border-t border-border/50">
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Companies we've built for</h3>
              <ul className="space-y-3">
                {trustedClients.map((client, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="glass-card gradient-border rounded-2xl p-6 md:p-10 h-fit">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
