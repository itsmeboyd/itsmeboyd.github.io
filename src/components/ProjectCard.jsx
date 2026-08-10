import { TechBadge } from "./TechBadge";

function ProjectCard({ project }, index) {
  return (
    <div
      key={index}
      className="bg-[#111111] border border-neutral-800 rounded-lg p-6 flex flex-col space-y-4 hover:border-green-800/50 transition-colors"
    >
      <div className="w-full aspect-3/2 bg-[#2d2d2d] rounded-md flex items-center justify-center overflow-hidden relative">
        {project.liveUrl !== "#" ? (
          <span className="absolute top-2 right-2 z-9 rounded-lg pt-3 pb-2.5 px-2 bg-(--accent) flex items-center justify-center text-[8px] leading-0">
            PUBLISHED
          </span>
        ) : (
          <span className="absolute top-2 right-2 z-9 rounded-lg pt-3 pb-2.5 px-2 bg-neutral-800 flex items-center justify-center text-[8px] leading-0">
            ONGOING
          </span>
        )}
        <img
          src={project.imgUrl}
          alt="Thumbnail"
          className="rounded-md aspect-3/2 block object-top object-cover"
        />
      </div>
      <div className="grow space-y-3">
        {project.liveUrl !== "#" ? (
          <h3 className="text-xl font-semibold flex items-center justify-between w-full">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 hover:text-(--accent) transition-colors"
            >
              {project.title}
            </a>
          </h3>
        ) : (
          <h3 className="text-xl font-semibold flex flex-row items-center justify-between w-full">
            {project.title}
          </h3>
        )}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="text-xs text-neutral-300 flex justify-between items-center flex-wrap mt-7">
          <span className="font-semibold text-gray-100">Techs:</span>
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
