/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Ubuntu',
        secondaty: 'Jost'
      },

      colors: {
        customPink: '#ffd9e1',
        anotherPink: '#ba005c'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

