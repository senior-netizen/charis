import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Charis Nutrition's approach, values, and founder expertise."
};

export default function AboutPage() {
  return (
    <>
      <Section
        title="About Charis Nutrition"
        subtitle="We combine clinical nutrition expertise, behavior design, and measurable coaching systems."
      >
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-slate-700">
          <p>
            Charis Nutrition was created to deliver a better model of nutrition care: practical, data-informed, and
            grounded in long-term outcomes.
          </p>
          <p>
            We use a structured framework that balances medical context, lifestyle realities, and sustainable behavior
            change.
          </p>
        </div>
      </Section>
    </>
  );
}
