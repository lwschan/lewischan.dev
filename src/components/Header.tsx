import { Link } from 'gatsby';

function Header() {
  return (
    <div className="fixed w-full h-14 bg-gray-50 drop-shadow-sm">
      <header className="container h-full py-2">
        <div className="h-full flex flex-row justify-between items-center">
          <div className="flex-initial ">
            <Link to="/" className="text-3xl font-bold font-mono">
              lc;
            </Link>
          </div>
          <div>test</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
