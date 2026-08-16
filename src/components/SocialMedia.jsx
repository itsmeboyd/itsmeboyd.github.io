import { Lineicons } from "@lineiconshq/react-lineicons";
import * as Icons from "@lineiconshq/free-icons";
import { SocialMediaData } from "../data/SocialMediaData";

function SocialMedia() {
  return (
    <div className="social_media flex gap-2 justify-center md:justify-start py-4 md:py-0">
      {SocialMediaData.map((link, index) => (
        <a
          href={link.href}
          className="text-white hover:text-(--accent)"
          title={link.label}
          target="_blank"
          key={index}
        >
          <Lineicons
            icon={Icons[link.icon]}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
