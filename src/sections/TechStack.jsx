import { Lineicons } from "@lineiconshq/react-lineicons";
import { TechStackData } from "../data/TechStackData";

export default function TechStack() {
  return (
    <section id="techStack" className="py-10 md:py-20 bg-[#0c0d0d] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-xl md:text-4xl font-bold mb-2">
            Tech Stack<span className="text-[#38d353]">:</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            Technologies I've been working with recently
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
          {TechStackData.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center group text-center"
            >
              <div className="transition-transform group-hover:scale-110">
                <Lineicons icon={tech.icon} size={48} color={tech.color} />
              </div>
              <span className="mt-3 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
