import { TechBadge } from "./TechBadge";

function ProjectCard({ project }, index) {
  //! Check if the project is published or ongoing and return the appropriate badge
  const StatusBadge = () => {
    const badgeClass =
      project.liveUrl !== "#"
        ? "bg-(--accent) text-(--accent-fg)"
        : "bg-neutral-800 text-neutral-300";
    const finalBadgeClass = `${badgeClass} absolute top-2 right-2 z-9 rounded-lg pt-3 pb-2.5 px-2 font-bold flex items-center justify-center text-[8px] leading-0`;
    const statusText = project.liveUrl !== "#" ? "PUBLISHED" : "ONGOING";

    return <span className={finalBadgeClass}>{statusText}</span>;
  };

  //! Render the project title with a link to the live demo if available, otherwise just display the title
  const CardTitle = () => {
    const titleClass =
      project.liveUrl !== "#"
        ? "text-neutral-100 hover:text-(--accent) transition-colors"
        : "text-neutral-100";
    const finalTitleClass = `${titleClass} text-xl font-semibold flex items-center justify-between w-full`;
    const titleText = project.title;

    const hasLiveUrl = project.liveUrl !== "#" ? "" : "pointer-events-none";

    return (
      <h3 className={finalTitleClass}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={hasLiveUrl}
        >
          {titleText}
        </a>
      </h3>
    );
  };

  //* Render the project card with the project details, including title, description, technologies used, and links to live demo and code repository
  return (
    <div
      key={index}
      className="bg-[#111111] border border-neutral-800 rounded-lg p-6 flex flex-col space-y-4 hover:border-green-800/50 transition-colors"
    >
      <div className="w-full aspect-3/2 bg-[#2d2d2d] rounded-md flex items-center justify-center overflow-hidden relative">
        {StatusBadge(project.liveUrl)}

        <img
          src={project.imgUrl}
          alt="Thumbnail"
          className="rounded-md aspect-3/2 block object-top object-cover"
        />
      </div>
      <div className="grow space-y-3">
        {CardTitle(project.liveUrl)}
        <div className="text-xs text-neutral-300 flex items-center flex-wrap">
          <span className="font-semibold text-gray-400 mr-2">Made With:</span>
          <div className="flex align-center gap-2">
            {project.tech.map((tech, index) => (
              <TechBadge key={index} name={tech} size={20} />
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        {project.codeUrl !== "#" && (
          <div className="flex items-center flex-wrap">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 flex items-center gap-1.5 hover:text-(--accent) transition-colors"
            >
              <TechBadge name={"github"} size={15} />{" "}
              <span className="leading-none mt-0.75">Raw Code</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
