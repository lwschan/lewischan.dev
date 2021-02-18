module.exports = {
    siteMetadata: {
        title: 'lewischan.dev',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en',
            },
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['IBM Plex Sans', 'Noto Sans'],
                },
            },
        },
    ],
};
