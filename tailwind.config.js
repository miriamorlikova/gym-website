/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB", //body text, main text color

        "primary-light": "#474747", //background
        "primary-medium": "#2C2C2C",
        "primary-dark": "#1A1A1A", //background

        "rose-light": "#A8576B",
        "rose-dark": "#42222A",
        "gold-accent": "#D4AF37",
        "red-warning": "#90001A",
      },
      backgroundImage: (theme) => ({
        "gradient-gray": "linear-gradient(180deg, #1A1A1A 0%, #474747 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #1A1A1A 70%, rgba(28,28,28,0.85) 100%)",
        "gradient-rose": "linear-gradient(90deg, #A8576B 0%, #42222A 100%)",
        "mobile-home": "url('./src/assets/first-section-photo.png')",
      }),
      fontFamily: {
        exo: ["Exo", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
      },
      content: {
        furitext: "url('./assets/faded-logo.png')",
        abstractwaves: "url('./assets/abstract-waves.png')",
        sparkles: "url('./assets/sparkles.png')",
      },
      letterSpacing: {
        normal: "0.05em",
        wide: ".08em",
        wider: ".15em",
        widest: ".18em",
      },
      fontSize: {
        xxs: "0.55rem",
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
