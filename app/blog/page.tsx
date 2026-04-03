import type { Metadata } from "next";
import { Section } from "@/components/section";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Evidence-driven articles on nutrition science, gut health, and practical wellness routines."
};

export default function BlogPage() {
  return (
    <Section title="Blog" subtitle="CMS-ready content architecture. Replace local content arrays with a headless CMS connector when needed.">
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">{post.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <p className="mt-4 text-xs text-slate-500">{new Date(post.date).toLocaleDateString("en-US")}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
