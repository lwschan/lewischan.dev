import Navigation from 'components/Navigation';
import HomeLink from 'components/HomeLink';

function Header() {
  return (
    <div className="w-full border-b fixed bg-white">
      <header className="container h-14 py-2">
        <div className="h-full flex flex-row justify-between items-center">
          <div className="flex-initial">
            <HomeLink />
          </div>
          <div>
            <Navigation />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
