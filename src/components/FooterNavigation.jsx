import { useState, useEffect } from "react";
import { NavigationItems } from "../data/NavigationData";
import { handleHashChange } from "../lib/utils";

function FooterNavigation() {
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
    <nav className="w-auto flex justify-center md:justify-end">
      <ul className="flex flex-row gap-2 md:gap-8 flex-auto flex-wrap justify-center md:justify-end">
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
              <a
                href={menu.href}
                className="whitespace-nowrap text-xs md:text-normal"
              >
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
