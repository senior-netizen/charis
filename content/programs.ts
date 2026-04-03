export type Program = {
  name: string;
  duration: string;
  audience: string;
  highlights: string[];
};

export const programs: Program[] = [
  {
    name: "90-Day Metabolic Reset",
    duration: "12 weeks",
    audience: "Adults with low energy, insulin resistance, or inconsistent eating patterns",
    highlights: ["Bi-weekly coaching", "Nutrition protocol playbook", "Progress dashboard and check-ins"]
  },
  {
    name: "Executive Wellness Sprint",
    duration: "6 weeks",
    audience: "High-performing professionals who need practical routines",
    highlights: ["Travel-ready meal strategy", "Stress and sleep nutrition stack", "One-page decision framework"]
  },
  {
    name: "Stronger Mother Program",
    duration: "16 weeks",
    audience: "Pregnancy through postpartum recovery",
    highlights: ["Trimester/postpartum nutrition roadmap", "Weekly symptom-led adjustments", "Partner education resources"]
  }
];
