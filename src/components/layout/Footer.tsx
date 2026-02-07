"use client";

import Link from "next/link";


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

export function Footer() {


  return (
    <footer className="border-t border-border bg-background">
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
              Building world-class digital experiences that drive growth. Your strategic partner for software that scales.
              <br />
              <span className="font-medium text-foreground">Innovate. Build. Grow.</span>
            </p>

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
    </footer >
  );
}
