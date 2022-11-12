const paths = require('../scripts/paths');

module.exports = {
  plugins: [
    require('tailwindcss')(paths.appTailwindConfig),
    require('autoprefixer'),
  ],
};
