import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}>;

export function Section({ title, subtitle, action, className = "", children }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      {(title || subtitle || action) && (
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            {title ? <h2 className="section-heading">{title}</h2> : null}
            {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
