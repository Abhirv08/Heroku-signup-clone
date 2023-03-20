/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': 'BentonSans, Helvetica Neue, sans-serif',
      'input': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    extend: {
      colors:{
        'text_color': '#383E40',
      }
    },
  },
  plugins: [],
}
