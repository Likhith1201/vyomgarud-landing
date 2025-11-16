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
        dark: "#111111", 
        light: "#f5f5f5", 
        primary: "#ff7b00", 
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
export default config;