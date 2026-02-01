import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://frantendx.com'),
  title: {
    default: 'frantendX Digital Solutions | Next.js & Full Stack Agency',
    template: '%s | frantendX Digital Solutions',
  },
  description: 'We build high-performance, scalable web applications using Next.js, Neon, and AI. Transforming ideas into digital reality.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    title: 'frantendX Digital Solutions',
    description: 'Next.js Full Stack Agency',
    url: 'https://frantendx.com',
    siteName: 'frantendX',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased")}>
        <JsonLd />
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}

