// =============================================================================
// SITE CONFIG — the single place to put your real details.
// Everything here flows into the navbar, footer, metadata, JSON-LD schema and
// contact links across the site. Replace the placeholders before you launch.
// =============================================================================

export const siteConfig = {
  // Used in <title>, JSON-LD, footer copyright, nav logo
  name: "Vishal",
  fullName: "Vishal Sharma", // replace with your full legal / brand name
  role: "Shopify Developer & eCommerce Solutions Provider",

  // Meta / SEO — edit these for real launch
  metaTitle:
    "Vishal — Shopify Developer & eCommerce Solutions Provider for DTC Brands",
  metaDescription:
    "Independent Shopify Developer helping US-based DTC and eCommerce brands build, optimize and scale high-converting Shopify stores — custom themes, CRO, Klaviyo, SAP/ERP and API integrations.",
  siteUrl: "https://www.yourdomain.com", // canonical URL — replace with your real domain
  ogImage: "/og-image.jpg", // 1200x630 — add this file to /public

  // Contact
  email: "hello@yourdomain.com",
  calendlyUrl: "#", // your Calendly / booking link
  contactFormUrl: "#", // Typeform / form endpoint, or "#" to use mailto

  // Location line used in About section
  location: "Based in India",
  workingScope: "Working Globally",

  // Social — leave "#" for any you don't want to show
  social: {
    linkedin: "#",
    github: "#",
    twitter: "#",
    upwork: "#",
  },

  // Availability indicator in hero
  availability: "Available for selected projects",

  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};
