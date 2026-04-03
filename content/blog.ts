export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "protein-timing-for-energy",
    title: "Protein Timing for Stable Energy Across the Day",
    excerpt: "How to structure protein intake to reduce crashes and improve satiety.",
    date: "2026-03-14",
    category: "Nutrition Science"
  },
  {
    slug: "gut-health-basics",
    title: "Gut Health Fundamentals Without the Noise",
    excerpt: "A practical framework for fiber diversity, hydration, and symptom tracking.",
    date: "2026-02-22",
    category: "Digestive Health"
  },
  {
    slug: "meal-prep-systems",
    title: "Meal Prep Systems That Survive Busy Schedules",
    excerpt: "A repeatable weekly method for healthy meals in under 90 minutes.",
    date: "2026-01-30",
    category: "Lifestyle"
  }
];
