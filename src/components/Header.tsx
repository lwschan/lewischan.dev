import Navigation from 'components/Navigation';
import HomeLink from 'components/HomeLink';

function Header() {
  return (
    <div className="w-full h-14">
      <header className="container h-full py-4">
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
