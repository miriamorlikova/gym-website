/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        "gray-20": "#F8F4EB", //body text, main text color
        "gray-200": "#B3B3B3", //body text
        "gray-250": "#9E9E9E", //text
        
        "primary-light": "#474747", //background
        "primary-medium": "#2E2E2E",
        "primary-dark": "#1A1A1A", //background

        "rose-hover": "#fda4af", //could use rose-300 instead, its the same color
        "rose-light": "#A8576B", 
        "rose-dark": "#42222A",
        "gold-accent": "#D4AF37",
      },
      backgroundImage: (theme => ({
        "gradient-gray": "linear-gradient(90deg, #1A1A1A 0%, #474747 100%)",
        "mobile-home": "url('./src/assets/first-section-photo.png')"
      })),
     fontFamily: {
      "play": [ "Exo", "sans-serif"],
      "oxanium": ["Oxanium", "sans-serif"],
      "exo": ["Play", "sans-serif"]
     } 
    },
  },
  plugins: [],
};
