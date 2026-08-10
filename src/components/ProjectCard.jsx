import { Lineicons } from "@lineiconshq/react-lineicons";
import { Link2AngularRightOutlined } from "@lineiconshq/free-icons";
import { TechBadge } from "./TechBadge";

function ProjectCard({ project }, index) {
  return (
    <div
      key={index}
      className="bg-[#111111] border border-neutral-800 rounded-lg p-6 flex flex-col space-y-4 hover:border-green-800/50 transition-colors"
    >
      <div className="w-full aspect-3/2 bg-[#2d2d2d] rounded-md flex items-center justify-center overflow-hidden">
        <img
          src={project.imgUrl}
          alt="Thumbnail"
          className="rounded-md aspect-3/2 block object-top object-cover"
        />
      </div>
      <div className="grow space-y-3">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-neutral-100">
            {project.title}
          </h3>
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 hover:text-[#38d353] transition-colors"
            >
              <Lineicons
                icon={Link2AngularRightOutlined}
                size={18}
                color="#38d353"
              />
            </a>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="text-xs text-neutral-300 flex justify-between items-center flex-wrap mt-7">
          <span className="font-semibold text-gray-100">Tech Stack:</span>
          <div className="flex align-center gap-2">
            {project.tech.map((tech, index) => (
              <TechBadge key={index} name={tech} size={16} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
