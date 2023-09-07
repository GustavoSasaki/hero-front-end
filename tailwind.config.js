/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#F1F7ED',
        },
        'accent': {
          DEFAULT: '#7CA982'
        },
        'secondary': {
          DEFAULT: "#243E36"
        },
        'text': '#0E1513'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}

