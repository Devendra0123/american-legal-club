/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2f87ce",
        lightBlue: "#8ccee8",
        primaryRed: "#f60100",
        lightGray: "#f4f5f7",
        gray1: "#dee1e6",
        lightOrange: "#e9e2d2"
      }
    },
  },
  plugins: [],
}