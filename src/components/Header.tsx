import { Link } from 'gatsby';

function Header() {
  return (
    <header className="flex flex-row justify-between">
      <div className="flex-initial ">
        <Link to="/" className="text-3xl font-medium">
          lewischan.dev
        </Link>
      </div>
      <div>test</div>
    </header>
  );
}

export default Header;
