/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#ffd9e1',
        anotherPink: '#ba005c'
      }
    },
  },
  plugins: [],
}

