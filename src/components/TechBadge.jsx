import { Lineicons } from "@lineiconshq/react-lineicons";
import { TechStackData } from "../data/TechStackData";
import * as Icons from "@lineiconshq/free-icons";

function getTechInfo(name) {
  return TechStackData.find(
    (item) => item.name.toLowerCase() === name.toLowerCase(),
  );
}

// 2. Component to render dynamic icon
export function TechBadge({ name, size = 20 }) {
  const tech = getTechInfo(name);

  if (!tech) return null;

  // Look up the icon from the imported Icons object using string name
  const IconComponent = Icons[tech.icon];

  if (!IconComponent) return null;

  return (
    <span className="inline-flex items-center gap-1 align-middle">
      <Lineicons icon={IconComponent} size={size} color={tech.color} />
    </span>
  );
}
