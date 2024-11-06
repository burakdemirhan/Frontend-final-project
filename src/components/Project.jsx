import useLanguage from "../hooks/useLanguage";
import { ceviri } from "../language";

export default function Project() {
  const { leanguage } = useLanguage();
  return (
    <div className="flex justify-between gap-6 p-4">
      {ceviri[leanguage].projectsList.map((project, index) => (
        <div
          key={index}
          className="w-[18rem] h-[27rem] bg-white rounded-lg shadow-lg"
        >
          <img
            alt={project.ptitle}
            src={project.image}
            className="h-[12rem] w-full object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h5 className="text-[#4338CA] font-semibold">{project.ptitle}</h5>
            <p className="text-[#6B7280] mt-2 text-sm">{project.pdesc}</p>
            <div className="mt-4 flex gap-2">
              {project.technologies.map((tech, techIndex) => (
                <button
                  key={techIndex}
                  className="bg-white text-[#3730A3] px-3 py-1 rounded-lg text-xs"
                >
                  {tech}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <a href={project.github} className="text-[#3730A3] text-sm">
                Github
              </a>
              <a href={project.site} className="text-[#3730A3] text-sm">
                View Site
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
