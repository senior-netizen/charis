import Link from "next/link";
import { navLinks } from "@/data/site";
import { CTAButton } from "@/components/cta-button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight text-brand">
          Charis Nutrition
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-slate-700 transition-colors hover:text-brand">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <CTAButton href="/contact" className="hidden md:inline-flex">
          Book Consultation
        </CTAButton>
      </nav>
    </header>
  );
}
