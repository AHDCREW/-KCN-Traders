import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",
        "primary-light": "#4CAF50",
        accent: "#FF8F00",
        bg: "#FFFDF7",
        surface: "#F9FAF5",
        "text-main": "#1F2937",
        muted: "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
