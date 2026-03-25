/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    cream: "#fdf6f0",
    coffee: "#6f4e37",
    latte: "#c4a484",
    espresso: "#3b2f2f",
  },
}
  },
  plugins: [],
}