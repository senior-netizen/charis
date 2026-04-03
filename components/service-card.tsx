import type { Service } from "@/content/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {service.outcomes.map((outcome) => (
          <li key={outcome}>• {outcome}</li>
        ))}
      </ul>
    </article>
  );
}
