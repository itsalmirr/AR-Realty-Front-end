module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { light: '#0077b6', dark: '#6D67E4' },
        background: { light: '#F9F7F7', dark: '#1B2430', darkLight: '#222831' },
        primaryLight: '#457b9d',
        accent: { light: '#DE8971', dark: '#2DCDDF' },
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
