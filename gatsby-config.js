// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteName: 'lewischan.dev',
    siteUrl: 'https://lewischan.dev',
    defaultDescription: 'My cool blog written in Gatsby.',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'lewischan.dev',
        short_name: 'lewischan.dev',
        description: 'My cool blog written in Gatsby.',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#6893e3',
        display: 'standalone',
        icon: './src/images/favicon.png',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
  ],
  jsxRuntime: 'automatic',
};
