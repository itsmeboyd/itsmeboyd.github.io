import { useState, useEffect } from "react";
import { clsx } from "clsx";

import { NavigationItems } from "../data/NavigationData";
import { handleHashChange } from "../lib/utils";
import SocialMedia from "./SocialMedia";

function HeaderNavigation() {
  const [currentHash, setCurrentHash] = useState(
    window.location.hash || "#home",
  );

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div
      id="HeaderNavigation"
      className="flex items-center justify-end col-span-1 md:col-span-2"
    >
      <button
        onClick={() => setIsActive(!isActive)}
        className={clsx(
          "peer group md:hidden flex flex-col gap-x-2 justify-between text-white min-h-4",
          {
            active: isActive,
            "": !isActive,
          },
        )}
      >
        {/* Top Bar */}
        <div className="h-0.5 w-6.5 bg-(--accent) transition-transform duration-300 ease-in-out origin-top group-[.active]:rotate-45 group-[.active]:translate-y-2" />

        {/* Middle Bar */}
        <div className="h-0.5 w-6.5 bg-(--accent) transition-opacity duration-300 ease-in-out group-[.active]:opacity-0" />

        {/* Bottom Bar */}
        <div className="h-0.5 w-6.5 bg-(--accent) transition-transform duration-300 ease-in-out origin-bottom group-[.active]:-rotate-45 group-[.active]:-translate-y-2" />
      </button>
      <div className="absolute top-14.5 hidden md:flex opacity-0 md:opacity-100 peer-[.active]:opacity-100 peer-[.active]:flex transition-opacity duration-300 ease-in-out md:static flex-col items-center md:flex-row md:gap-x-8 md:justify-end bg-[#0c0d0d]/95 md:bg-transparent min-w-60 md:min-w-auto">
        <nav className="w-full">
          <ul className="flex flex-col md:flex-row gap-0">
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
                    className="block whitespace-nowrap px-5 py-2 border-b md:border-none border-b-neutral-900"
                  >
                    {menu.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <SocialMedia />
      </div>
    </div>
  );
}

export default HeaderNavigation;
