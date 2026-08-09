import { useState, useEffect } from "react";

function Navigation() {
  const menuItems = [
    {
      label: "Home",
      href: "#home",
    },
    { label: "Tech Stack", href: "#techStack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

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
      <ul className="flex flex-row gap-8">
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
              <a href={menu.href}>{menu.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
