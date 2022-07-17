module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#0077b6',
        primaryLight: '#457b9d',
        accentDark: '#f77f00',
        accentLight: '#0A0A0A',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
