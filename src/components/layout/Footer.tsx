import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-border">
            <div className="container max-w-screen-2xl px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary">frantendX</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            We build world-class digital experiences that drive growth and engagement. Your partner in digital transformation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Quick Links</h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Legal</h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Contact</h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>hello@frantendx.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} FrantendX Digital Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
