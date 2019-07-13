import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { rhythm, scale } from 'src/utils/typography';

const propTypes = {
    location: PropTypes.shape({}).isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

function Layout({ location, title, children }) {
    const rootPath = `.`;
    let header;

    if (location.pathname === rootPath) {
        header = (
            <h1
                style={{
                    ...scale(1.5),
                    marginBottom: rhythm(1.5),
                    marginTop: 0,
                }}
            >
                <Link
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                    }}
                    to="/"
                >
                    {title}{' '}
                </Link>{' '}
            </h1>
        );
    } else {
        header = (
            <h3
                style={{
                    marginTop: 0,
                }}
            >
                <Link
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                    }}
                    to="/"
                >
                    {title}{' '}
                </Link>{' '}
            </h3>
        );
    }
    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
        >
            <header> {header} </header> <main> {children} </main>{' '}
            <footer> © {new Date().getFullYear()}, lewischan.dev </footer>{' '}
        </div>
    );
}

Layout.propTypes = propTypes;

export default Layout;
