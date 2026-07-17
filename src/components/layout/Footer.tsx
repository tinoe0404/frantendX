"use client";

import Link from "next/link";
import { Facebook, Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  products: [
    { name: "ZimFlow AI", href: "/products/zimflow" },
    { name: "ZimbaSure AI", href: "/products/zimbasure" },
    { name: "SMEGuard AI", href: "/products/smeguard" },
    { name: "Platform API", href: "/api-docs" },
  ],
  solutions: [
    { name: "AI Agents", href: "/solutions/agents" },
    { name: "Business Automation", href: "/solutions/automation" },
    { name: "SaaS Platforms", href: "/solutions/saas" },
    { name: "Enterprise Systems", href: "/solutions/enterprise" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-background overflow-hidden">
      <div className="section-gradient-divider absolute top-0 left-0 right-0" />
      
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-50" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-foreground/5 rounded-full blur-[80px]" />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-6 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="flex flex-col leading-none">
                <span className="text-xl font-semibold tracking-tighter text-foreground">
                  FrantendX
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  AI Software Company
                </span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mb-8 font-light">
              Engineering sophisticated AI agents and enterprise software systems that accelerate business growth and transform operations.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-light">
              <MapPin className="h-4 w-4" />
              <span>Harare, Zimbabwe &bull; Global Remote</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-6">
              Products
            </h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-6">
              Solutions
            </h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-6">
              Updates
            </h4>
            <p className="text-xs text-muted-foreground mb-4 font-light leading-relaxed">
              Subscribe for insights on AI and enterprise software engineering.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 h-9 rounded-md px-3 text-sm bg-foreground/[0.03] border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
              />
              <button className="h-9 px-3 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mt-6 text-xs text-muted-foreground font-light">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Systems Operational</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-light">
            {`\u00A9 ${new Date().getFullYear()} FrantendX. All rights reserved.`}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
