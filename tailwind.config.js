/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FF7622",
        "primary-dark": "#121223",
        "light-gray": "#F0F5FA",
        "dark-gray": "#98A8B8",
        "secondary-orange": "#F58D1D",
        "primary-red": "#FF3434",
        "dark-text": "#32343E",
        "gray-text": "#646982"
      }
    },
  },
  plugins: [],
}