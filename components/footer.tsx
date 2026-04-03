import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="section py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">{siteConfig.description}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-700 hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
              <li>Mon–Fri, 8AM–6PM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
