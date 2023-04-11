/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        light: "#409110",
        DEFAULT: "#338000",
        dark: "#176100",
      },
      secondary: {
        light: "#e10262",
        DEFAULT: "#d0025f",
        dark: "#ba025a",
      },
      gray: {
        light: "#515151",
        DEFAULT: "#333333",
        dark: "#131313",
      },
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        "noto-sans": ["var(--font-noto-sans)"],
      },
      gridTemplateColumns: {
        "dl": "auto 1fr",
      },
      spacing: {
        "120": "30rem",
      },
    },
  },
  plugins: [],
};
