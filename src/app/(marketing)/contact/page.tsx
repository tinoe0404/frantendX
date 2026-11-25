import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildPageMetadata, buildBreadcrumbs } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact us",
  description:
    "Get in touch with Frantiva Technologies for your next software project. We build custom web apps, mobile apps, AI agents, and enterprise software from Harare, Zimbabwe. Response within 24 hours.",
  path: "/contact",
  ogTitle: "Contact Frantiva Technologies — Start Your Next Project",
  ogDescription:
    "Ready to build? Contact Frantiva Technologies for custom software, AI agents, and digital products. Based in Harare, delivering across Africa.",
});

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const trustedClients = [
  "HaviChem Cleaning Services",
  "Gowild Tours",
  "Nomadic Trails Tours",
  "Educating Rural Girl Child",
  "Oshy Wires Guru",
  "Yetaura Investments",
  "Zonkezonke",
];

export default function ContactPage() {
  return (
    <div className="py-24 md:py-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4 font-mono text-[12px] font-normal uppercase tracking-[0.1em] text-[#5F5A55] dark:text-[#A09A93]">
          <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
          <span>01 · Get in touch</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
                Let&apos;s build your
                <br />
                <span className="text-[#D4693A]">next project.</span>
              </h1>
              <p className="font-sans text-[#5F5A55] dark:text-[#A09A93] text-base sm:text-lg max-w-[56ch] [text-wrap:pretty]">
                Ready to engineer your next software system or deploy autonomous AI workflows?
                Fill out the project scope and our technical directors will respond within 24 hours.
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-[0.1em] text-[#5F5A55] dark:text-[#A09A93] mb-4">
                Direct channels
              </h2>
              <div className="space-y-4">
                <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-6 flex items-start gap-4 hover:border-[#D4693A]/50 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] flex items-center justify-center text-[#D4693A] shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-base tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] mb-1">
                      Email inquiries
                    </h3>
                    <a
                      href="mailto:info@frantendxsolutions.co.zw"
                      className="block text-sm text-[#5F5A55] dark:text-[#A09A93] hover:text-[#141210] dark:hover:text-[#FAF7F4] transition-colors"
                    >
                      info@frantendxsolutions.co.zw
                    </a>
                    <a
                      href="mailto:billing@frantendxsolutions.co.zw"
                      className="block text-sm text-[#5F5A55] dark:text-[#A09A93] hover:text-[#141210] dark:hover:text-[#FAF7F4] transition-colors mt-0.5"
                    >
                      billing@frantendxsolutions.co.zw
                    </a>
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-6 flex items-start gap-4 hover:border-[#D4693A]/50 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] flex items-center justify-center text-[#D4693A] shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-base tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] mb-1">
                      Direct phone &amp; WhatsApp
                    </h3>
                    <a
                      href="tel:+263780885780"
                      className="text-sm text-[#5F5A55] dark:text-[#A09A93] hover:text-[#141210] dark:hover:text-[#FAF7F4] transition-colors"
                    >
                      +263 78 088 5780
                    </a>
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-6 flex items-start gap-4 hover:border-[#D4693A]/50 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] flex items-center justify-center text-[#D4693A] shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-base tracking-[-0.005em] [word-spacing:0.08em] text-[#141210] dark:text-[#FAF7F4] mb-1">
                      Location &amp; delivery
                    </h3>
                    <p className="text-sm text-[#5F5A55] dark:text-[#A09A93] max-w-[56ch] [text-wrap:pretty]">
                      Harare, Zimbabwe · Global Remote Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted Clients Pill Strip */}
            <div className="pt-6 border-t border-[#EAE4DE] dark:border-[#2B2724]">
              <span className="font-mono text-[12px] font-normal text-[#5F5A55] dark:text-[#A09A93] uppercase tracking-[0.1em] block mb-4">
                Organizations we build for
              </span>
              <div className="flex flex-wrap gap-2">
                {trustedClients.map((client, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#FFFFFF] dark:bg-[#1D1A17] border border-[#EAE4DE] dark:border-[#2B2724] text-[#5F5A55] dark:text-[#A09A93]"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-8 sm:p-12">
            <h2 className="text-2xl font-bold font-headline tracking-[-0.005em] [word-spacing:0.08em] [text-wrap:balance] text-[#141210] dark:text-[#FAF7F4] mb-2">
              Send us a message
            </h2>
            <p className="font-sans text-sm text-[#5F5A55] dark:text-[#A09A93] mb-8 max-w-[56ch] [text-wrap:pretty]">
              Tell us about your objectives, timeline, and technical requirements.
            </p>
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
