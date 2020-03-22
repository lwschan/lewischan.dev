import React from 'react';
import PropTypes from 'prop-types';
import SEO from 'components/SEO';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import PostLink from 'components/PostCard';
import MainSection from 'components/MainSection';
import sharedPropTypes from 'propTypes/sharedPropTypes';

const propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.any.isRequired,
  }).isRequired,
};

export default function Home({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data;

  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <SEO />
      <MainSection />
      <h2>Posts &darr;</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
}

Home.propTypes = propTypes;

export const pageQuery = graphql`
  query homePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            metaDescription
          }
        }
      }
    }
  }
`;
