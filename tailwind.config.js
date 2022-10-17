module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      display: ["group-hover"],
    },
    colors: {
      'background': '#0C3348',
      'foreground': '#FFCC00',
      'link': '#5EBDFC',
    },
    screens: {
      'sm': {'max': '500px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
