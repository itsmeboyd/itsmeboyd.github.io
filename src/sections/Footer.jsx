import Logo from "../components/Logo";
import FooterNavigation from "../components/FooterNavigation";
import SocialMedia from "../components/SocialMedia";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-neutral-800 pb-12 mb-10">
          <div className="text-4xl font-extrabold flex items-center">
            <Logo />
          </div>

          <div className="flex flex-col flex-row gap-6 text-sm text-gray-400">
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

        <div className="grid md:grid-cols-4 gap-8 text-sm items-center text-gray-500">
          <SocialMedia />
          <div className="col-span-2 justify-center">
            <FooterNavigation />
          </div>
          <div className="text-center md:text-right text-xs">
            Built by{" "}
            <span className="text-[#38d353] font-semibold">BOYD DELFIN</span>
          </div>
        </div>

        <div className="text-center text-xs text-neutral-700 mt-12 pt-6 border-t border-neutral-900">
          © 2026 Boyd Delfin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
