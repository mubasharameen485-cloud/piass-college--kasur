/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        piassNavy: {
          DEFAULT: "#0B1B4F",
          dark: "#071233",
          light: "#12265E",
        },
        piassTeal: {
          DEFAULT: "#0D7A68",
          dark: "#0A5C4E",
          light: "#149580",
        },
        piassGold: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          light: "#FBBF24",
        },
      },
    },
  },
  plugins: [],
};