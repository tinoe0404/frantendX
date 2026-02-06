"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

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
      <Button variant="ghost" size="icon" className="h-9 w-9" disabled>
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 text-foreground/70 hover:text-foreground"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
      animate={{
        height: scrolled ? 56 : 72,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container flex h-full max-w-screen-xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">
              FX
            </span>
          </div>
          <span className="font-bold text-foreground text-lg tracking-tight">
            FrantendX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/50"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeSwitch />
          <Button size="sm" className="h-9 px-5 font-medium" asChild>
            <Link href="/contact">Start Project</Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeSwitch />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="px-2">
                <SheetTitle className="flex items-center gap-2 text-left">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                    <span className="text-xs font-bold text-primary-foreground">
                      FX
                    </span>
                  </div>
                  <span className="font-bold tracking-tight">FrantendX</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-8 px-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors block py-3 px-3 rounded-lg hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button
                    className="w-full h-11 font-medium"
                    onClick={() => setIsOpen(false)}
                    asChild
                  >
                    <Link href="/contact">Start Project</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
