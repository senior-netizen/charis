import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ServiceAccordion } from "@/components/service-accordion";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore nutrition and wellness services with clear outcomes and benefits."
};

export default function ServicesPage() {
  return (
    <Section
      title="Services"
      subtitle="Each service includes a defined protocol, expected outcomes, and measurable milestones."
    >
      <ServiceAccordion services={services} />
    </Section>
  );
}
