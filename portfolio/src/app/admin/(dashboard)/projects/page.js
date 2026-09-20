import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminProjectsList() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold text-ink">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="rounded-lg bg-ink px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-shopify hover:text-forest"
        >
          + New Project
        </Link>
      </div>

      <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
        {(projects || []).length === 0 && (
          <p className="p-6 text-[14px] text-muted">No projects yet.</p>
        )}
        {(projects || []).map((p) => (
          <div key={p.id} className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="text-[15px] font-semibold text-ink">{p.title}</p>
              <p className="mt-1 text-[13px] text-muted">
                /{p.slug} {p.is_featured ? "· Featured" : ""}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={`/admin/projects/${p.id}/edit`}
                className="text-[13px] font-medium text-shopify-dark hover:underline"
              >
                Edit
              </Link>
              <DeleteButton table="projects" id={p.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
