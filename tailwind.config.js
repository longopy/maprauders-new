/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: colors.slate[900],
      light: colors.white,
      accent: colors.sky[400],
      sky: colors.sky,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral
    },
    extend: {
      animation: {
        fade: "kfr1 0.2s ease-in-out",
        "fade-l": "kfr2 0.2s ease-in-out",
        "fade-r": "kfr3 0.2s ease-in-out",
      },
      keyframes: (_theme) => ({
        kfr1: {
          "0%": { opacity: 0.4, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        kfr2: {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(0px)" },
        },
        kfr3: {
          "0%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(0px)" },
        },
      }),
    },
  },
  plugins: [],
};
