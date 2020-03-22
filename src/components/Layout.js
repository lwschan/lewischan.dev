import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from 'components/Header';
import sharedPropTypes from 'propTypes/sharedPropTypes';
import 'prismjs/themes/prism-okaidia.css';

const propTypes = {
  children: sharedPropTypes.children.isRequired,
};

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return (
    <div className="site-wrapper">
      <Header title={data.site.siteMetadata.title} />
      {children}
      <footer className="site-footer">
        <p>&copy; 2020 Lewis Chan</p>
      </footer>
    </div>
  );
}

Layout.propTypes = propTypes;
