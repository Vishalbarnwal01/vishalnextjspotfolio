import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: `Blog: Shopify Development & eCommerce Insights | ${siteConfig.name}`,
  description:
    "Notes on Shopify development, conversion rate optimization, Klaviyo and eCommerce integrations for DTC and growing online brands.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndex() {
  const blogPosts = await getBlogPosts();

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <Reveal>
          <p className="text-[13px] font-semibold tracking-[0.14em] text-shopify-dark">
            BLOG
          </p>
          <h1 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[48px]">
            Shopify &amp; eCommerce Notes.
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            Practical write-ups on Shopify development, CRO, Klaviyo and
            eCommerce integrations, for founders and teams who want to
            understand the &ldquo;why,&rdquo; not just the &ldquo;how.&rdquo;
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {blogPosts.length === 0 && (
            <p className="py-12 text-[15px] text-muted">
              No posts published yet. Check back soon.
            </p>
          )}

          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium text-muted">
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
                  <h2 className="mt-2 text-[20px] font-semibold text-ink transition-colors group-hover:text-shopify-dark">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowRightIcon className="h-5 w-5 flex-shrink-0 text-line transition-all group-hover:translate-x-1 group-hover:text-shopify-dark" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
