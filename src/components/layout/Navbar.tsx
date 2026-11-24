"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="h-8 w-8 inline-flex items-center justify-center rounded-full" disabled aria-label="Toggle theme">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      className="h-8 w-8 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className="h-[16px] w-[16px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[16px] w-[16px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-6 py-4 pointer-events-none">
      <header
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full max-w-5xl h-14 px-5 mx-auto rounded-full transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-xl border border-border/50 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
            : "bg-transparent border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight text-foreground">
              Frantiva
            </span>
            <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-muted-foreground mt-0.5">
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-1.5 text-sm transition-colors rounded-full",
                pathname === link.href
                  ? "text-foreground font-medium bg-foreground/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitch />
          <Button size="sm" className="h-8 rounded-full px-4 text-xs font-medium bg-foreground text-background hover:bg-foreground/90 transition-all" asChild>
            <Link href="/contact">Book Demo</Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeSwitch />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background/95 backdrop-blur-xl border-border/50">
              <SheetHeader className="px-1 text-left">
                <SheetTitle>
                  <span className="flex flex-col leading-none">
                    <span className="text-base font-semibold tracking-tight text-foreground">
                      Frantiva
                    </span>
                    <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-muted-foreground mt-1">
                      Technologies
                    </span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-10 px-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "block py-3 px-4 text-sm rounded-xl transition-colors",
                      pathname === link.href
                        ? "text-foreground font-medium bg-foreground/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8">
                  <Button
                    className="w-full h-12 rounded-xl font-medium bg-foreground text-background hover:bg-foreground/90 transition-all"
                    onClick={() => setIsOpen(false)}
                    asChild
                  >
                    <Link href="/contact">Book Demo</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
