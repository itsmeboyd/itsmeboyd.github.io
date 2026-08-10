import { Lineicons } from "@lineiconshq/react-lineicons";
import { Code1Outlined, EyeOutlined } from "@lineiconshq/free-icons";
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
        <h3 className="text-xl font-semibold text-neutral-100">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <p className="text-xs text-neutral-300">
          <span className="font-semibold text-gray-100">Tech Stack:</span>{" "}
          {project.tech}
        </p>
      </div>
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
          <Lineicons icon={Code1Outlined} size={18} color="currentColor" />
          <span>View Code</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
