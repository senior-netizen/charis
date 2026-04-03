import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Charis Nutrition to discuss your nutrition and wellness goals."
};

const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hi Charis Nutrition, I would like to book a consultation."
)}`;

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Tell us your goals and constraints. We will respond with a focused next-step plan.">
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
        <div className="rounded-2xl border border-slate-100 bg-brand.soft p-6">
          <h2 className="text-xl font-semibold text-slate-900">Direct contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>Response time: within one business day</li>
          </ul>
          <div className="mt-6">
            <CTAButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </CTAButton>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
