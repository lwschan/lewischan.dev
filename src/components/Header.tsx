import { Link } from 'gatsby';

function Header() {
  return (
    <header>
      <Link to="/" className="text-3xl font-medium">
        lewischan.dev
      </Link>
    </header>
  );
}

export default Header;
