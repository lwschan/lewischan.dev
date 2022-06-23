import { Link } from 'gatsby';

function Navigation() {
  return (
    <nav>
      <ul className="flex justify-around">
        <li className="mr-4 last:mr-0">
          <Link to="/about">About</Link>
        </li>
        <li className="mr-4 last:mr-0">
          <a href="https://github.com/lwschan" target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
