module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDark: '#0077b6',
        primaryLight: '#457b9d',
        accentDark: '#DE8971',
        accentLight: '#0A0A0A',
        mvpColor: '#FFB100',
      },
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
