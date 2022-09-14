module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'background': '#0C3348',
      'foreground': '#FFCC00',
      'link': '#5EBDFC',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
