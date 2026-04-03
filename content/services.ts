export type Service = {
  title: string;
  summary: string;
  outcomes: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    title: "Clinical Nutrition Coaching",
    summary: "Personalized plans for metabolic health, hormone balance, and digestive support.",
    outcomes: ["Lower inflammation markers", "Improved energy and focus", "Better blood sugar stability"],
    benefits: ["Data-informed protocol", "Weekly accountability", "Supplement audit and optimization"]
  },
  {
    title: "Family Nutrition Planning",
    summary: "Practical meal systems for households that need sustainable routines.",
    outcomes: ["Reduced meal decision fatigue", "Balanced macro distribution", "Healthier pantry standards"],
    benefits: ["Family-friendly templates", "Grocery list automation", "Simple habit coaching"]
  },
  {
    title: "Corporate Wellness Advisory",
    summary: "Performance nutrition workshops and strategy for healthy, productive teams.",
    outcomes: ["Improved team wellbeing", "Reduced burnout risk", "Higher engagement in wellness programs"],
    benefits: ["Leadership health briefings", "Custom workshop content", "Quarterly impact reporting"]
  },
  {
    title: "Prenatal & Postpartum Nutrition",
    summary: "Nutrient-dense strategies that support maternal recovery and infant development.",
    outcomes: ["Improved nutrient sufficiency", "Stable postpartum recovery", "Confidence in feeding choices"],
    benefits: ["Trimester-specific support", "Lab and symptom review", "Safe supplementation guidance"]
  },
  {
    title: "Sports & Performance Fueling",
    summary: "Training-aligned nutrition systems for athletes and active professionals.",
    outcomes: ["Faster recovery cycles", "Better endurance output", "Consistent body composition progress"],
    benefits: ["Periodized fueling plans", "Hydration protocols", "Competition-day strategy"]
  }
];
