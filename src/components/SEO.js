import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
  title: null,
};

const propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const titleForPage = title || site.siteMetadata.title;

  let titleTemplate = `%s | ${site.siteMetadata.title}`;
  if (titleForPage === site.siteMetadata.title) {
    titleTemplate = title;
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleForPage}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: titleForPage,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: titleForPage,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = defaultProps;
SEO.propTypes = propTypes;

export default SEO;
