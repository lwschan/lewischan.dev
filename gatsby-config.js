module.exports = {
  siteMetadata: {
    title: 'lewischan.dev',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM Plex Sans:100,200,300,400,500,600,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
