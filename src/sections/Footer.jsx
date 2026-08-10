import Logo from "../components/Logo";
import FooterNavigation from "../components/FooterNavigation";
import SocialMedia from "../components/SocialMedia";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-4 md:gap-10 border-b border-neutral-800 pb-10">
          <div className="text-4xl font-extrabold flex items-center justify-center md:justify-start w-full">
            <Logo />
          </div>

          <div className="flex flex-row gap-6 text-sm text-gray-400 justify-center md:justify-end w-full">
            <a
              href="tel:+639121451306"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>+639121451306</span>
            </a>
            <a
              href="mailto:vadjr27@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>vadjr27@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-sm items-center text-gray-500 py-10">
          <SocialMedia />
          <FooterNavigation />
        </div>
      </div>
      <div className="bg-black text-center text-xs text-neutral-700 py-6 border-t border-neutral-900">
        © {new Date().getFullYear()} Boyd Delfin. All rights reserved.
      </div>
    </footer>
  );
}
