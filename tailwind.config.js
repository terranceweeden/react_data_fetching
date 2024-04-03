// @tailwind base;
// @tailwind components;
// @tailwind utilities;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#101010",
      mainback: "#1D0070",
      white: "#fff",
      black: "#000",
      default: "#D2D5DA",
      number: "#4B5563",
      subnumber: "#111827",
    },
    screens: {
      sm: { max: "768px", min: "350px" },
      md: "768px",
      lg: "1080px",
      xl: { min: "1440px" },
    },
    extend: {},
  },
  plugins: [],
};
