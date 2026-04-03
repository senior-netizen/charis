export type FounderProfile = {
  name: string;
  title: string;
  yearsExperience: string;
  summary: string;
  expertise: string[];
  achievements: string[];
  mediaExperience: string;
  mission: string;
  image: {
    src: string;
    alt: string;
  };
};

export const founderProfile: FounderProfile = {
  name: "Tafadzwa A. Zhawari",
  title: "Founder & Lead Nutritionist",
  yearsExperience: "8+ years",
  summary:
    "Tafadzwa is a skilled nutritionist with over eight years of experience spanning public health nutrition, food systems, and community-led health programming.",
  expertise: [
    "Food security and livelihoods programming",
    "Gender mainstreaming in nutrition interventions",
    "Project management and implementation oversight",
    "Training curriculum and CARE group material development",
    "Guideline drafting for School Nutrition Guidelines and Food Based Dietary Guidelines (FBDGs)"
  ],
  achievements: [
    "Led the Cyclone Idai Nutrition Response Team from March to October 2019",
    "Established nutrition gardens in Makoni and Nyanga",
    "Spearheaded a seed bank initiative and Farmer Field Schools in Nyanga"
  ],
  mediaExperience:
    "Host and nutrition educator on Diamond FM and Capitalk radio programs, translating technical health topics into practical public guidance.",
  mission:
    "Her mission is to improve health outcomes and reduce disparities by delivering culturally relevant, evidence-based nutrition systems.",
  image: {
    src: "/1775198351029_edit_1109274310016730.jpg",
    alt: "Tafadzwa A. Zhawari, founder of Charis Nutrition"
  }
};
