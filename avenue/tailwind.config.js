/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003366", // Main brand color (from the PDF)
        secondary: "#009688", // Supporting color
        accent: "#FF9800", // Accent color
      },
    },
  },
  plugins: [],
};
