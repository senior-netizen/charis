type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
      <p className="text-sm leading-relaxed text-slate-700">“{quote}”</p>
      <p className="mt-5 text-sm font-semibold text-slate-900">{name}</p>
      <p className="text-xs uppercase tracking-wide text-slate-500">{role}</p>
    </article>
  );
}
