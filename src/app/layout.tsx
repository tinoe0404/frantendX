import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";

const SITE_URL = "https://frantiva.co.zw";
const SITE_NAME = "Frantiva Technologies";
const SITE_DESCRIPTION =
  "Frantiva Technologies is a Harare-based software engineering and AI studio. We design, build, and operate intelligent software products for founders, enterprises, and NGOs across Africa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Frantiva Technologies — Intelligent Software & AI Solutions | Harare, Zimbabwe",
    template: "%s | Frantiva Technologies",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "software development Zimbabwe",
    "AI solutions Harare",
    "custom software Zimbabwe",
    "web development Harare",
    "mobile app development Africa",
    "enterprise software Zimbabwe",
    "SaaS development",
    "AI agents",
    "e-commerce Zimbabwe",
    "Frantiva Technologies",
    "software engineering studio",
    "digital transformation Africa",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Frantiva Technologies — Intelligent Software. Built to Move Business.",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_ZW",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Frantiva Technologies — Intelligent Software & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frantiva Technologies — Intelligent Software & AI Solutions",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  category: "technology",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
