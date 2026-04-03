import Image from "next/image";
import { AnimatedReveal } from "@/components/animated-reveal";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";

export default function HomePage() {
  return (
    <>
      <section className="section grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <AnimatedReveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Evidence-based wellness</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Strategic nutrition care built for real life.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Charis Nutrition helps individuals, families, and teams build sustainable health through personalized
            nutrition systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact">Start Your Plan</CTAButton>
            <CTAButton href="/services" variant="ghost">
              Explore Services
            </CTAButton>
          </div>
        </AnimatedReveal>
        <AnimatedReveal>
          <Image
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=80"
            alt="Healthy food ingredients on a kitchen surface"
            width={900}
            height={680}
            className="h-[420px] w-full rounded-3xl object-cover"
            priority
          />
        </AnimatedReveal>
      </section>

      <Section className="pt-4" title="Trusted by health-conscious clients" subtitle="Registered credentials and evidence-informed methods.">
        <div className="grid gap-3 rounded-2xl bg-brand.soft p-6 text-center text-sm text-slate-700 md:grid-cols-4">
          {["Registered Dietitian", "Precision Nutrition", "ISAK Certified", "Corporate Wellness Partner"].map(
            (item) => (
              <p key={item} className="font-medium">
                {item}
              </p>
            )
          )}
        </div>
      </Section>

      <Section
        title="From daily overwhelm to clear nutrition systems"
        subtitle="Most clients have information overload, inconsistent habits, and unclear priorities. We translate data into practical routines you can sustain."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
            <h3 className="text-lg font-semibold">The problem</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Generic diet plans ignore your schedule, stress load, and physiology, leading to low adherence and short-term results.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-brand.soft p-6 shadow-card">
            <h3 className="text-lg font-semibold">The solution</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              A structured coaching process with measurable goals, weekly iterations, and context-aware recommendations.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Core services" subtitle="Focused interventions with clear outcomes." action={<CTAButton href="/services" variant="ghost">View All</CTAButton>}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 5).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Section>

      <Section title="Meet the founder">
        <div className="grid items-center gap-8 md:grid-cols-[320px_1fr]">
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
            alt="Founder of Charis Nutrition"
            width={720}
            height={860}
            loading="lazy"
            className="h-[360px] w-full rounded-3xl object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold">Dr. Eliana Brooks, RD</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Eliana is a registered dietitian with 12+ years of experience in clinical nutrition, maternal health, and
              performance coaching. Her practice combines scientific rigor with practical behavior design.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Client outcomes" subtitle="Results grounded in consistency, not hype.">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl bg-brand px-8 py-12 text-center text-white md:px-16">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to build your nutrition system?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
            Book a consultation to define your goals, constraints, and high-impact nutrition strategy.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact" className="bg-white text-brand hover:bg-slate-100">
              Book Consultation
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
