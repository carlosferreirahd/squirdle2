module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'background': '#2C3639',
      'foreground': '#DCD7C9',
      'link': '#A27B5C',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
