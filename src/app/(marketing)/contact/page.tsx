import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Frantiva Technologies",
  description: "Get in touch with Frantiva Technologies for your next digital engineering project.",
};

const trustedClients = [
  "HaviChem Cleaning Services",
  "Gowild Tours",
  "Nomadic Trails Tours",
  "Educating Rural Girl Child",
  "OSHY WIRES GURU",
  "YETAURA INVESTMENTS",
  "Zonkezonke",
];

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-[#5F5A55] dark:text-[#A09A93]">
          <span className="w-4 h-[1.5px] bg-[#D4693A] inline-block" />
          <span>01 · GET IN TOUCH</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141210] dark:text-[#FAF7F4] font-headline mb-4">
                Let&apos;s Build Your
                <br />
                <span className="text-[#D4693A]">Next Project.</span>
              </h1>
              <p className="body-calm text-base sm:text-lg">
                Ready to engineer your next software system or deploy autonomous AI workflows?
                Fill out the project scope and our technical directors will respond within 24 hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] flex items-center justify-center text-[#D4693A] shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-[#141210] dark:text-[#FAF7F4] mb-1">
                    Email Inquiries
                  </h3>
                  <a
                    href="mailto:info@frantendxsolutions.co.zw"
                    className="block text-sm text-[#5F5A55] dark:text-[#A09A93] hover:text-[#D4693A] transition-colors"
                  >
                    info@frantendxsolutions.co.zw
                  </a>
                  <a
                    href="mailto:billing@frantendxsolutions.co.zw"
                    className="block text-sm text-[#5F5A55] dark:text-[#A09A93] hover:text-[#D4693A] transition-colors mt-0.5"
                  >
                    billing@frantendxsolutions.co.zw
                  </a>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] flex items-center justify-center text-[#D4693A] shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-[#141210] dark:text-[#FAF7F4] mb-1">
                    Direct Phone &amp; WhatsApp
                  </h3>
                  <a
                    href="tel:+2630780885780"
                    className="text-sm text-[#5F5A55] dark:text-[#A09A93] hover:text-[#D4693A] transition-colors"
                  >
                    +263 78 088 5780
                  </a>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#EAE4DE] dark:border-[#2B2724] bg-[#FFFFFF] dark:bg-[#1D1A17] p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] flex items-center justify-center text-[#D4693A] shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-[#141210] dark:text-[#FAF7F4] mb-1">
                    Location &amp; Delivery
                  </h3>
                  <p className="text-sm text-[#5F5A55] dark:text-[#A09A93]">
                    Harare, Zimbabwe · Global Remote Delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Trusted Clients Pill Strip */}
            <div className="pt-6 border-t border-[#EAE4DE] dark:border-[#2B2724]">
              <span className="font-mono text-xs text-[#5F5A55] dark:text-[#A09A93] uppercase tracking-wider block mb-4">
                Organizations We Build For
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
            <h2 className="text-2xl font-bold font-headline text-[#141210] dark:text-[#FAF7F4] mb-2">
              Send Us a Message
            </h2>
            <p className="body-calm text-sm mb-8">
              Tell us about your objectives, timeline, and technical requirements.
            </p>
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
