import { useState, useEffect } from "react";
import { menuItems } from "../data/MenuItems";

function FooterNavigation() {
  const [currentHash, setCurrentHash] = useState(
    window.location.hash || "#home",
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="w-auto flex justify-center">
      <ul className="flex flex-row gap-4 md:gap-8 flex-wrap">
        {menuItems.map((menu, index) => {
          const isActive = currentHash === menu.href;
          return (
            <li
              className={
                isActive
                  ? "text-(--accent)"
                  : "text-white hover:text-(--accent)"
              }
              onClick={() => setCurrentHash(menu.href)}
              key={index}
            >
              <a href={menu.href} className="whitespace-nowrap">
                {menu.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default FooterNavigation;
