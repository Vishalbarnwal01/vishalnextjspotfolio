import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { siteConfig } from "@/data/site-config";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

// New posts just need a row in the blog_posts Supabase table.
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at,
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
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
          <time dateTime={post.published_at}>
            {new Date(post.published_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{post.reading_time}</span>
        </div>

        <h1 className="mt-4 text-[34px] font-bold leading-[1.15] tracking-tight text-ink lg:text-[44px]">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {(post.tags || []).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-cream px-3 py-1 text-[12px] font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {post.cover_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="mt-8 w-full rounded-2xl border border-line object-cover"
          />
        )}

        <div
          className="prose-content mt-10 text-[17px] leading-relaxed text-ink/80"
          dangerouslySetInnerHTML={{ __html: marked.parse(post.content || "") }}
        />
      </div>
    </article>
  );
}
