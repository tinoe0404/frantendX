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
      <button
        className="h-9 w-9 inline-flex items-center justify-center rounded-full text-[#5F5A55] transition-colors"
        disabled
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      className="h-9 w-9 inline-flex items-center justify-center rounded-full text-[#5F5A55] hover:text-[#141210] dark:text-[#A09A93] dark:hover:text-[#FAF7F4] hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className="h-[17px] w-[17px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[17px] w-[17px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[#FAF7F4]/90 dark:bg-[#141210]/90 backdrop-blur-md border-b border-[#EAE4DE] dark:border-[#2B2724]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-[30px] h-[30px] rounded-[7px] bg-[#141210] dark:bg-[#FAF7F4] text-[#FAF7F4] dark:text-[#141210] flex items-center justify-center font-display font-extrabold text-[15px] leading-none select-none transition-transform group-hover:scale-105">
            <span>F</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[22px] font-extrabold tracking-tight text-[#141210] dark:text-[#FAF7F4]">
              Frantiva
            </span>
            <span className="font-sans text-[13px] font-normal text-[#5F5A55] dark:text-[#A09A93] tracking-[0.02em]">
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative py-1 text-[15px] font-medium transition-colors duration-150",
                  isActive
                    ? "text-[#141210] dark:text-[#FAF7F4]"
                    : "text-[#5F5A55] hover:text-[#141210] dark:text-[#A09A93] dark:hover:text-[#FAF7F4]"
                )}
              >
                <span>{link.name}</span>
                {/* Subtle active-link underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#D4693A] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions: Theme Toggle + Single Rounded Pill CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitch />
          <Button
            size="sm"
            className="h-10 px-5 text-sm font-semibold rounded-full bg-[#D4693A] text-white hover:bg-[#c35c30] active:bg-[#b55227] transition-all duration-200 shadow-[0_2px_8px_rgba(212,105,58,0.18)]"
            asChild
          >
            <Link href="/contact">Book a demo</Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeSwitch />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-[#141210] dark:text-[#FAF7F4] hover:bg-black/5 dark:hover:bg-white/5"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-[#FAF7F4] dark:bg-[#141210] border-l border-[#EAE4DE] dark:border-[#2B2724] p-6 flex flex-col justify-between rounded-l-[24px]"
            >
              <div>
                <SheetHeader className="text-left pb-6 border-b border-[#EAE4DE] dark:border-[#2B2724]">
                  <SheetTitle>
                    <div className="flex items-center gap-2.5">
                      <div className="w-[28px] h-[28px] rounded-[6px] bg-[#141210] dark:bg-[#FAF7F4] text-[#FAF7F4] dark:text-[#141210] flex items-center justify-center font-display font-extrabold text-[14px] leading-none select-none">
                        <span>F</span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display text-[20px] font-extrabold tracking-tight text-[#141210] dark:text-[#FAF7F4]">
                          Frantiva
                        </span>
                        <span className="font-sans text-[12px] font-normal text-[#5F5A55] dark:text-[#A09A93] tracking-[0.02em]">
                          Technologies
                        </span>
                      </div>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between py-3 px-4 text-base font-medium rounded-full transition-colors",
                          isActive
                            ? "bg-[#EAE4DE]/60 dark:bg-[#2B2724]/60 text-[#141210] dark:text-[#FAF7F4]"
                            : "text-[#5F5A55] hover:text-[#141210] dark:text-[#A09A93] dark:hover:text-[#FAF7F4]"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4693A]" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#EAE4DE] dark:border-[#2B2724]">
                <Button
                  className="w-full h-11 rounded-full text-sm font-semibold bg-[#D4693A] text-white hover:bg-[#c35c30] transition-colors shadow-sm"
                  onClick={() => setIsOpen(false)}
                  asChild
                >
                  <Link href="/contact">Book a demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
