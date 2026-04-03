import type { Metadata } from "next";
import { Section } from "@/components/section";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Programs",
  description: "Structured coaching programs for metabolic health, executive wellness, and maternal nutrition."
};

export default function ProgramsPage() {
  return (
    <Section title="Programs" subtitle="Structured, time-bound programs designed for measurable progress.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <article key={program.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">{program.duration}</p>
            <h3 className="mt-2 text-xl font-semibold">{program.name}</h3>
            <p className="mt-3 text-sm text-slate-600">{program.audience}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {program.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
