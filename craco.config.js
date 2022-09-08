const path = require('path');
const CracoLessPlugin = require('craco-less');

const alias = (path = 'src') => ({
  '@assets': `${path}/assets`,
  '@components': `${path}/components`,
  '@pages': `${path}/pages`,
  '@services': `${path}/services`,
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
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#A27B5C',
              '@btn-primary-color': '#DCD7C9',
              '@link-hover-decoration': 'underline',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
