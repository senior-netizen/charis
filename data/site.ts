export const siteConfig = {
  name: "Charis Nutrition",
  description:
    "Evidence-based nutrition coaching and wellness strategy for individuals and teams.",
  url: "https://charisnutrition.com",
  whatsappNumber: "15551234567",
  email: "hello@charisnutrition.com",
  phone: "+1 (555) 123-4567"
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/programs", label: "Programs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
] as const;
