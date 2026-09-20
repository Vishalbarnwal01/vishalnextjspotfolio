import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminBlogList() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold text-ink">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-lg bg-ink px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-shopify hover:text-forest"
        >
          + New Post
        </Link>
      </div>

      <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
        {(posts || []).length === 0 && (
          <p className="p-6 text-[14px] text-muted">No posts yet.</p>
        )}
        {(posts || []).map((post) => (
          <div key={post.id} className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="text-[15px] font-semibold text-ink">{post.title}</p>
              <p className="mt-1 text-[13px] text-muted">
                /{post.slug} &middot; {post.is_published ? "Published" : "Draft"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={`/admin/blog/${post.id}/edit`}
                className="text-[13px] font-medium text-shopify-dark hover:underline"
              >
                Edit
              </Link>
              <DeleteButton table="blog_posts" id={post.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
