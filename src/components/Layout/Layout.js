import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function Layout({ children }) {
    return <div className={styles.layout}>{children}</div>;
}

Layout.propTypes = propTypes;

export default Layout;
