import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://frantendxsolutions.co.zw"),
  title: {
    default: "FrantendX Digital Solutions | Software Agency",
    template: "%s | FrantendX",
  },
  description:
    "We build high-performance, scalable web applications. Your strategic partner for digital transformation.",
  twitter: { card: "summary_large_image" },
  openGraph: {
    title: "FrantendX Digital Solutions",
    description: "Software Agency - Build. Ship. Scale.",
    url: "https://frantendxsolutions.co.zw",
    siteName: "FrantendX",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { PageTransition } from "@/components/PageTransition";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CursorGlow />
          <PageTransition>
            {children}
            <WhatsAppButton />
            <Toaster />
            <JsonLd />
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
