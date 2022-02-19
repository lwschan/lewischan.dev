/* eslint-disable @typescript-eslint/no-var-requires */

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'lewischan.dev',
    siteUrl: 'https://lewischan.dev',
  },
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-root-import'],
  jsxRuntime: 'automatic',
};
