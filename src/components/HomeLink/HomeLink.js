import React from 'react';
import { Link } from 'gatsby';
import * as styles from './homelink.module.scss';

function HomeLink() {
    return (
        <Link aria-label="lewischan.dev - Go to Home" className={styles.anchorTag} to="/">
            <div className={styles.anchorTag__text}>lewischan.dev</div>
        </Link>
    );
}

export default HomeLink;
