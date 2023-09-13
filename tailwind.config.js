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
          DEFAULT: '#3b82f6',
          light:"#60a5fa",
          brigther:"#1d4ed8"
        },
        'secondary': {
          DEFAULT: "#243E36"
        },
        'text': '#0E1513',
        'bgHeroTitle': '#5d598c'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}

