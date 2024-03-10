import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultTheme,
    fontFamily: {
      sans: ["var(--font-sans)"],
      serif: ["var(--font-serif)"],
      mono: ["var(--font-mono)"]
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")]
};
export default config;
