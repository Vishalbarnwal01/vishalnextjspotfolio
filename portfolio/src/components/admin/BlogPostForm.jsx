"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { uploadMedia } from "@/lib/upload";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogPostForm({ post }) {
  const router = useRouter();
  const isEdit = Boolean(post);

  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [tags, setTags] = useState((post?.tags || []).join(", "));
  const [readingTime, setReadingTime] = useState(post?.reading_time || "");
  const [coverImageUrl, setCoverImageUrl] = useState(post?.cover_image_url || "");
  const [content, setContent] = useState(post?.content || "");
  const [isPublished, setIsPublished] = useState(post?.is_published ?? true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleCoverUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const supabase = createClient();
      const url = await uploadMedia(supabase, file);
      setCoverImageUrl(url);
    } catch (err) {
      setError(err.message);
    }
    setUploading(false);
  }

  async function handleInsertImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const supabase = createClient();
      const url = await uploadMedia(supabase, file);
      setContent((c) => `${c}\n\n![${file.name}](${url})\n\n`);
    } catch (err) {
      setError(err.message);
    }
    setUploading(false);
    e.target.value = "";
  }

  async function handleInsertVideo(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const supabase = createClient();
      const url = await uploadMedia(supabase, file);
      setContent((c) => `${c}\n\n<video controls src="${url}"></video>\n\n`);
    } catch (err) {
      setError(err.message);
    }
    setUploading(false);
    e.target.value = "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const supabase = createClient();
    const payload = {
      title,
      slug: slug || slugify(title),
      excerpt,
      content,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      reading_time: readingTime,
      cover_image_url: coverImageUrl || null,
      is_published: isPublished,
    };

    const query = isEdit
      ? supabase.from("blog_posts").update(payload).eq("id", post.id)
      : supabase.from("blog_posts").insert(payload);

    const { error } = await query;
    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }
    router.push("/admin/blog");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      <div>
        <label className="block text-[13px] font-medium text-ink">Title</label>
        <input
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (!isEdit) setSlug(slugify(e.target.value));
          }}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
        />
      </div>

      <div>
        <label className="block text-[13px] font-medium text-ink">Slug</label>
        <input
          required
          value={slug}
          onChange={(e) => setSlug(slugify(e.target.value))}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 font-mono text-[14px] text-ink outline-none focus:border-ink"
        />
      </div>

      <div>
        <label className="block text-[13px] font-medium text-ink">Excerpt</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-ink">
            Tags (comma separated)
          </label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Shopify 2.0, Shopify Plus"
            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-ink">Reading Time</label>
          <input
            value={readingTime}
            onChange={(e) => setReadingTime(e.target.value)}
            placeholder="6 min read"
            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
          />
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-medium text-ink">Cover Image</label>
        <div className="mt-1 flex items-center gap-3">
          <input type="file" accept="image/*" onChange={handleCoverUpload} disabled={uploading} />
          {coverImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={coverImageUrl} alt="" className="h-12 w-20 rounded-md object-cover" />
          )}
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="block text-[13px] font-medium text-ink">Content</label>
          <div className="flex items-center gap-4 text-[12px] font-semibold text-shopify-dark">
            <label className="cursor-pointer hover:underline">
              + Insert Image
              <input
                type="file"
                accept="image/*"
                onChange={handleInsertImage}
                disabled={uploading}
                className="hidden"
              />
            </label>
            <label className="cursor-pointer hover:underline">
              + Insert Video
              <input
                type="file"
                accept="video/*"
                onChange={handleInsertVideo}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>
        </div>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={16}
          className="mt-2 w-full rounded-lg border border-line px-3 py-2 font-mono text-[13px] leading-relaxed text-ink outline-none focus:border-ink"
        />
        <p className="mt-1 text-[12px] text-muted">
          Plain text or Markdown. Use the buttons above to upload and drop in images/video, or
          paste a YouTube/Vimeo embed as raw HTML.
        </p>
      </div>

      <label className="flex items-center gap-2 text-[14px] text-ink">
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
        />
        Published (visible on the public site)
      </label>

      {uploading && <p className="text-[13px] text-muted">Uploading...</p>}
      {error && <p className="text-[13px] text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={saving || uploading}
        className="rounded-lg bg-ink px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-shopify hover:text-forest disabled:opacity-60"
      >
        {saving ? "Saving..." : isEdit ? "Save Changes" : "Publish Post"}
      </button>
    </form>
  );
}
