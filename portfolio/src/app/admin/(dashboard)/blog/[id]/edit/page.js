import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import BlogPostForm from "@/components/admin/BlogPostForm";

export default async function EditBlogPost({ params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!post) return notFound();

  return (
    <div>
      <h1 className="text-[24px] font-bold text-ink">Edit Blog Post</h1>
      <div className="mt-6">
        <BlogPostForm post={post} />
      </div>
    </div>
  );
}
