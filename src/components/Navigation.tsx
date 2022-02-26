import { Link } from 'gatsby';

function Navigation() {
  return (
    <nav>
      <ul className="flex justify-around">
        <li className="mr-4 last:mr-0">
          <Link className="" to="/about">
            About
          </Link>
        </li>
        <li className="mr-4 last:mr-0">
          <Link to="https://github.com/lewisgauss" target="_blank">
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
