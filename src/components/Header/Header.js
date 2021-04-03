import React from 'react';
import HomeLink from 'components/HomeLink';
import Navigation from 'components/Navigation';

function Header() {
  return (
    <header>
      <div>
        <HomeLink />
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
