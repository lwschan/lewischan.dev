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
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
  jsxRuntime: 'automatic',
};
