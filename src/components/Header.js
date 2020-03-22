import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/Navigation';
import { Link } from 'gatsby';

const propTypes = {
  title: PropTypes.string.isRequired,
};

export default function Header({ title }) {
  return (
    <header className="site-header">
      <div className="site-title">
        <Link to="/">{title}</Link>
      </div>
      <Navigation />
    </header>
  );
}

Header.propTypes = propTypes;
