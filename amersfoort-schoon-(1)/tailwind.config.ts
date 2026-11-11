import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"], 
        serif: ["var(--font-display)", "serif"],
        display: ["var(--font-display)", "serif"],
      },
      colors: {
        // Puurix Hoofdkleuren
        ink: "#131D35",
        stone: {
          50: "#F5F3EE",
          100: "#EEECE5",
          bg: "#F5F3EE",
          200: "#DDD9CC",
          600: "#4A4E60",
          700: "#343849",
        },
        accent: {
          DEFAULT: "#006B57",
          hover: "#0B5144",
        },
        gold: "#C9A96E",
        success: "#2F8A62",

        // Gekoppelde kleuren voor de UI-modules (Offerte & Rekentool)
        primary: "#131D35",
        background: "#F5F3EE",
        muted: "#F5F3EE",
        border: "#DDD9CC",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(19, 29, 53, 0.06)",
        softer: "0 2px 10px rgba(19, 29, 53, 0.03)",
        premium: "0 16px 48px -18px rgba(19, 29, 53, 0.16)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
