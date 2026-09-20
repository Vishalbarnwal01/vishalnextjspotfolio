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

export default function ProjectForm({ project }) {
  const router = useRouter();
  const isEdit = Boolean(project);

  const [title, setTitle] = useState(project?.title || "");
  const [slug, setSlug] = useState(project?.slug || "");
  const [industry, setIndustry] = useState(project?.industry || "");
  const [tags, setTags] = useState((project?.tags || []).join(", "));
  const [challenge, setChallenge] = useState(project?.challenge || "");
  const [solution, setSolution] = useState(project?.solution || "");
  const [technology, setTechnology] = useState((project?.technology || []).join(", "));
  const [results, setResults] = useState(
    project?.results?.length ? project.results : [{ label: "", value: "" }]
  );
  const [liveUrl, setLiveUrl] = useState(project?.live_url || "");
  const [coverImageUrl, setCoverImageUrl] = useState(project?.cover_image_url || "");
  const [isFeatured, setIsFeatured] = useState(project?.is_featured ?? false);
  const [displayOrder, setDisplayOrder] = useState(project?.display_order ?? 0);
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

  function updateResult(i, field, value) {
    setResults((prev) => prev.map((r, idx) => (idx === i ? { ...r, [field]: value } : r)));
  }

  function addResult() {
    setResults((prev) => [...prev, { label: "", value: "" }]);
  }

  function removeResult(i) {
    setResults((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const supabase = createClient();
    const payload = {
      title,
      slug: slug || slugify(title),
      industry,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      challenge,
      solution,
      technology: technology
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      results: results.filter((r) => r.label && r.value),
      live_url: liveUrl || null,
      cover_image_url: coverImageUrl || null,
      is_featured: isFeatured,
      display_order: Number(displayOrder) || 0,
    };

    const query = isEdit
      ? supabase.from("projects").update(payload).eq("id", project.id)
      : supabase.from("projects").insert(payload);

    const { error } = await query;
    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }
    router.push("/admin/projects");
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-ink">Industry</label>
          <input
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="DTC / Apparel"
            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-ink">Live URL</label>
          <input
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            placeholder="https://..."
            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-ink">
            Tags (comma separated)
          </label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Shopify 2.0, CRO"
            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-ink">
            Technology (comma separated)
          </label>
          <input
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            placeholder="Shopify 2.0, Liquid, GA4"
            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
          />
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-medium text-ink">Challenge</label>
        <textarea
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
        />
      </div>

      <div>
        <label className="block text-[13px] font-medium text-ink">Approach / Solution</label>
        <textarea
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
        />
      </div>

      <div>
        <label className="block text-[13px] font-medium text-ink">Results</label>
        <div className="mt-2 space-y-2">
          {results.map((r, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                value={r.label}
                onChange={(e) => updateResult(i, "label", e.target.value)}
                placeholder="Conversion Rate"
                className="w-1/2 rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
              />
              <input
                value={r.value}
                onChange={(e) => updateResult(i, "value", e.target.value)}
                placeholder="+24%"
                className="w-1/2 rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
              />
              <button
                type="button"
                onClick={() => removeResult(i)}
                className="text-[13px] text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addResult}
          className="mt-2 text-[13px] font-medium text-shopify-dark hover:underline"
        >
          + Add Result
        </button>
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

      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center gap-2 text-[14px] text-ink">
          <input
            type="checkbox"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
          />
          Featured on homepage
        </label>
        <div>
          <label className="block text-[13px] font-medium text-ink">Display Order</label>
          <input
            type="number"
            value={displayOrder}
            onChange={(e) => setDisplayOrder(e.target.value)}
            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
          />
        </div>
      </div>

      {uploading && <p className="text-[13px] text-muted">Uploading...</p>}
      {error && <p className="text-[13px] text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={saving || uploading}
        className="rounded-lg bg-ink px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-shopify hover:text-forest disabled:opacity-60"
      >
        {saving ? "Saving..." : isEdit ? "Save Changes" : "Create Project"}
      </button>
    </form>
  );
}
