const path = require('path');

const alias = (path = 'src') => ({
  '@assets': `${path}/assets`,
  '@components': `${path}/components`,
  '@pages': `${path}/pages`,
  '@types': `${path}/types`,
  '@utils': `${path}/utils`,
  '@providers': `${path}/providers`,
});

const resolvedAlias = (alias) => Object
  .entries(alias)
  .reduce((acc, [key, value]) => ({
    ...acc,
    [key]: path.resolve(__dirname, value),
  }), {});

module.exports = {
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: resolvedAlias(alias()),
  },
}
