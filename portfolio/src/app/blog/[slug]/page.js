import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/data/site-config";

// Pre-render every post at build time — new posts just need an entry in
// src/data/blog-posts.js, no routing changes required.
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[720px] px-6 lg:px-10">
        <Link
          href="/blog"
          className="text-[14px] font-medium text-muted hover:text-ink"
        >
          &larr; Back to Blog
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] font-medium text-muted">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="mt-4 text-[34px] font-bold leading-[1.15] tracking-tight text-ink lg:text-[44px]">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-cream px-3 py-1 text-[12px] font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 space-y-5 text-[17px] leading-relaxed text-ink/80">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
