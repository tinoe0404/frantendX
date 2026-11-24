import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://frantendxsolutions.co.zw"),
  title: {
    default: "Frantiva Technologies | AI Solutions & Enterprise Software",
    template: "%s | Frantiva Technologies",
  },
  description:
    "We engineer intelligent AI solutions, custom software and automated systems that help businesses solve complex problems, operate efficiently and scale with confidence.",
  twitter: { card: "summary_large_image" },
  openGraph: {
    title: "Frantiva Technologies — Intelligent Software. Built to Move Business Forward.",
    description: "We engineer intelligent AI solutions, custom software and automated systems that help businesses solve complex problems, operate efficiently and scale with confidence.",
    url: "https://frantendxsolutions.co.zw",
    siteName: "Frantiva Technologies",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
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
      <body className="font-sans antialiased bg-background text-foreground selection:bg-[#F26A38] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
