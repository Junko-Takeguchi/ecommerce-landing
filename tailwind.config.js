/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#003d29",
        "peach" : "#fbf0e4",
        "skin" : "#ffa372"
      }
    },
  },
  plugins: [],
}

