// =============================================================================
// BLOG POSTS — add a new object to this array to publish a new post.
// Each post automatically gets a listing card at /blog and its own page at
// /blog/[slug] (see src/app/blog/[slug]/page.js). No routing code to touch.
//
// "content" accepts an array of paragraph strings for now (kept dependency-free).
// If you outgrow that, swap it for MDX later — the route structure won't change.
// =============================================================================

export const blogPosts = [
  {
    slug: "shopify-2-0-vs-shopify-plus",
    title: "Shopify 2.0 vs. Shopify Plus: What Actually Changes for Your Store",
    excerpt:
      "A practical breakdown of when a custom Shopify 2.0 theme is enough, and when a brand genuinely needs Shopify Plus.",
    date: "2026-01-15",
    readingTime: "6 min read",
    tags: ["Shopify 2.0", "Shopify Plus"],
    content: [
      "This is a placeholder post so the blog section renders end-to-end. Replace the title, excerpt and content below with your first real article.",
      "Add new posts by appending an object to the blogPosts array in src/data/blog-posts.js — the listing page and the individual post page are both generated from this file automatically.",
    ],
  },
];
