import { TechStackData } from "../data/TechStackData";

export const handleHashChange = (setCurrentHash) => {
  return () => {
    setCurrentHash(window.location.hash || "#home");
  };
};

export const getTechStackIcon = (techName) => {
  const iconName = TechStackData.find((tech) => tech.name === techName)?.icon;
  console.log(
    "getTechStackIcon called with techName:",
    techName,
    "found icon:",
    iconName,
  );
  // return iconName || "";
};
