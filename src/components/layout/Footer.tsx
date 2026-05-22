"use client";

import Link from "next/link";
import { Facebook, Mail, MapPin } from "lucide-react";

const Tiktok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

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
};

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/1Abq7x59qp/?mibextid=wwXIfr", icon: Facebook },
  { name: "TikTok", href: "https://www.tiktok.com/@frantendx.digital?_r=1&_d=ela0a940ff42h3&sec_uid=MS4wLjABAAAA2wz0a70wcccHITdcnvh7HP0zzp0FkX4S80ugQYAkMRJWs3iElLwRqgh2Pfh-Pe3s&share_author_id=7635936433617781761&sharer_language=en&source=h5_m&u_code=f3a2k206h12bll&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=C47B066E-B1AC-4671-AA0A-CD9F7FF2A90C&user_id=7635936433617781761&sec_user_id=MS4wLjABAAAA2wz0a70wcccHITdcnvh7HP0zzp0FkX4S80ugQYAkMRJWs3iElLwRqgh2Pfh-Pe3s&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233", icon: Tiktok },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-background">
      {/* Gradient divider */}
      <div className="section-gradient-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-foreground">
                  FrantendX
                </span>
                <span className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
                  Digital Solutions
                </span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Building exceptional digital experiences that drive growth. Your
              strategic partner for software that scales.
              <br />
              <span className="font-medium text-foreground">
                Innovate. Build. Grow.
              </span>
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 text-brand" />
              <span>Harare, Zimbabwe</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-brand hover:bg-brand/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
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
            <h4 className="text-sm font-medium text-foreground mb-4">
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

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get insights on web performance and digital strategy.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-9 rounded-lg px-3 text-sm bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand/50 transition-colors"
              />
              <button className="h-9 px-3 rounded-lg bg-brand text-brand-foreground text-sm font-medium hover:bg-brand/90 transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} FrantendX Digital Solutions. Harare, Zimbabwe.`}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
