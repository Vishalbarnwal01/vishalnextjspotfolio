import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ProjectForm from "@/components/admin/ProjectForm";

export default async function EditProject({ params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!project) return notFound();

  return (
    <div>
      <h1 className="text-[24px] font-bold text-ink">Edit Project</h1>
      <div className="mt-6">
        <ProjectForm project={project} />
      </div>
    </div>
  );
}
