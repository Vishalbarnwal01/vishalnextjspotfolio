import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---------------------------------------------------------------------------
// SEO METADATA — edit src/data/site-config.js instead of this file directly.
// This covers: meta title, meta description, canonical URL and Open Graph.
// ---------------------------------------------------------------------------
export const metadata = {
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.fullName,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    images: [siteConfig.ogImage],
  },
};

// ---------------------------------------------------------------------------
// STRUCTURED DATA (JSON-LD) — ProfessionalService + Person schema.
// Helps search engines understand who this is and what services are offered.
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.fullName,
  description: siteConfig.metaDescription,
  url: siteConfig.siteUrl,
  image: siteConfig.siteUrl + siteConfig.ogImage,
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  founder: {
    "@type": "Person",
    name: siteConfig.fullName,
    jobTitle: siteConfig.role,
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Plus Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Rate Optimization" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Klaviyo Integration" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "SAP / ERP Integration" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Headless Shopify Development" } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
