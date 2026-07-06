import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { content } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

// Optimised font loading via next/font — replaces the inline Google Fonts <link>
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-fraunces",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});
const jbm = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jbm",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.foilcrafts.com"),
  title: {
    default: `${content.brand.name} — ${content.brand.tagline}`,
    template: `%s | ${content.brand.name}`,
  },
  description: content.brand.description,
  robots: { index: true, follow: true },
  keywords: [
    "Italian transfer foils",
    "foil stamping India",
    "leather foiling",
    "CFM foils",
    "embossing plates",
    "digital printing leather",
    "Foil Crafts",
    "Noida",
    "transfer foil",
    "hot stamping foil",
  ],
  openGraph: {
    title: `${content.brand.name} — ${content.brand.tagline}`,
    description: content.brand.description,
    siteName: content.brand.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jbm.variable}`}
    >
      <body>
        <CustomCursor />
        <RevealObserver />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
