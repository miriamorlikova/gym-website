/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB", //body text, main text color
        "gray-200": "#B3B3B3", //body text
        "gray-250": "#9E9E9E", //text

        "primary-light": "#474747", //background
        "primary-medium": "#2C2C2C",
        "primary-dark": "#1A1A1A", //background

        "rose-hover": "#fda4af", //could use rose-300 instead, its the same color
        "rose-light": "#A8576B",
        "rose-dark": "#42222A",
        "gold-accent": "#D4AF37",
      },
      backgroundImage: (theme) => ({
        "gradient-gray": "linear-gradient(180deg, #1A1A1A 0%, #474747 100%)",
        "gradient-rose": "linear-gradient(90deg, #A8576B 0%, #42222A 100%)",
        "mobile-home": "url('./src/assets/first-section-photo.png')",
      }),
      fontFamily: {
        exo: ["Exo", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
        play: ["Play", "sans-serif"],
      },
      content: {
        furitext: "url('./assets/faded-logo.png')",
        abstractwaves: "url('./assets/abstract-waves.png')",
        sparkles: "url('./assets/sparkles.png')",
      },
      letterSpacing: {
        wide: ".05em",
        wider: ".15em",
        widest: ".18em",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1075px",
      lg: "1250px",
    },
  },
  plugins: [],
};
