import Link from "next/link";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  capabilities: [
    { name: "Autonomous AI agents", href: "/services" },
    { name: "Business automation", href: "/services" },
    { name: "Cloud & SaaS platforms", href: "/services" },
    { name: "Enterprise custom systems", href: "/services" },
  ],
  innovation: [
    { name: "Zonkezonke Platform", href: "/contact" },
    { name: "Gowild Architecture", href: "/case-studies#gowild" },
    { name: "HaviChem Operations", href: "/case-studies#havichem" },
    { name: "Custom Engagements", href: "/contact" },
  ],
  company: [
    { name: "About us", href: "/about" },
    { name: "Case studies", href: "/case-studies" },
    { name: "Services overview", href: "/services" },
    { name: "Contact & demo", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-[#EAE4DE] dark:border-[#2B2724] bg-[#FAF7F4] dark:bg-[#141210] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#EAE4DE] dark:border-[#2B2724]">
          
          {/* Brand Identity Column */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center group shrink-0 transition-transform hover:scale-[1.02]" aria-label="Frantiva Technologies — Home">
              <img
                src="/images/logo-full.png"
                alt="Frantiva Technologies"
                width={180}
                height={38}
                className="h-[34px] w-auto dark:hidden select-none"
              />
              <img
                src="/images/logo-full-dark.png"
                alt="Frantiva Technologies"
                width={180}
                height={38}
                className="h-[34px] w-auto hidden dark:block select-none"
              />
            </Link>

            <p className="text-sm text-[#5F5A55] dark:text-[#A09A93] leading-relaxed max-w-[56ch] [text-wrap:pretty]">
              We engineer intelligent AI solutions, custom software and automated systems that help businesses solve complex problems, operate efficiently and scale with confidence.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#5F5A55] dark:text-[#A09A93]">
              <MapPin className="h-3.5 w-3.5 text-[#D4693A]" />
              <span>Harare, Zimbabwe · Global Remote</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#EAE4DE] dark:border-[#2B2724] flex items-center justify-center text-[#5F5A55] hover:text-[#141210] dark:text-[#A09A93] dark:hover:text-[#FAF7F4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[12px] font-normal uppercase tracking-[0.1em] text-[#5F5A55] dark:text-[#A09A93] mb-5">
              Capabilities
            </h4>
            <ul className="space-y-3">
              {footerLinks.capabilities.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5F5A55] hover:text-[#D4693A] dark:text-[#A09A93] dark:hover:text-[#D4693A] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Innovation */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[12px] font-normal uppercase tracking-[0.1em] text-[#5F5A55] dark:text-[#A09A93] mb-5">
              Innovation
            </h4>
            <ul className="space-y-3">
              {footerLinks.innovation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5F5A55] hover:text-[#D4693A] dark:text-[#A09A93] dark:hover:text-[#D4693A] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[12px] font-normal uppercase tracking-[0.1em] text-[#5F5A55] dark:text-[#A09A93]">
              Stay informed
            </h4>
            <p className="text-xs text-[#5F5A55] dark:text-[#A09A93] leading-relaxed max-w-[56ch] [text-wrap:pretty]">
              Receive periodic engineering insights and system updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-10 rounded-full px-4 text-xs bg-[#FFFFFF] dark:bg-[#1D1A17] border border-[#EAE4DE] dark:border-[#2B2724] text-[#141210] dark:text-[#FAF7F4] placeholder:text-[#5F5A55] focus:outline-none focus:border-[#D4693A] transition-colors"
              />
              <button
                className="h-10 px-4 rounded-full bg-[#141210] dark:bg-[#FAF7F4] text-[#FAF7F4] dark:text-[#141210] hover:bg-[#D4693A] dark:hover:bg-[#D4693A] dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>

            {/* Operational Status Readout */}
            <div className="flex items-center gap-2 pt-2 text-xs text-[#5F5A55] dark:text-[#A09A93]">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4693A]" />
              </span>
              <span>All production systems operational</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Strip */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5F5A55] dark:text-[#A09A93]">
          <p>
            {`\u00A9 ${new Date().getFullYear()} Frantiva Technologies (Pvt) Ltd. All rights reserved.`}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#141210] dark:hover:text-[#FAF7F4] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#141210] dark:hover:text-[#FAF7F4] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
