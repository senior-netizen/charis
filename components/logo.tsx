import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Charis Nutrition Home">
      <Image
        src="/charis-logo.svg"
        alt="Charis Nutrition logo"
        width={compact ? 140 : 190}
        height={compact ? 46 : 62}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}
