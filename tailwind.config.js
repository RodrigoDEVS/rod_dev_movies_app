/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#c23636',
        red: {
          100: '#ff0000',
          200: '#cf0e00',
          300: '#af0d01',
        },
      }
    },
  },
  plugins: [],
}

