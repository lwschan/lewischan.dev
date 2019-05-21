module.exports = {
    siteMetadata: {
        title: `lewischan.dev`,
        author: `Lewis Chan`,
        description: `My cool website`,
        siteUrl: `https://lewischan.dev/`,
        social: {
            twitter: `yeowwwai`,
            github: 'lewisgauss',
        },
    },
    plugins: [
        'gatsby-plugin-root-import',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Roboto`,
                        variants: [`100`, `300`, `400`, `500`, `700`, `900`],
                    },
                    {
                        family: `Open Sans`,
                        variants: [`300`, `400`, `600`, `700`, `800`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
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
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                            site_url: siteUrl
                        }
                    }
                }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map((edge) => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        description: edge.node.excerpt,
                                        date: edge.node.frontmatter.date,
                                        url:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        custom_elements: [
                                            {
                                                'content:encoded':
                                                    edge.node.html,
                                            },
                                        ],
                                    },
                                );
                            });
                        },
                        query: `
                        {
                          allMarkdownRemark(
                            sort: { order: DESC, fields: [frontmatter___date] },
                          ) {
                            edges {
                              node {
                                excerpt
                                html
                                fields { slug }
                                frontmatter {
                                  title
                                  date
                                }
                              }
                            }
                          }
                        }
                        `,
                        output: '/rss.xml',
                        title: 'lewischan.dev RSS Feed',
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `lewischan.dev`,
                short_name: `lewischan.dev`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/favicon-icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-netlify`,
    ],
};
