/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#05C7F8",
          dark: "#101F3C"
        },
        orange: {
          light: "#FF733C",
          dark: "#F5510F"
        },
        grey: {
          light: "#F6F6F6",
          dark: "#D9D9D9"
        }
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

