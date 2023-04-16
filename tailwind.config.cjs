/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxs: "220px",
      xs: "330px",
      ...defaultTheme.screens,
    },
    fontFamily : {
      roboto: "'Roboto', sans-serif"
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/line-clamp"),
  ],
};
