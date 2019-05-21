import React from 'react';
import PropTypes from 'prop-types';
import {
    markdownRemark as markdownRemarkPropType,
    site as sitePropType,
} from 'src/propTypes';
import { Link, graphql } from 'gatsby';

import Layout from 'src/components/Layout';
import PostHeader from 'src/components/Post/Header';
import SEO from 'src/components/SEO';
import Bio from 'src/components/Bio';
import { rhythm, scale } from 'src/utils/typography';

const propTypes = {
    data: PropTypes.shape({
        markdownRemark: markdownRemarkPropType,
        site: sitePropType.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.shape({
        previous: PropTypes.shape({}),
        next: PropTypes.shape({}),
    }).isRequired,
};

function Post({ data, location, pageContext }) {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <PostHeader>{post.frontmatter.title}</PostHeader>
            <p
                style={{
                    ...scale(-1 / 5),
                    display: `block`,
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-1),
                }}
            >
                {post.frontmatter.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
                style={{
                    marginBottom: rhythm(1),
                }}
            />
            <Bio />

            <ul
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}
            >
                <li>
                    {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </li>
            </ul>
        </Layout>
    );
}

Post.propTypes = propTypes;

export default Post;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;
