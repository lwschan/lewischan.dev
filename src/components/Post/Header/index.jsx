import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
        .isRequired,
};

function Header({ children }) {
    return (
        <h1
            style={{
                fontSize: '3rem',
                fontWeight: 400,
            }}
        >
            {children}
        </h1>
    );
}

Header.propTypes = propTypes;

export default Header;
