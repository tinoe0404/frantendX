import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://frantendx.com"),
  title: {
    default: "FrantendX Digital Solutions | Next.js & Full Stack Agency",
    template: "%s | FrantendX Digital Solutions",
  },
  description:
    "We build high-performance, scalable web applications using Next.js, Neon, and AI. Transforming ideas into digital reality.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "FrantendX Digital Solutions",
    description: "Next.js Full Stack Agency",
    url: "https://frantendx.com",
    siteName: "FrantendX Digital Solutions",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
