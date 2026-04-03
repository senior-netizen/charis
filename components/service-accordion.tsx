"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "@/content/services";

type ServiceAccordionProps = {
  services: Service[];
};

export function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <article key={service.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left"
              aria-expanded={isOpen}
              aria-controls={`service-panel-${index}`}
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
              </div>
              <span className="ml-4 text-2xl text-brand">{isOpen ? "−" : "+"}</span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`service-panel-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Outcomes</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {service.outcomes.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Benefits</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {service.benefits.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
