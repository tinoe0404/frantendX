"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
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
    { name: "Blog", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Tech Stack", href: "#" },
    { name: "Open Source", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-card">
      <div className="container max-w-screen-xl px-4 md:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  FX
                </span>
              </div>
              <span className="font-bold text-foreground text-lg tracking-tight">
                FrantendX
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              We build world-class digital experiences that drive growth and
              engagement. Your partner in digital transformation.
            </p>

            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Stay updated
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
                className="flex gap-2"
              >
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 text-sm bg-background"
                  required
                />
                <Button type="submit" size="sm" className="h-9 px-3">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>hello@frantendx.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+263 78 123 4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {"Made with love in Zimbabwe. "}
            &copy; {new Date().getFullYear()} FrantendX Digital Solutions. All
            rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
