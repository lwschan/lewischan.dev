import React from 'react';
import { Link } from 'gatsby';
import styles from './homelink.module.scss';

function HomeLink() {
    return (
        <Link className={styles.anchorTag} to="/">
            <div className={styles.anchorTag__text}>lewischan.dev</div>
        </Link>
    );
}

export default HomeLink;
