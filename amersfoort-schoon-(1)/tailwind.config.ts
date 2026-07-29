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
        serif: ["var(--font-fraunces)", "serif"],
        display: ["var(--font-fraunces)", "serif"], 
      },
      colors: {
        // Puurix Hoofdkleuren
        ink: "#1A2B3C", // Charcoal Navy (Donkere tekst)
        stone: {
          bg: "#F8FAF9", // Off-white (Lichte achtergrond)
          200: "#E8EEF0", // Cool Gray (Lichte grijs voor borders)
          600: "#4A5D70", // Aangepaste tint voor subtiele teksten
        },
        accent: {
          DEFAULT: "#1B7A4E", // Emerald Green (Primair)
          hover: "#0F4C33", // Deep Forest (Hover-staten)
        },
        success: "#34C759", // Fresh Mint (Succes / Positief)

        // Gekoppelde kleuren voor de UI-modules (Offerte & Rekentool)
        primary: "#1A2B3C", // Charcoal Navy
        background: "#F8FAF9", // Off-white
        muted: "#E8EEF0", // Cool Gray
        border: "#E8EEF0", // Cool Gray
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        softer: "0 2px 10px rgba(0, 0, 0, 0.02)",
        premium: "0 10px 40px -10px rgba(0,0,0,0.08)",
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