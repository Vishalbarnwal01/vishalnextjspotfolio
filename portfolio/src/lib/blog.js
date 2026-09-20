import { supabase } from "@/lib/supabase";

export async function getBlogPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("getBlogPosts:", error.message);
    return [];
  }
  return data;
}

export async function getBlogPost(slug) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error("getBlogPost:", error.message);
    return null;
  }
  return data;
}
