module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { light: '#3686d6', dark: '#3686d6' },
        background: { light: '#FFFFFF', dark: '#17202a', darkLight: '#141c26' },
        primaryLight: '#457b9d',
        accent: { light: '#DE8971', dark: '#6D67E4', darker: '#1a81e8' },
        textColor: {
          100: '#cbd5e1',
          200: '#ede9fe',
          icons: '#30475E',
        },
        accentLight: '#0A0A0A',
        mvpColor: '#FFB100',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
