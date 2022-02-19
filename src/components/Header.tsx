import { Link } from 'gatsby';

function Header() {
  return (
    <header>
      <div className="container py-2">
        <div className="flex flex-row justify-between">
          <div className="flex-initial ">
            <Link to="/" className="text-3xl font-medium">
              lewischan.dev
            </Link>
          </div>
          <div>test</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
