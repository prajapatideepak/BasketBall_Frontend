/** @type {import('tailwindcss').Config} */
const debugScreen = require('tailwindcss-debug-screens');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    debugScreen
  ],
}
