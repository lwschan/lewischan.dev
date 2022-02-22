import { Link } from 'gatsby';

function Header() {
  return (
    <div className="w-full h-14">
      <header className="container h-full py-2">
        <div className="h-full flex flex-row justify-between items-center">
          <div className="flex-initial">
            <Link to="/" className="text-3xl font-bold font-mono">
              lc;
            </Link>
          </div>
          <div>
            <nav>
              <Link className="mr-4 last:mr-0" to="/about">
                About
              </Link>
              <Link className="mr-4 last:mr-0" to="https://github.com/lewisgauss" target="_blank">
                GitHub
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
