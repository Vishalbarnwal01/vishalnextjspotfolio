"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-line bg-white p-8 shadow-[0_20px_50px_-20px_rgba(17,17,17,0.15)]"
      >
        <h1 className="text-[22px] font-bold text-ink">Admin Login</h1>
        <p className="mt-1 text-[14px] text-muted">
          Sign in to manage projects and blog posts.
        </p>

        <label className="mt-6 block text-[13px] font-medium text-ink">
          Email
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
          />
        </label>

        <label className="mt-4 block text-[13px] font-medium text-ink">
          Password
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-[14px] text-ink outline-none focus:border-ink"
          />
        </label>

        {error && <p className="mt-4 text-[13px] text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-ink px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-shopify hover:text-forest disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </main>
  );
}
