import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  LinkedinOutlined,
  GithubOutlined,
  FacebookOutlined,
} from "@lineiconshq/free-icons";

function SocialMedia() {
  const socialMedia = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vadjr/",
      icon: LinkedinOutlined,
    },
    {
      label: "Github",
      href: "https://itsmeboyd.github.io",
      icon: GithubOutlined,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/boyd.delfin",
      icon: FacebookOutlined,
    },
  ];

  return (
    <div className="social_media flex gap-2 justify-center md:justify-start">
      {socialMedia.map((link, index) => (
        <a
          href={link.href}
          className="text-white hover:text-(--accent)"
          title={link.label}
          target="_blank"
          key={index}
        >
          <Lineicons
            icon={link.icon}
            size={24}
            color="white"
            strokeWidth={1.5}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
