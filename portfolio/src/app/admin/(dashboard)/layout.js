import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/admin/SignOutButton";

export default async function AdminLayout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <Link href="/admin" className="text-[16px] font-semibold text-ink">
            Admin
          </Link>
          <nav className="flex items-center gap-6 text-[14px] font-medium text-muted">
            <Link href="/admin/blog" className="transition-colors hover:text-ink">
              Blog
            </Link>
            <Link href="/admin/projects" className="transition-colors hover:text-ink">
              Projects
            </Link>
            <Link href="/" target="_blank" className="transition-colors hover:text-ink">
              View Site
            </Link>
            <SignOutButton />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-[1100px] px-6 py-10">{children}</main>
    </div>
  );
}
