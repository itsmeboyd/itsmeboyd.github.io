import Logo from "../components/Logo";
import HeaderNavigation from "../components/HeaderNavigation";
import SocialMedia from "../components/SocialMedia";

function Header() {
  return (
    <header className="sticky top-0 w-full py-2 md:py-5 z-99">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
          <div className="logo">
            <Logo />
          </div>
          <div className="nav-menu flex items-center justify-end gap-10 col-span-2">
            <HeaderNavigation />
            <SocialMedia />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
