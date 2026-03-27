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
        primary: "#0B3D5E",
        secondary: "#F5E6C8",
        accent: "#E8694A",
        gold: "#D4A843",
        dark: "#1A1A2E",
        light: "#FAFAF7",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)"],
        sans: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
