import { ProjectsData } from "../data/ProjectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:py-20 bg-[#0c0d0d] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold mb-2">
            Projects<span className="text-[#38d353]">:</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            Things I’ve built so far
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-8">
          {ProjectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
