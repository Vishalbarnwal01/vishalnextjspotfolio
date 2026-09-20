import { supabase } from "@/lib/supabase";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("getProjects:", error.message);
    return [];
  }
  return data;
}

export async function getFeaturedProjects(limit = 2) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_featured", true)
    .order("display_order", { ascending: true })
    .limit(limit);

  if (error) {
    console.error("getFeaturedProjects:", error.message);
    return [];
  }

  // Fall back to the first N projects if none are marked as featured yet.
  if (data.length === 0) {
    return getProjects().then((all) => all.slice(0, limit));
  }
  return data;
}
