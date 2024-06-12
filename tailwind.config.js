/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "monsterrat": ['monsterrat', 'sans-serif']
      }
    },
    colors: {
      charcoal: '#131313',
      white: '#FFFFFF',
      gray: '#F1F1F1'
    },
    spacing: {
      '1': '9px',
      '2': '18px',
      '3': '27px',
      '4': '36px',
      '12': '107px',
    }
  },
  plugins: [],
}

