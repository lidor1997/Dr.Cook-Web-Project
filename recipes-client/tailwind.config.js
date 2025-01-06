/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This will ensure Tailwind purges unused styles correctly
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
