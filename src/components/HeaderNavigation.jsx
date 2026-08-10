import { useState, useEffect } from "react";
import { NavigationItems } from "../data/NavigationData";
import { handleHashChange } from "../lib/utils";

function HeaderNavigation() {
  const [currentHash, setCurrentHash] = useState(
    window.location.hash || "#home",
  );

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="w-auto hidden md:flex">
      <ul className="flex flex-row gap-8">
        {NavigationItems.map((menu, index) => {
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

export default HeaderNavigation;
