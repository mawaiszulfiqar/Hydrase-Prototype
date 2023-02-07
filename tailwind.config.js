/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "576px",
      ...defaultTheme.screens,
    }
  },
  plugins: [],
};
