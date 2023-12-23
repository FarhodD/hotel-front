/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        mainColor: '#1f1f1f',
        secondaryColor: '#8C4300'
      }
    },

  },
  plugins: [],
}

