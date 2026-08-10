import Lineicons from "@lineiconshq/react-lineicons";
import {
  Buildings1Outlined,
  MapMarker1Outlined,
  Briefcase2Outlined,
} from "@lineiconshq/free-icons";
import { ExperienceData } from "../data/ExperienceData";

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-20 bg-[#0c0d0d] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold tracking-tight">
            Experience<span className="text-[#38d353]">:</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mt-2 font-normal">
            Career History & Impact
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1.75 top-6 bottom-6 border-l-2 border-dashed border-[#38d353]/70 z-0" />
          <div className="space-y-6">
            {ExperienceData.map((job, index) => (
              <div key={index} className="relative flex items-center gap-6 ">
                <div className="relative z-10 shrink-0 w-4 h-4 rounded-full bg-[#38d353]" />
                <div className="grow md:px-8 md:py-6 md:flex-row md:items-center justify-between gap-4 bg-[#111111] border border-neutral-800 rounded-lg p-6 flex flex-col space-y-4 hover:border-green-800/50 transition-colors">
                  <div className="m-0">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                      {job.role}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                      <span>
                        <Lineicons icon={Buildings1Outlined} size={16} />
                      </span>
                      <span className="font-medium">{job.company}</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                      <span>
                        <Lineicons icon={MapMarker1Outlined} size={16} />
                      </span>
                      <span className="font-medium">{job.location}</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                      <span>
                        <Lineicons icon={Briefcase2Outlined} size={16} />
                      </span>
                      <span className="font-medium">{job.workplace}</span>
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-gray-300 text-sm">{job.date}</p>
                    <p className="text-[#38d353] text-sm mt-0.5 font-medium">
                      {job.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
