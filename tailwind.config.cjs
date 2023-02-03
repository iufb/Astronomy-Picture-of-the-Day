/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "150px 300px 450px 1fr",
      },
      gridTemplateRows: {
        custom: "50px 50px 1fr 1fr",
      },
    },
    colors: {
      baseColor: "#252728",
      white: "#fefcf8",
      gray: "#d1d5db",
    },
    fontFamily: {
      neueu: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [],
};
