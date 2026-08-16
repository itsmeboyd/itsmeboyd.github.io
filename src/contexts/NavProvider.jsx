import { useState, useEffect } from "react";
import { NavContext } from "./NavContext";

export function NavProvider({ children }) {
  const [currentHash, setCurrentHash] = useState(
    window.location.hash || "#home",
  );
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <NavContext.Provider
      value={{ activeNav, setActiveNav, currentHash, setCurrentHash }}
    >
      {children}
    </NavContext.Provider>
  );
}

export default NavProvider;
