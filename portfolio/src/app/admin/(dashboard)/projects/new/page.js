import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProject() {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-ink">New Project</h1>
      <div className="mt-6">
        <ProjectForm />
      </div>
    </div>
  );
}
