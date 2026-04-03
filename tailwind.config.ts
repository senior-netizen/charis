import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1F7A63",
          soft: "#EAF5F1"
        }
      },
      maxWidth: {
        content: "1120px"
      },
      boxShadow: {
        card: "0 8px 24px rgba(31, 122, 99, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
