import { ExperienceData } from "../data/ExperienceData";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0c0d0d] text-white py-20 px-6">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-xl md:text-4xl font-bold tracking-tight">
            Experience<span className="text-[#38d353]">:</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mt-2 font-normal">
            Career History & Impact
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Green Dotted Line */}
          <div className="absolute left-1.75 top-6 bottom-6 border-l-2 border-dashed border-[#38d353]/70 z-0" />

          {/* Cards List */}
          <div className="space-y-6">
            {ExperienceData.map((job, index) => (
              <div key={index} className="relative flex items-center gap-6">
                {/* Green Dot Node */}
                <div className="relative z-10 shrink-0 w-4 h-4 rounded-full bg-[#38d353]" />

                {/* Experience Card */}
                <div className="grow bg-[#1c1c1c] rounded-xl p-6 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-neutral-800/40">
                  {/* Left Column: Role & Company */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                      {job.role}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{job.company}</p>
                  </div>

                  {/* Right Column: Date & Duration */}
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
