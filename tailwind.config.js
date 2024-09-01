/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-200": "#B3B3B3", //body text
        "gray-500": "#5A5A5A", //text
        "primary-500": "#4A4A4A", //buttons, borders, loght contrast elements
        "primary-600": "#2E2E2E",
        "primary-850": "#1C1C1C", //background
        "primary-900": "#1A1A1A", //background
        "secondary-300": "#fda4af", //could use rose-300 instead, its the same color
        "secondary-400": "#A8576B", //button hover?
        "secondary-950": "#4C0519", //primary buttons
        "gold-accent": "#D4AF37",
        "cool-teal": "#168C80", //teal-600 instead, its the same color
      },
    },
  },
  plugins: [],
};
