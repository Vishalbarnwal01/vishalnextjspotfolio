# Shopify Developer & eCommerce Solutions — Portfolio

A premium, editorial-style portfolio site for an independent Shopify Developer /
eCommerce Solutions Provider, built with **Next.js (App Router)**, **React 19**
and **Tailwind CSS v4**. Fully responsive, SEO-structured, and organized so new
sections (like the blog) can be added without touching existing pages.

**Multi-page structure** — every nav item is its own real page, not a scroll anchor:

| Route | Content |
|---|---|
| `/` | Hero, trust bar, condensed teasers for About/Services/Work, FAQ, final CTA |
| `/work` | Full case studies |
| `/services` | Full services grid + technology ecosystem diagram |
| `/about` | Positioning, bio/portrait, "why work with me" |
| `/process` | The 5-step process |
| `/blog` | Blog listing → `/blog/[slug]` for each post |
| `/contact` | Contact CTA + email/availability/location details |

Each page has exactly one `<h1>` and its own SEO metadata (title/description/canonical).

## Run it locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit files.

To build for production:

```bash
npm run build
npm start
```

## Where everything lives

```
src/
  app/
    layout.js          Root layout: fonts, <head> metadata, JSON-LD schema, Navbar/Footer wrapper
    page.js             Homepage — teasers only, links out to the full pages below
    globals.css         Brand colors, fonts, and the few CSS animations used site-wide
    sitemap.js           Auto-generated sitemap.xml (picks up new pages + blog posts automatically)
    robots.js             robots.txt
    work/page.js            /work — full case studies
    services/page.js         /services — full services grid + tech ecosystem
    about/page.js              /about — positioning + bio + principles
    process/page.js              /process — the 5-step process
    contact/page.js                /contact — CTA + contact details
    blog/
      page.js            Blog listing page
      [slug]/page.js      Individual blog post page (auto-generated per post)

  components/            Section components. Full sections (About, Services, CaseStudies,
                          Process, FinalCTA) accept a `headingLevel` prop ("h1" on their own
                          dedicated page, "h2" default when reused elsewhere). AboutTeaser,
                          ServicesTeaser and WorkTeaser are the condensed homepage versions.
  data/                   Editable content — this is what you'll touch most often
    site-config.js        Name, role, email, social links, nav — THE file to edit first
    services.js            The 8 service cards
    case-studies.js         The 4 featured case studies
    process-steps.js         The 5-step process section
    faq.js                    The 10 FAQ questions/answers
    tech-stack.js              Trust bar logos + technology ecosystem diagram nodes
    blog-posts.js               Blog posts — add an object here to publish a new post
```

**Nothing about layout, styling or animation lives in `data/`.** That's on purpose —
you (or anyone non-technical) can edit copy, add a case study, or publish a blog
post by editing plain JavaScript objects, without touching a single component.

## How to add a blog post (this is what "scalable" means here)

Open `src/data/blog-posts.js` and add a new object to the array:

```js
{
  slug: "your-post-url-slug",
  title: "Your Post Title",
  excerpt: "One or two sentence summary shown on the listing page.",
  date: "2026-03-01",
  readingTime: "5 min read",
  tags: ["Shopify Plus", "CRO"],
  content: [
    "First paragraph.",
    "Second paragraph.",
  ],
},
```

That's it — `/blog` and `/blog/your-post-url-slug` are generated automatically,
including metadata and the sitemap entry. No routing code to write.

The same pattern applies to future sections: a "Testimonials" page, a
"Resources" library, etc. would each get their own `data/*.js` file + a folder
under `src/app/`, following the blog as the template.

## Brand tokens (colors/fonts)

Defined once in `src/app/globals.css`:

| Token | Value | Used for |
|---|---|---|
| `--shopify` | `#95BF47` | CTAs, highlights, active states |
| `--forest` | `#163300` | Process section background, central Shopify node |
| `--cream` | `#F7F8F5` | Alternating section backgrounds |
| `--ink` | `#111111` | Primary text |
| `--muted` | `#5F6658` | Secondary text |
| `--line` | `#E5E9E0` | Borders/dividers |

Change a value once here and it updates everywhere (`bg-shopify`, `text-forest`,
`border-line`, etc. are all generated from these).

Font is **Geist** (already wired up via `next/font/google` — no extra setup,
loads with zero layout shift).

## What I need from you (assets to replace before launch)

Everything below currently uses a clearly-marked placeholder. Send these over and
I'll wire them in — or you can drop them in yourself following the notes below:

1. **Your real name / brand name** — `src/data/site-config.js` → `name`, `fullName`, `role`
2. **A headshot or portrait photo** — replaces the placeholder monogram in the About Me section (`src/components/AboutMe.jsx`, the block is commented with the exact swap instructions)
3. **Contact email + booking link** (Calendly or similar) — `src/data/site-config.js` → `email`, `calendlyUrl`
4. **Social links** (LinkedIn / GitHub / X / Upwork) — `src/data/site-config.js` → `social`
5. **Real case studies** — for each of the 4 slots in `src/data/case-studies.js`: project screenshots (or let them stay as abstract visual blocks), the real challenge/approach copy, and real results once you have them — never fake numbers, the `XX` placeholders are intentional
6. **Your domain name** — `src/data/site-config.js` → `siteUrl` (needed for canonical URLs, sitemap, and Open Graph to work correctly)
7. **An Open Graph share image** (1200×630px) — save as `public/og-image.jpg`
8. **A favicon** — replace `src/app/favicon.ico`
9. **First blog post(s)**, whenever you're ready — see the section above

Nothing else needs to change structurally — the design, animations, SEO
metadata, JSON-LD schema and responsive layout are already done.

## SEO already in place

- Single `<h1>` (in the Hero), clean `h2`/`h3` hierarchy throughout
- `metadata` export in `layout.js` (title, description, canonical, Open Graph, Twitter card) — driven by `site-config.js`
- `ProfessionalService` + `Person` JSON-LD in `layout.js`
- `FAQPage` JSON-LD in `FAQ.jsx`
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic keyword coverage across headings/body copy for Shopify Developer, Shopify Plus, Shopify 2.0, CRO, Klaviyo, SAP/ERP integration, headless Shopify, Storefront API — written naturally, no keyword stuffing

## Deploy

Easiest path is [Vercel](https://vercel.com/new) (same team as Next.js — zero config).
Push this repo, import it in Vercel, point your domain at it, done.
