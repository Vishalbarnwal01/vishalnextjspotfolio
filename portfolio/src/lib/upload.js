// Uploads a file to the public "media" Storage bucket and returns its
// public URL. Used by the admin blog/project forms for cover images and
// inline images/video dropped into post content.
export async function uploadMedia(supabase, file) {
  const ext = file.name.split(".").pop();
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from("media").upload(path, file);
  if (error) throw error;

  const { data } = supabase.storage.from("media").getPublicUrl(path);
  return data.publicUrl;
}
