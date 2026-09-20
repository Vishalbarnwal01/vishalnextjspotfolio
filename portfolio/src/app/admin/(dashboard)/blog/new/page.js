import BlogPostForm from "@/components/admin/BlogPostForm";

export default function NewBlogPost() {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-ink">New Blog Post</h1>
      <div className="mt-6">
        <BlogPostForm />
      </div>
    </div>
  );
}
