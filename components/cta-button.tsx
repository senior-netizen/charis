import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type CTAButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "ghost";
};

export function CTAButton({ variant = "primary", className = "", ...props }: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";
  const variants = {
    primary: "bg-brand text-white hover:bg-[#186451]",
    ghost: "border border-brand/30 bg-white text-brand hover:border-brand/50 hover:bg-brand/5"
  };

  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
