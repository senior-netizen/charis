import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import { founderProfile } from "@/data/founder";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Charis Nutrition's approach, values, and founder expertise."
};

export default function AboutPage() {
  return (
    <>
      <Section
        title="About Charis Nutrition"
        subtitle="Public health nutrition leadership, practical systems design, and measurable population impact."
      >
        <div className="grid items-start gap-8 md:grid-cols-[300px_1fr]">
          <Image
            src={founderProfile.image.src}
            alt={founderProfile.image.alt}
            width={720}
            height={900}
            loading="lazy"
            className="h-[360px] w-full rounded-3xl object-cover"
          />

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand">{founderProfile.title}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{founderProfile.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">{founderProfile.summary}</p>
            <p className="mt-3 text-sm font-medium text-slate-600">Experience: {founderProfile.yearsExperience}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Expertise</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                {founderProfile.expertise.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Notable achievements</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                {founderProfile.achievements.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-slate-700">{founderProfile.mediaExperience}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{founderProfile.mission}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
