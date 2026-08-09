import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

function Header() {
  return (
    <header className="sticky top-0 w-full py-5 z-9">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="logo columns-1">
            <Logo />
          </div>
          <div className="nav-menu flex items-center justify-end gap-10 columns-2">
            <Navigation />
            <SocialMedia />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
