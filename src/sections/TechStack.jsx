import { Lineicons } from "@lineiconshq/react-lineicons";
import * as Icons from "@lineiconshq/free-icons";
import { TechStackData } from "../data/TechStackData";

export default function TechStack() {
  return (
    <section id="techStack" className="py-10 md:py-20 bg-[#0c0d0d] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold mb-2">
            Tech Stack<span className="text-[#38d353]">:</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            Technologies I've been working with recently
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
          {TechStackData.filter((tech) => tech.isMajorTech).map((tech) => {
            const IconComponent = Icons[tech.icon];
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center group text-center p-5 rounded-lg bg-[#111111] border border-neutral-800 space-y-4 hover:border-green-800/50 transition-colors"
              >
                <div className="transition-transform group-hover:scale-110">
                  <Lineicons
                    icon={IconComponent}
                    size={48}
                    color={tech.color}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
