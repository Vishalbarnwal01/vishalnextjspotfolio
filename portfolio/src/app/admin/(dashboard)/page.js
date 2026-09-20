import Link from "next/link";

export default function AdminHome() {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-ink">Dashboard</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Link
          href="/admin/blog"
          className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(17,17,17,0.25)]"
        >
          <h2 className="text-[18px] font-semibold text-ink">Blog Posts</h2>
          <p className="mt-1 text-[14px] text-muted">
            Write, edit and publish articles with images and video.
          </p>
        </Link>
        <Link
          href="/admin/projects"
          className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(17,17,17,0.25)]"
        >
          <h2 className="text-[18px] font-semibold text-ink">Projects</h2>
          <p className="mt-1 text-[14px] text-muted">
            Add and manage case studies shown on the Work page.
          </p>
        </Link>
      </div>
    </div>
  );
}
