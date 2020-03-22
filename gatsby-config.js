/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'lewischan.dev',
    author: 'Lewis Chan',
    description: 'My cool personal blog project, powered by Gatsby',
    siteUrl: 'https://lewischan.dev/',
    social: {
      twitter: 'yeowwwai',
      github: 'lewisgauss',
    },
    home: {
      title: 'hello!',
      description:
        'a blog that talks about my journey and life as a software developer',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-140062861-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        sampleRate: 100,
        siteSpeedSampleRate: 100,
        forceSSL: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'lewischan.dev',
        short_name: 'lewischan.dev',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/favicon-icon.png',
        include_favicon: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
  ],
};
