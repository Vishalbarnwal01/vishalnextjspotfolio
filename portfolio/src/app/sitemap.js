import { siteConfig } from "@/data/site-config";
import { getBlogPosts } from "@/lib/blog";

// Auto-generated sitemap, new blog posts are picked up automatically.
export default async function sitemap() {
  const staticRoutes = ["", "/work", "/services", "/about", "/process", "/blog", "/contact"].map(
    (path) => ({
      url: `${siteConfig.siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    })
  );

  const blogPosts = await getBlogPosts();
  const postRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
