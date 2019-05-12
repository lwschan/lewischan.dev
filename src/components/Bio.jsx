/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from 'src/utils/typography';

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/favicon-icon.png/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    twitter
                }
            }
        }
    }
`;

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={(data) => {
                const { author, social } = data.site.siteMetadata;
                return (
                    <div
                        style={{
                            display: `flex`,
                            marginBottom: rhythm(2.5),
                        }}
                    >
                        <p>
                            Written by <strong>{author}</strong>, a software
                            developer living in KL.
                        </p>
                    </div>
                );
            }}
        />
    );
}

export default Bio;
