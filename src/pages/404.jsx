import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

const propTypes = {
    data: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
};

function NotFoundPage({ data, location }) {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="404: Not Found" />
            <h1> Not Found </h1>{' '}
            <p>You just hit a route that doesn & #39;t exist... the sadness.</p>
        </Layout>
    );
}

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
