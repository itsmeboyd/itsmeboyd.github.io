import { Lineicons } from "@lineiconshq/react-lineicons";
import { Code1Outlined, EyeOutlined } from "@lineiconshq/free-icons";

const PROJECT_DATA = [
  {
    title: "Portfolio Website",
    description:
      "A responsive single-page portfolio designed and built with ReactJS and Vite, featuring custom state management, smooth scrolling navigation, and sleek Tailwind CSS styling.",
    tech: "ReactJS, Vite, Tailwind CSS",
    imgUrl: "/assets/portfolio_thumbnail.png",
    liveUrl: "https://itsmeboyd.github.io",
    codeUrl: "#",
  },
  {
    title: "Hotel Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ipsam reprehenderit explicabo repellendus fuga necessitatibus, eaque quae ipsum nam ad doloremque iste?",
    tech: "HTML, CSS, JS",
    liveUrl: "#",
    codeUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0c0d0d] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-2">
            Projects<span className="text-[#38d353]">:</span>
          </h2>
          <p className="text-gray-400 text-lg">Things I’ve built so far</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_DATA.map((project, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-neutral-800 rounded-lg p-6 flex flex-col space-y-4 hover:border-green-800/50 transition-colors"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-[#2d2d2d] rounded-md flex items-center justify-center overflow-hidden">
                <img
                  src={project.imgUrl}
                  alt="Thumbnail"
                  className="rounded-md block object-top object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="grow space-y-3">
                <h3 className="text-xl font-semibold text-neutral-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <p className="text-xs text-neutral-300">
                  <span className="font-semibold text-gray-100">
                    Tech Stack:
                  </span>{" "}
                  {project.tech}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex justify-between items-center text-sm pt-3 border-t border-neutral-800">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 hover:text-[#38d353] transition-colors"
                >
                  <Lineicons icon={EyeOutlined} size={18} color="#38d353" />
                  <span>Live Preview</span>
                </a>
                <a
                  href={project.codeUrl}
                  className="flex items-center gap-2 hover:text-[#38d353] transition-colors"
                >
                  <Lineicons
                    icon={Code1Outlined}
                    size={18}
                    color="currentColor"
                  />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
