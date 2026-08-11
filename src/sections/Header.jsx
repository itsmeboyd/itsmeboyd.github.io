import Logo from "../components/Logo";
import HeaderNavigation from "../components/HeaderNavigation";

function Header() {
  return (
    <header className="sticky top-0 w-full py-2 md:py-5 z-99">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center">
          <Logo />
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
