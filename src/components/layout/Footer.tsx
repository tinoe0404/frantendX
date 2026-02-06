"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  services: [
    { name: "Custom Software", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "E-commerce", href: "/services" },
    { name: "API Development", href: "/services" },
    { name: "Cloud Infrastructure", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/about" },
    { name: "Careers", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Tech Stack", href: "#" },
    { name: "Open Source", href: "#" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
                <span className="text-xs font-bold text-background leading-none">FX</span>
              </div>
              <span className="font-semibold text-foreground tracking-tight">FrantendX</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Building world-class digital experiences that drive growth. Your strategic partner for software that scales.
            </p>
            <div className="space-y-2.5">
              <p className="text-sm font-medium text-foreground">Stay updated</p>
              <form
                onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
                className="flex gap-2"
              >
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 text-sm bg-background"
                  required
                />
                <Button type="submit" size="sm" className="h-9 px-3 rounded-md bg-brand text-brand-foreground hover:bg-brand/90">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} FrantendX Digital Solutions. Harare, Zimbabwe.`}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
