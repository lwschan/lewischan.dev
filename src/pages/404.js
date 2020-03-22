import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import sharedPropTypes from 'propTypes/sharedPropTypes';

const propTypes = {
  data: sharedPropTypes.data.isRequired,
};

export default function ErrorPage({ data }) {
  const { site } = data;

  const message = "You just hit a route that doesn't exist...";

  return (
    <Layout>
      <Helmet>
        <title>{`Contact — ${site.siteMetadata.title}`}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      {message}
    </Layout>
  );
}

ErrorPage.propTypes = propTypes;

export const pageQuery = graphql`
  query errorPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
